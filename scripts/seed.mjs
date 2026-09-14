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
    explanation: '毎日の習慣を表す時は「現在形」を使います。主語がIなので、動詞は原形のdrinkになります。',
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
    explanation: '主語が三人称単数（She）で現在の習慣・状態を表すため、動詞の最後にsをつけてspeaksになります。',
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
    explanation: '「昨日 (yesterday)」という過去の出来事なので、goの過去形であるwentを使います。',
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
    explanation: '過去の出来事なのでeatの過去形ateを使います。場所を表すat the partyはM（修飾語）になります。',
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
    explanation: '「（今まで）～したことがない」という経験を表すため、現在完了形（have + 過去分詞）とneverを組み合わせます。',
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
    explanation: '「（ちょうど）〜してしまった」という完了を表す現在完了形（has + 過去分詞）に、すでにを意味するalreadyを合わせます。',
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
    explanation: '「〜されている」という受け身の意味なので、受動態（be動詞 + 過去分詞）を使います。',
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
    explanation: '「〜したい」は want to 〜（不定詞の名詞的用法）で表現します。',
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
    explanation: '「〜するために」という目的を表すには、to + 動詞の原形（不定詞の副詞的用法）を使います。',
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
    explanation: '人を修飾する関係代名詞で、主格として働くため who を使います。',
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
    explanation: 'The bookを修飾する関係代名詞の節（that I bought）が主語の直後に来ます。',
    parts: [
      { text: 'The book that I bought', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'very interesting', role: 'C' },
    ],
    options: ['The book that I bought', 'is', 'very interesting', 'interesting'],
  },

  // ── 新規追加カテゴリ ──
  {
    mode: 'simple',
    difficulty: 3,
    theme: '日常',
    grammar_category: '助動詞',
    japanese_text: '彼は明日来るかもしれません。',
    english_text: 'He may come tomorrow.',
    explanation: '「〜かもしれない」という推量は助動詞の may（または might）を使います。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'may come', role: 'V' },
      { text: 'tomorrow', role: 'M' },
    ],
    options: ['may come', 'can come', 'must come', 'will come'],
  },
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '後悔',
    grammar_category: '仮定法',
    japanese_text: 'もし私が鳥なら、あなたのところに飛んでいくのに。',
    english_text: 'If I were a bird, I would fly to you.',
    explanation: '現在の事実に反する仮定を表す仮定法過去では、be動詞は主語に関わらず were を用います。',
    parts: [
      { text: 'If I', role: 'M' },
      { text: 'were', role: 'V' },
      { text: 'a bird', role: 'C' },
      { text: 'I', role: 'S' },
      { text: 'would fly', role: 'V' },
      { text: 'to you', role: 'M' },
    ],
    options: ['If I', 'were', 'a bird', 'I', 'would fly', 'to you'],
  },
  {
    mode: 'simple',
    difficulty: 3,
    theme: '趣味',
    grammar_category: '動名詞',
    japanese_text: '私は本を読むのが好きです。',
    english_text: 'I like reading books.',
    explanation: '動詞の目的語として「〜すること」を表す場合、動名詞（-ing）を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'like', role: 'V' },
      { text: 'reading books', role: 'O' },
    ],
    options: ['reading', 'to read', 'read', 'reads'],
  },
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '日常',
    grammar_category: '分詞',
    japanese_text: '向こうで走っている少年は私の弟です。',
    english_text: 'The boy running over there is my brother.',
    explanation: '名詞を後ろから修飾する現在分詞（〜している）を使います。The boyを running over there が修飾しています。',
    parts: [
      { text: 'The boy running over there', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'my brother', role: 'C' },
    ],
    options: ['The boy running over there', 'is', 'my brother', 'running'],
  },
  {
    mode: 'simple',
    difficulty: 3,
    theme: '比較',
    grammar_category: '比較',
    japanese_text: 'この車はあの車よりも大きいです。',
    english_text: 'This car is bigger than that one.',
    explanation: '「〜よりも…だ」という比較級は「形容詞の比較級 + than」で表します。',
    parts: [
      { text: 'This car', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'bigger than that one', role: 'C' },
    ],
    options: ['bigger', 'biggest', 'more big', 'as big'],
  },
  {
    mode: 'personalized',
    difficulty: 2,
    theme: '所有',
    grammar_category: '代名詞',
    japanese_text: 'これは彼女のペンではありません。',
    english_text: 'This is not her pen.',
    explanation: '「彼女の〜」は所有格の代名詞 her を使います。',
    parts: [
      { text: 'This', role: 'S' },
      { text: 'is not', role: 'V' },
      { text: 'her pen', role: 'C' },
    ],
    options: ['This', 'is not', 'her pen', 'she pen'],
  },
  {
    mode: 'simple',
    difficulty: 2,
    theme: '場所',
    grammar_category: '前置詞',
    japanese_text: '本は机の上にあります。',
    english_text: 'The book is on the desk.',
    explanation: '「〜の上に（接触して）」は前置詞 on を使います。',
    parts: [
      { text: 'The book', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'on the desk', role: 'M' },
    ],
    options: ['on', 'in', 'at', 'to'],
  },
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '理由',
    grammar_category: '接続詞',
    japanese_text: '雨が降っていたので、私たちは家にいました。',
    english_text: 'We stayed home because it was raining.',
    explanation: '「〜なので」という理由を表す接続詞 because を使います。',
    parts: [
      { text: 'We', role: 'S' },
      { text: 'stayed', role: 'V' },
      { text: 'home', role: 'M' },
      { text: 'because it was raining', role: 'M' },
    ],
    options: ['We', 'stayed', 'home', 'because it was raining', 'but'],
  }
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
