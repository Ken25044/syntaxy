// scripts/seed.mjs
// 使い方: node scripts/seed.mjs
// 事前に scripts/serviceAccountKey.json を配置してください

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const serviceAccount = JSON.parse(
  readFileSync(path.join(__dirname, 'serviceAccountKey.json'), 'utf8'),
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();


const questions = [
  // ── 現在時制 ──
  {
    mode: 'simple',
    difficulty: 1,
    theme: '日常',
    grammar_category: '現在時制',
    japanese_text: '私は毎朝コーヒーを飲みます。',
    english_text: 'I drink coffee every morning.',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'drink', role: 'V' },
      { text: 'coffee', role: 'O' },
      { text: 'every morning', role: 'M' },
    ],
    options: ['drink', 'drinks', 'am drinking', 'drank'],
  },
  {
    mode: 'personalized',
    difficulty: 1,
    theme: '日常',
    grammar_category: '現在時制',
    japanese_text: '彼女は英語を上手に話します。',
    english_text: 'She speaks English well.',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'speaks', role: 'V' },
      { text: 'English', role: 'O' },
      { text: 'well', role: 'M' },
    ],
    options: ['She', 'speaks', 'English', 'well'],
  },

  // ── 過去時制 ──
  {
    mode: 'simple',
    difficulty: 2,
    theme: '旅行',
    grammar_category: '過去時制',
    japanese_text: '私は昨日図書館へ行きました。',
    english_text: 'I went to the library yesterday.',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'went', role: 'V' },
      { text: 'to the library', role: 'M' },
      { text: 'yesterday', role: 'M' },
    ],
    options: ['went', 'go', 'goes', 'was going'],
  },
  {
    mode: 'personalized',
    difficulty: 2,
    theme: '食事',
    grammar_category: '過去時制',
    japanese_text: '彼らはパーティーでピザを食べました。',
    english_text: 'They ate pizza at the party.',
    parts: [
      { text: 'They', role: 'S' },
      { text: 'ate', role: 'V' },
      { text: 'pizza', role: 'O' },
      { text: 'at the party', role: 'M' },
    ],
    options: ['They', 'ate', 'pizza', 'at the party'],
  },

  // ── 現在完了 ──
  {
    mode: 'simple',
    difficulty: 3,
    theme: '経験',
    grammar_category: '現在完了',
    japanese_text: '私は一度も富士山に登ったことがありません。',
    english_text: 'I have never climbed Mt. Fuji.',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'have never climbed', role: 'V' },
      { text: 'Mt. Fuji', role: 'O' },
    ],
    options: ['have never climbed', 'never climbed', 'had never climbed', 'never climb'],
  },
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '経験',
    grammar_category: '現在完了',
    japanese_text: '彼はすでに宿題を終えました。',
    english_text: 'He has already finished his homework.',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'has already finished', role: 'V' },
      { text: 'his homework', role: 'O' },
    ],
    options: ['He', 'has already finished', 'his homework', 'already'],
  },

  // ── 受動態 ──
  {
    mode: 'simple',
    difficulty: 3,
    theme: '科学',
    grammar_category: '受動態',
    japanese_text: 'この本は多くの国々で読まれています。',
    english_text: 'This book is read in many countries.',
    parts: [
      { text: 'This book', role: 'S' },
      { text: 'is read', role: 'V' },
      { text: 'in many countries', role: 'M' },
    ],
    options: ['is read', 'reads', 'was read', 'has read'],
  },

  // ── 不定詞 ──
  {
    mode: 'simple',
    difficulty: 4,
    theme: '目標',
    grammar_category: '不定詞',
    japanese_text: '私は医者になりたいです。',
    english_text: 'I want to be a doctor.',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'want', role: 'V' },
      { text: 'to be a doctor', role: 'O' },
    ],
    options: ['want to be', 'wants to be', 'wanted being', 'want being'],
  },
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '目標',
    grammar_category: '不定詞',
    japanese_text: '彼女は新しい言語を学ぶために一生懸命勉強します。',
    english_text: 'She studies hard to learn a new language.',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'studies', role: 'V' },
      { text: 'hard', role: 'M' },
      { text: 'to learn a new language', role: 'M' },
    ],
    options: ['She', 'studies', 'hard', 'to learn a new language'],
  },

  // ── 関係代名詞 ──
  {
    mode: 'simple',
    difficulty: 5,
    theme: '人物',
    grammar_category: '関係代名詞',
    japanese_text: 'あの赤いドレスを着ている女性は私の先生です。',
    english_text: 'The woman who is wearing a red dress is my teacher.',
    parts: [
      { text: 'The woman who is wearing a red dress', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'my teacher', role: 'C' },
    ],
    options: ['who', 'which', 'whom', 'whose'],
  },
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '物',
    grammar_category: '関係代名詞',
    japanese_text: '私が買った本はとても面白いです。',
    english_text: 'The book that I bought is very interesting.',
    parts: [
      { text: 'The book that I bought', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'very interesting', role: 'C' },
    ],
    options: ['The book that I bought', 'is', 'very interesting', 'interesting'],
  },
];

async function seed() {
  console.log(`\n🌱 Seeding ${questions.length} questions...\n`);
  const col = db.collection('questions');

  const existing = await col.get();
  if (!existing.empty) {
    console.log(`⚠️  既に ${existing.size} 件のデータがあります。`);
    if (!process.argv.includes('--force')) {
      console.log('   スキップします。強制上書きする場合は --force を追加してください。');
      process.exit(0);
    }
    console.log('   --force が指定されたので上書きします。');
  }

  const batch = db.batch();
  for (const q of questions) {
    const ref = col.doc();
    batch.set(ref, q);
  }
  await batch.commit();
  console.log(`✅ ${questions.length} 件の問題データを Firestore に追加しました！\n`);
  process.exit(0);
}

seed().catch((e) => {
  console.error('❌ シード失敗:', e.message);
  process.exit(1);
});
