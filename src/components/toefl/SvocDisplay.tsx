"use client";

import { useState } from 'react';
import type { ToeflQuestionPart, SvocRole } from '@/types';

// ── SVOC配色定義 ──────────────────────────────────────
const SVOC_STYLES: Record<
  SvocRole,
  { borderColor: string; textColor: string; labelColor: string; label: string }
> = {
  S: {
    borderColor: 'border-b-red-500',
    textColor: 'text-gray-800',
    labelColor: 'text-red-500',
    label: 'S',
  },
  V: {
    borderColor: 'border-b-blue-500',
    textColor: 'text-gray-800',
    labelColor: 'text-blue-500',
    label: 'V',
  },
  O: {
    borderColor: 'border-b-green-500',
    textColor: 'text-gray-800',
    labelColor: 'text-green-500',
    label: 'O',
  },
  C: {
    borderColor: 'border-b-orange-500',
    textColor: 'text-gray-800',
    labelColor: 'text-orange-500',
    label: 'C',
  },
  M: {
    borderColor: '',
    textColor: 'text-gray-400',
    labelColor: 'text-gray-400',
    label: 'M',
  },
};

interface SvocDisplayProps {
  /** 表示するパーツ配列（ダミーを除いた正解のパーツ） */
  parts: ToeflQuestionPart[];
}

/**
 * SVOC色分け表示 + M（修飾語）折り畳みトグル
 *
 * 配色ルール:
 * - S: 赤い下線 (border-bottom: 3px) + 下に "S" ラベル
 * - V: 青い下線 + "V" ラベル
 * - O: 緑の下線 + "O" ラベル
 * - C: オレンジの下線 + "C" ラベル
 * - M: グレー文字色、下線なし、前後にカッコ ( ) 付与
 *
 * モバイル対応:
 * - Flexbox + flex-wrap + align-items: baseline
 * - 各チャンクに十分な margin-bottom (ラベルとの被り防止)
 */
export default function SvocDisplay({ parts }: SvocDisplayProps) {
  const [collapseM, setCollapseM] = useState(false);

  return (
    <div className="space-y-4">
      {/* 骨格抽出トグル */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">
          文構造 SVOC 表示
        </span>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <span className="text-xs text-gray-400">
            骨格のみ表示
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={collapseM}
            onClick={() => setCollapseM(!collapseM)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
              collapseM ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
                collapseM ? 'translate-x-4.5' : 'translate-x-0.5'
              }`}
            />
          </button>
        </label>
      </div>

      {/* SVOC 色分けテキスト */}
      <div
        className="flex flex-wrap items-baseline gap-x-2 gap-y-6"
        style={{ lineHeight: '1.8' }}
      >
        {parts.map((part) => {
          const style = SVOC_STYLES[part.role];
          const isM = part.role === 'M';

          if (isM) {
            return (
              <span
                key={part.id}
                className={`inline-flex flex-col items-center mb-2 ${style.textColor}`}
              >
                <span className="text-base leading-relaxed">
                  {collapseM ? (
                    <span className="text-gray-300 font-mono text-sm">
                      [...]
                    </span>
                  ) : (
                    <>
                      <span className="text-gray-300">(</span>
                      {part.text}
                      <span className="text-gray-300">)</span>
                    </>
                  )}
                </span>
              </span>
            );
          }

          return (
            <span
              key={part.id}
              className="inline-flex flex-col items-center mb-2"
            >
              <span
                className={`text-base leading-relaxed border-b-[3px] pb-0.5 ${style.borderColor} ${style.textColor}`}
              >
                {part.text}
              </span>
              <span
                className={`text-[10px] font-bold mt-1 leading-none ${style.labelColor}`}
              >
                {style.label}
              </span>
            </span>
          );
        })}
      </div>

      {/* 凡例 */}
      <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
        {(['S', 'V', 'O', 'C', 'M'] as SvocRole[]).map((role) => {
          const s = SVOC_STYLES[role];
          return (
            <span
              key={role}
              className="flex items-center gap-1 text-[10px]"
            >
              {role !== 'M' ? (
                <span
                  className={`w-4 h-0.5 rounded-full ${
                    role === 'S'
                      ? 'bg-red-500'
                      : role === 'V'
                        ? 'bg-blue-500'
                        : role === 'O'
                          ? 'bg-green-500'
                          : 'bg-orange-500'
                  }`}
                />
              ) : (
                <span className="text-gray-400 font-mono">()</span>
              )}
              <span className={s.labelColor}>
                {role === 'S'
                  ? '主語'
                  : role === 'V'
                    ? '述語動詞'
                    : role === 'O'
                      ? '目的語'
                      : role === 'C'
                        ? '補語'
                        : '修飾語'}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
