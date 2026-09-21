"use client";

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
  type DragOverEvent,
  type UniqueIdentifier,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getMockToeflQuestions } from '@/data/toeflMockData';
import type { ToeflQuestion, ToeflQuestionPart } from '@/types';

// ── ドラッグ可能なチャンクアイテム ─────────────────────
function SortableChunk({
  part,
  containerId,
}: {
  part: ToeflQuestionPart;
  containerId: string;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: part.id,
    data: { containerId, part },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="px-4 py-2.5 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium text-gray-700 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md hover:border-blue-200 transition-all select-none touch-none"
    >
      {part.text}
    </div>
  );
}

// ── オーバーレイ用のチャンク表示 ───────────────────────
function ChunkOverlay({ part }: { part: ToeflQuestionPart }) {
  return (
    <div className="px-4 py-2.5 rounded-xl border-2 border-blue-400 bg-blue-50 text-sm font-medium text-blue-700 shadow-lg select-none">
      {part.text}
    </div>
  );
}

// ── メインページ ──────────────────────────────────────
export default function ToeflReorderPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<ToeflQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState<
    { question: ToeflQuestion; isCorrect: boolean }[]
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setQuestions(getMockToeflQuestions('reorder'));
    setMounted(true);
  }, []);

  const q = questions[currentIdx];
  if (!mounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!q) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
        <span className="text-5xl">📚</span>
        <p className="text-gray-600 font-medium">問題がありません</p>
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
        >
          ホームへ
        </button>
      </div>
    );
  }

  return (
    <ReorderQuiz
      key={q.id}
      question={q}
      currentIdx={currentIdx}
      totalCount={questions.length}
      onAnswer={(isCorrect) => {
        const newResults = [...results, { question: q, isCorrect }];
        setResults(newResults);
        if (currentIdx + 1 >= questions.length) {
          // 結果画面へ遷移 — sessionStorage に結果を保存
          sessionStorage.setItem(
            'toefl_results',
            JSON.stringify(newResults),
          );
          router.push('/toefl/result');
        } else {
          setCurrentIdx((i) => i + 1);
        }
      }}
    />
  );
}

