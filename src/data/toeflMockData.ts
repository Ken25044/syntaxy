import type { ToeflQuestion } from '@/types';

/**
 * TOEFL対策モード開発用モックデータ
 * - reorder: チャンク整序（ダミー選択肢あり）
 * - typing: Complete the Words
 */
export const toeflMockQuestions: ToeflQuestion[] = [
  // ── reorder問題 ──────────────────────────────────
  {
    id: 'toefl-mock-r1',
    question_type: 'reorder',
    japanese_text: 'その研究を行った研究者たちは、睡眠不足が認知能力に大きく影響することを発見した。',
    english_text: 'The researchers who conducted the study found that sleep deprivation significantly affects cognitive performance.',
    parts: [
      { id: 'r1-1', text: 'The researchers', role: 'S' },
      { id: 'r1-2', text: 'who conducted the study', role: 'M' },
      { id: 'r1-3', text: 'found', role: 'V' },
      { id: 'r1-4', text: 'that sleep deprivation significantly affects cognitive performance', role: 'O' },
      { id: 'r1-d1', text: 'in the laboratory', role: 'M', is_dummy: true },
    ],
  },
  {
    id: 'toefl-mock-r2',
    question_type: 'reorder',
    japanese_text: 'この地域の経済成長は、持続可能な農業慣行の導入に大きく依存している。',
    english_text: 'The economic growth of this region depends heavily on the adoption of sustainable agricultural practices.',
    parts: [
      { id: 'r2-1', text: 'The economic growth', role: 'S' },
      { id: 'r2-2', text: 'of this region', role: 'M' },
      { id: 'r2-3', text: 'depends', role: 'V' },
      { id: 'r2-4', text: 'heavily', role: 'M' },
      { id: 'r2-5', text: 'on the adoption of sustainable agricultural practices', role: 'M' },
      { id: 'r2-d1', text: 'despite recent setbacks', role: 'M', is_dummy: true },
    ],
  },
  {
    id: 'toefl-mock-r3',
    question_type: 'reorder',
    japanese_text: '20世紀初頭に開発された理論は、現代物理学の基礎と広く見なされている。',
    english_text: 'The theory developed in the early twentieth century is widely regarded as the foundation of modern physics.',
    parts: [
      { id: 'r3-1', text: 'The theory', role: 'S' },
      { id: 'r3-2', text: 'developed in the early twentieth century', role: 'M' },
      { id: 'r3-3', text: 'is widely regarded', role: 'V' },
      { id: 'r3-4', text: 'as the foundation of modern physics', role: 'C' },
      { id: 'r3-d1', text: 'by many scholars', role: 'M', is_dummy: true },
      { id: 'r3-d2', text: 'however', role: 'M', is_dummy: true },
    ],
  },
  // ── typing問題 ──────────────────────────────────
  {
    id: 'toefl-mock-t1',
    question_type: 'typing',
    japanese_text: '睡眠不足は認知能力に大きく影響する。',
    english_text: 'Sleep deprivation significantly affects cognitive performance.',
    target_word: 'significantly',
    parts: [
      { id: 't1-1', text: 'Sleep deprivation', role: 'S' },
      { id: 't1-2', text: 'significantly', role: 'M', is_target: true },
      { id: 't1-3', text: 'affects', role: 'V' },
      { id: 't1-4', text: 'cognitive performance', role: 'O' },
    ],
  },
  {
    id: 'toefl-mock-t2',
    question_type: 'typing',
    japanese_text: '気候変動の影響は、北極圏で特に顕著である。',
    english_text: 'The consequences of climate change are particularly pronounced in the Arctic region.',
    target_word: 'pronounced',
    parts: [
      { id: 't2-1', text: 'The consequences', role: 'S' },
      { id: 't2-2', text: 'of climate change', role: 'M' },
      { id: 't2-3', text: 'are', role: 'V' },
      { id: 't2-4', text: 'particularly', role: 'M' },
      { id: 't2-5', text: 'pronounced', role: 'C', is_target: true },
      { id: 't2-6', text: 'in the Arctic region', role: 'M' },
    ],
  },
  {
    id: 'toefl-mock-t3',
    question_type: 'typing',
    japanese_text: '教授は、すべての学生が奨学金の応募資格があるわけではないことを強調した。',
    english_text: 'The professor emphasized that not all students are eligible for the scholarship.',
    target_word: 'eligible',
    parts: [
      { id: 't3-1', text: 'The professor', role: 'S' },
      { id: 't3-2', text: 'emphasized', role: 'V' },
      { id: 't3-3', text: 'that not all students are', role: 'O' },
      { id: 't3-4', text: 'eligible', role: 'C', is_target: true },
      { id: 't3-5', text: 'for the scholarship', role: 'M' },
    ],
  },
];

/** question_type でフィルタしてシャッフルした問題を返す */
export function getMockToeflQuestions(
  questionType: 'reorder' | 'typing',
  count = 5,
): ToeflQuestion[] {
  const filtered = toeflMockQuestions.filter(
    (q) => q.question_type === questionType,
  );
  // Fisher–Yates shuffle
  const shuffled = [...filtered];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