// ── 1問分のチャンク整序クイズ ─────────────────────────
function ReorderQuiz({
  question,
  currentIdx,
  totalCount,
  onAnswer,
}: {
  question: ToeflQuestion;
  currentIdx: number;
  totalCount: number;
  onAnswer: (isCorrect: boolean) => void;
}) {
  // 正解順序 = is_dummy でないパーツの id 配列
  const correctIds = useMemo(
    () =>
      question.parts
        .filter((p) => !p.is_dummy)
        .map((p) => p.id),
    [question],
  );

  // パーツをIDでルックアップするマップ
  const partsMap = useMemo(() => {
    const map = new Map<string, ToeflQuestionPart>();
    question.parts.forEach((p) => map.set(p.id, p));
    return map;
  }, [question]);

  // 初期状態: 全パーツをPoolにシャッフルして配置
  const [poolIds, setPoolIds] = useState<UniqueIdentifier[]>(() => {
    const ids = question.parts.map((p) => p.id);
    // Fisher–Yates shuffle
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    return ids;
  });
  const [answerIds, setAnswerIds] = useState<UniqueIdentifier[]>([]);

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // どのコンテナにアイテムが属しているかを返す
  const findContainer = useCallback(
    (id: UniqueIdentifier): 'pool' | 'answer' | null => {
      if (poolIds.includes(id)) return 'pool';
      if (answerIds.includes(id)) return 'answer';
      // コンテナ自体のIDかチェック
      if (id === 'pool' || id === 'answer') return id as 'pool' | 'answer';
      return null;
    },
    [poolIds, answerIds],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id);

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }

    // コンテナ間の移動
    if (activeContainer === 'pool' && overContainer === 'answer') {
      setPoolIds((prev) => prev.filter((id) => id !== active.id));
      setAnswerIds((prev) => {
        const overIndex = prev.indexOf(over.id);
        const insertIndex = overIndex >= 0 ? overIndex : prev.length;
        return [...prev.slice(0, insertIndex), active.id, ...prev.slice(insertIndex)];
      });
    } else if (activeContainer === 'answer' && overContainer === 'pool') {
      setAnswerIds((prev) => prev.filter((id) => id !== active.id));
      setPoolIds((prev) => [...prev, active.id]);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id);

    if (!activeContainer || !overContainer) return;

    // 同じコンテナ内での並べ替え
    if (activeContainer === overContainer) {
      if (activeContainer === 'answer') {
        const oldIndex = answerIds.indexOf(active.id);
        const newIndex = answerIds.indexOf(over.id);
        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          setAnswerIds((prev) => arrayMove(prev, oldIndex, newIndex));
        }
      } else if (activeContainer === 'pool') {
        const oldIndex = poolIds.indexOf(active.id);
        const newIndex = poolIds.indexOf(over.id);
        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          setPoolIds((prev) => arrayMove(prev, oldIndex, newIndex));
        }
      }
    }
    // コンテナ間移動は handleDragOver で処理済み
    // ただし、空コンテナにドロップした場合の処理
    if (activeContainer !== overContainer) {
      if (
        activeContainer === 'pool' &&
        (overContainer === 'answer' || over.id === 'answer')
      ) {
        if (poolIds.includes(active.id)) {
          setPoolIds((prev) => prev.filter((id) => id !== active.id));
          setAnswerIds((prev) => [...prev, active.id]);
        }
      } else if (
        activeContainer === 'answer' &&
        (overContainer === 'pool' || over.id === 'pool')
      ) {
        if (answerIds.includes(active.id)) {
          setAnswerIds((prev) => prev.filter((id) => id !== active.id));
          setPoolIds((prev) => [...prev, active.id]);
        }
      }
    }
  };

  const handleSubmit = () => {
    if (submitted) return;
    // 正誤判定: answerIdsが正解順序と完全一致かつダミーが含まれていないか
    const answerCorrectIds = answerIds.filter(
      (id) => !partsMap.get(id as string)?.is_dummy,
    );
    const hasDummy = answerIds.some(
      (id) => partsMap.get(id as string)?.is_dummy,
    );
    const correct =
      !hasDummy &&
      answerCorrectIds.length === correctIds.length &&
      answerCorrectIds.every((id, i) => id === correctIds[i]);

    setIsCorrect(correct);
    setSubmitted(true);
  };

  const activePart = activeId ? partsMap.get(activeId as string) : null;

  // タップ操作: Pool → Answer / Answer → Pool
  const handleTapPool = (id: UniqueIdentifier) => {
    if (submitted) return;
    setPoolIds((prev) => prev.filter((pid) => pid !== id));
    setAnswerIds((prev) => [...prev, id]);
  };

  const handleTapAnswer = (id: UniqueIdentifier) => {
    if (submitted) return;
    setAnswerIds((prev) => prev.filter((aid) => aid !== id));
    setPoolIds((prev) => [...prev, id]);
  };

  return (
    <div className="space-y-5 pb-36">
      {/* プログレスバー */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1.5">
          <span>チャンク整序 · TOEFL</span>
          <span>
            {currentIdx + 1} / {totalCount}
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIdx + 1) / totalCount) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* 日本語文 */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <p className="text-xs text-gray-400 mb-2">日本語</p>
        <p className="text-lg font-medium text-gray-800">
          {question.japanese_text}
        </p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {/* Answer Area（エリアA） */}
        <div>
          <p className="text-xs text-gray-400 mb-2">
            解答エリア — チャンクを正しい順序で並べよう
          </p>
          <SortableContext
            items={answerIds}
            strategy={verticalListSortingStrategy}
            id="answer"
          >
            <div
              className={`min-h-[80px] border-2 border-dashed rounded-2xl p-3 flex flex-wrap gap-2 transition-colors ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50'
                    : 'border-red-300 bg-red-50'
                  : 'border-blue-200 bg-blue-50/30'
              }`}
            >
              {answerIds.length === 0 && !submitted && (
                <span className="text-gray-300 text-sm self-center w-full text-center">
                  ここにチャンクを並べよう
                </span>
              )}
              {answerIds.map((id) => {
                const part = partsMap.get(id as string);
                if (!part) return null;
                return (
                  <div key={id} onClick={() => handleTapAnswer(id)}>
                    <SortableChunk part={part} containerId="answer" />
                  </div>
                );
              })}
            </div>
          </SortableContext>
        </div>

        {/* Pool Area（エリアB） */}
        <div>
          <p className="text-xs text-gray-400 mb-2">
            選択肢プール — ダミーに注意！
          </p>
          <SortableContext
            items={poolIds}
            strategy={verticalListSortingStrategy}
            id="pool"
          >
            <div className="min-h-[60px] rounded-2xl p-3 bg-gray-50 flex flex-wrap gap-2">
              {poolIds.length === 0 && (
                <span className="text-gray-300 text-sm self-center w-full text-center">
                  すべてのチャンクが選択されました
                </span>
              )}
              {poolIds.map((id) => {
                const part = partsMap.get(id as string);
                if (!part) return null;
                return (
                  <div key={id} onClick={() => handleTapPool(id)}>
                    <SortableChunk part={part} containerId="pool" />
                  </div>
                );
              })}
            </div>
          </SortableContext>
        </div>

        {/* ドラッグ中のオーバーレイ */}
        <DragOverlay>
          {activePart ? <ChunkOverlay part={activePart} /> : null}
        </DragOverlay>
      </DndContext>

      {/* 解答ボタン */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={answerIds.length === 0}
          className="w-full py-3.5 rounded-2xl bg-blue-600 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          解答する
        </button>
      )}

      {/* 正解/不正解 + 次へ */}
      {submitted && (
        <div
          className={`rounded-2xl p-5 ${
            isCorrect
              ? 'bg-emerald-500 text-white'
              : 'bg-red-400 text-white'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">
              {isCorrect ? '🎉' : '😅'}
            </span>
            <div>
              <p className="font-bold text-lg">
                {isCorrect ? '正解！' : '不正解...'}
              </p>
              <p className="text-sm text-white/80">
                {isCorrect
                  ? 'すばらしい！文構造を正しく把握できました'
                  : 'ダミーの除外や語順を確認しよう'}
              </p>
            </div>
          </div>

          {/* 正解の順序を表示 */}
          {!isCorrect && (
            <div className="bg-white/20 rounded-xl p-3 mb-3">
              <p className="text-xs font-semibold mb-2">正解の順序:</p>
              <div className="flex flex-wrap gap-1.5">
                {correctIds.map((id) => {
                  const part = partsMap.get(id as string);
                  return (
                    <span
                      key={id}
                      className="px-2 py-1 rounded-lg bg-white/30 text-xs font-medium"
                    >
                      {part?.text}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <button
            onClick={() => onAnswer(isCorrect)}
            className="w-full py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-colors"
          >
            {currentIdx + 1 >= totalCount ? '結果を見る →' : '次の問題へ →'}
          </button>
        </div>
      )}
    </div>
  );
}
