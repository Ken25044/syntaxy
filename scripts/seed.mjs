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
  },
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '日常',
    grammar_category: '現在時制',
    japanese_text: '私の母は毎朝コーヒーを飲みます。',
    english_text: 'My mother drinks coffee every morning.',
    explanation: '現在の習慣を表す現在時制です。主語が3人称単数なので drinks となります。',
    parts: [
      { text: 'My mother', role: 'S' },
      { text: 'drinks', role: 'V' },
      { text: 'coffee', role: 'O' },
      { text: 'every morning', role: 'M' },
    ],
    options: ['My mother', 'drinks', 'coffee', 'every morning'],
  },
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '日常',
    grammar_category: '過去時制',
    japanese_text: '私たちは昨日、公園でサッカーをしました。',
    english_text: 'We played soccer in the park yesterday.',
    explanation: '過去の出来事を表すため、過去形の played を使います。',
    parts: [
      { text: 'We', role: 'S' },
      { text: 'played', role: 'V' },
      { text: 'soccer', role: 'O' },
      { text: 'in the park', role: 'M' },
      { text: 'yesterday', role: 'M' },
    ],
    options: ['We', 'played', 'soccer', 'in the park', 'yesterday'],
  },
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '経験',
    grammar_category: '現在完了',
    japanese_text: '私はまだその映画を見ていません。',
    english_text: 'I have not seen the movie yet.',
    explanation: '完了・結果の否定文で「まだ〜していない」を表す現在完了形です。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'have not seen', role: 'V' },
      { text: 'the movie', role: 'O' },
      { text: 'yet', role: 'M' },
    ],
    options: ['I', 'have not seen', 'the movie', 'yet'],
  },
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '日常',
    grammar_category: '受動態',
    japanese_text: 'このケーキは私の姉によって作られました。',
    english_text: 'This cake was made by my sister.',
    explanation: '過去の受動態は「be動詞の過去形 + 過去分詞」になります。',
    parts: [
      { text: 'This cake', role: 'S' },
      { text: 'was made', role: 'V' },
      { text: 'by my sister', role: 'M' },
    ],
    options: ['This cake', 'was made', 'by my sister'],
  },
  {
    mode: 'personalized',
    difficulty: 2,
    theme: '趣味',
    grammar_category: '不定詞',
    japanese_text: '私の夢は世界中を旅行することです。',
    english_text: 'My dream is to travel around the world.',
    explanation: '「〜すること」という名詞的用法の不定詞を補語として使います。',
    parts: [
      { text: 'My dream', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'to travel around the world', role: 'C' },
    ],
    options: ['My dream', 'is', 'to travel around the world'],
  },
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '比較',
    grammar_category: '比較',
    japanese_text: '彼はクラスの中で一番背が高いです。',
    english_text: 'He is the tallest in his class.',
    explanation: '「最も〜」を表す最上級は「the + -est」を使います。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'the tallest', role: 'C' },
      { text: 'in his class', role: 'M' },
    ],
    options: ['He', 'is', 'the tallest', 'in his class'],
  },
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '場所',
    grammar_category: '前置詞',
    japanese_text: '彼女は駅の近くに住んでいます。',
    english_text: 'She lives near the station.',
    explanation: '「〜の近くに」は前置詞 near を使います。',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'lives', role: 'V' },
      { text: 'near the station', role: 'M' },
    ],
    options: ['She', 'lives', 'near the station'],
  },
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '理由',
    grammar_category: '接続詞',
    japanese_text: '疲れていたけれど、彼は宿題を終えました。',
    english_text: 'Though he was tired, he finished his homework.',
    explanation: '「〜だけれども」という譲歩を表す接続詞 though を使います。',
    parts: [
      { text: 'Though he was tired', role: 'M' },
      { text: 'he', role: 'S' },
      { text: 'finished', role: 'V' },
      { text: 'his homework', role: 'O' },
    ],
    options: ['Though he was tired', 'he', 'finished', 'his homework'],
  }
  ,
  {
    mode: 'simple',
    difficulty: 2,
    theme: '趣味',
    grammar_category: '現在時制',
    japanese_text: '彼は毎日ピアノを弾きます。',
    english_text: 'He plays the piano every day.',
    explanation: '三人称単数の現在の習慣には動詞にsがつきます。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'plays', role: 'V' },
      { text: 'the piano', role: 'O' },
      { text: 'every day', role: 'M' },
    ],
    options: ['plays', 'play', 'played', 'is playing']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 2,
    theme: '日常',
    grammar_category: '現在時制',
    japanese_text: '私たちは夕食後にテレビを見ます。',
    english_text: 'We watch TV after dinner.',
    explanation: '現在の習慣を表すので現在形を使います。',
    parts: [
      { text: 'We', role: 'S' },
      { text: 'watch', role: 'V' },
      { text: 'TV', role: 'O' },
      { text: 'after dinner', role: 'M' },
    ],
    options: ['We', 'watch', 'TV', 'after dinner']
  }
  ,
  {
    mode: 'simple',
    difficulty: 3,
    theme: '旅行',
    grammar_category: '過去時制',
    japanese_text: '彼女は去年の夏、パリを訪れました。',
    english_text: 'She visited Paris last summer.',
    explanation: '過去の出来事なので過去形 visited を使います。',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'visited', role: 'V' },
      { text: 'Paris', role: 'O' },
      { text: 'last summer', role: 'M' },
    ],
    options: ['visited', 'visit', 'visits', 'has visited']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '買い物',
    grammar_category: '過去時制',
    japanese_text: '私は新しい靴を買いました。',
    english_text: 'I bought new shoes.',
    explanation: '不規則動詞 buy の過去形 bought を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'bought', role: 'V' },
      { text: 'new shoes', role: 'O' },
    ],
    options: ['I', 'bought', 'new shoes']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '仕事',
    grammar_category: '現在完了',
    japanese_text: '私はここで10年間働いています。',
    english_text: 'I have worked here for ten years.',
    explanation: '過去から現在までの継続を表すため、現在完了形を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'have worked', role: 'V' },
      { text: 'here', role: 'M' },
      { text: 'for ten years', role: 'M' },
    ],
    options: ['have worked', 'worked', 'work', 'am working']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '生活',
    grammar_category: '現在完了',
    japanese_text: '彼は財布をなくしてしまいました。',
    english_text: 'He has lost his wallet.',
    explanation: '「なくしてしまって今もない」という結果を表す現在完了形です。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'has lost', role: 'V' },
      { text: 'his wallet', role: 'O' },
    ],
    options: ['He', 'has lost', 'his wallet']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '歴史',
    grammar_category: '受動態',
    japanese_text: 'この写真は1990年に撮られました。',
    english_text: 'This photo was taken in 1990.',
    explanation: '過去の受動態は be動詞の過去形 + 過去分詞 になります。',
    parts: [
      { text: 'This photo', role: 'S' },
      { text: 'was taken', role: 'V' },
      { text: 'in 1990', role: 'M' },
    ],
    options: ['was taken', 'is taken', 'took', 'takes']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '日常',
    grammar_category: '受動態',
    japanese_text: 'その窓は彼によって壊されました。',
    english_text: 'The window was broken by him.',
    explanation: '「〜によって」は by を使って表します。',
    parts: [
      { text: 'The window', role: 'S' },
      { text: 'was broken', role: 'V' },
      { text: 'by him', role: 'M' },
    ],
    options: ['The window', 'was broken', 'by him']
  }
  ,
  {
    mode: 'simple',
    difficulty: 3,
    theme: '買い物',
    grammar_category: '不定詞',
    japanese_text: '私は服を買うために店に行きました。',
    english_text: 'I went to the store to buy clothes.',
    explanation: '目的を表す不定詞（〜するために）の副詞的用法です。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'went', role: 'V' },
      { text: 'to the store', role: 'M' },
      { text: 'to buy clothes', role: 'M' },
    ],
    options: ['to buy', 'buying', 'bought', 'buy']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '日常',
    grammar_category: '不定詞',
    japanese_text: '私はあなたに会えて嬉しいです。',
    english_text: 'I am glad to see you.',
    explanation: '感情の原因を表す不定詞（〜して）の副詞的用法です。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'am', role: 'V' },
      { text: 'glad', role: 'C' },
      { text: 'to see you', role: 'M' },
    ],
    options: ['I', 'am', 'glad', 'to see you']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '日常',
    grammar_category: '関係代名詞',
    japanese_text: 'これは私が探していた鍵です。',
    english_text: 'This is the key that I was looking for.',
    explanation: 'the key を修飾する目的格の関係代名詞 that を使います。',
    parts: [
      { text: 'This', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'the key that I was looking for', role: 'C' },
    ],
    options: ['that', 'who', 'whose', 'what']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '人物',
    grammar_category: '関係代名詞',
    japanese_text: '私には東京に住んでいる友達がいます。',
    english_text: 'I have a friend who lives in Tokyo.',
    explanation: '人を修飾する主格の関係代名詞 who を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'have', role: 'V' },
      { text: 'a friend who lives in Tokyo', role: 'O' },
    ],
    options: ['I', 'have', 'a friend', 'who lives in Tokyo']
  }
  ,
  {
    mode: 'simple',
    difficulty: 3,
    theme: 'アドバイス',
    grammar_category: '助動詞',
    japanese_text: 'あなたは病院に行くべきです。',
    english_text: 'You should go to a hospital.',
    explanation: '「〜するべきだ」という義務や助言は should を使います。',
    parts: [
      { text: 'You', role: 'S' },
      { text: 'should go', role: 'V' },
      { text: 'to a hospital', role: 'M' },
    ],
    options: ['should go', 'must going', 'can go', 'will go']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '能力',
    grammar_category: '助動詞',
    japanese_text: '彼女はピアノを弾くことができます。',
    english_text: 'She can play the piano.',
    explanation: '「〜できる」という能力は can を使います。',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'can play', role: 'V' },
      { text: 'the piano', role: 'O' },
    ],
    options: ['She', 'can play', 'the piano']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '願望',
    grammar_category: '仮定法',
    japanese_text: '私がもっとお金持ちだったらなぁ。',
    english_text: 'I wish I were richer.',
    explanation: '「〜であればいいのに」という現在の事実に反する願望は I wish + 仮定法過去 を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'wish', role: 'V' },
      { text: 'I were richer', role: 'O' },
    ],
    options: ['were', 'was', 'am', 'have been']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '仮定',
    grammar_category: '仮定法',
    japanese_text: 'もし明日晴れたら、私たちはピクニックに行きます。',
    english_text: 'If it is sunny tomorrow, we will go on a picnic.',
    explanation: '未来のあり得る条件は、仮定法ではなく直接法を使います（時や条件を表す副詞節では未来のことでも現在形）。',
    parts: [
      { text: 'If it is sunny tomorrow', role: 'M' },
      { text: 'we', role: 'S' },
      { text: 'will go', role: 'V' },
      { text: 'on a picnic', role: 'M' },
    ],
    options: ['If it is sunny tomorrow', 'we', 'will go', 'on a picnic']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '趣味',
    grammar_category: '動名詞',
    japanese_text: '彼は英語を話すのが得意です。',
    english_text: 'He is good at speaking English.',
    explanation: '前置詞（at）の後には名詞が来るため、動詞を入れる場合は動名詞（-ing）にします。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'good', role: 'C' },
      { text: 'at speaking English', role: 'M' },
    ],
    options: ['speaking', 'to speak', 'speak', 'spoke']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '日常',
    grammar_category: '動名詞',
    japanese_text: '彼女はテレビを見るのをやめました。',
    english_text: 'She stopped watching TV.',
    explanation: 'stop の目的語として「〜すること」を表す場合は動名詞を使います。',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'stopped', role: 'V' },
      { text: 'watching TV', role: 'O' },
    ],
    options: ['She', 'stopped', 'watching TV']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '物',
    grammar_category: '分詞',
    japanese_text: '日本で作られた車は人気があります。',
    english_text: 'Cars made in Japan are popular.',
    explanation: '名詞を後ろから修飾する過去分詞（〜された）を使います。',
    parts: [
      { text: 'Cars made in Japan', role: 'S' },
      { text: 'are', role: 'V' },
      { text: 'popular', role: 'C' },
    ],
    options: ['made', 'making', 'make', 'to make']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '感情',
    grammar_category: '分詞',
    japanese_text: 'その映画はとても退屈でした。',
    english_text: 'The movie was very boring.',
    explanation: '物事が「退屈させる」という意味なので、現在分詞 boring を使います。',
    parts: [
      { text: 'The movie', role: 'S' },
      { text: 'was', role: 'V' },
      { text: 'very boring', role: 'C' },
    ],
    options: ['The movie', 'was', 'very boring']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '比較',
    grammar_category: '比較',
    japanese_text: '私は彼と同じくらい忙しいです。',
    english_text: 'I am as busy as he is.',
    explanation: '「〜と同じくらい」という同等比較は as + 原級 + as を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'am', role: 'V' },
      { text: 'as busy as he is', role: 'C' },
    ],
    options: ['as busy as', 'busier than', 'the busiest', 'more busy than']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '比較',
    grammar_category: '比較',
    japanese_text: 'この本はあの本よりも面白いです。',
    english_text: 'This book is more interesting than that one.',
    explanation: '長い形容詞の比較級は more をつけます。',
    parts: [
      { text: 'This book', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'more interesting than that one', role: 'C' },
    ],
    options: ['This book', 'is', 'more interesting', 'than that one']
  }
  ,
  {
    mode: 'simple',
    difficulty: 2,
    theme: '所有',
    grammar_category: '代名詞',
    japanese_text: 'これらの本は私たちのものです。',
    english_text: 'These books are ours.',
    explanation: '「私たちのもの」は所有代名詞 ours を使います。',
    parts: [
      { text: 'These books', role: 'S' },
      { text: 'are', role: 'V' },
      { text: 'ours', role: 'C' },
    ],
    options: ['ours', 'us', 'our', 'we']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 2,
    theme: '日常',
    grammar_category: '代名詞',
    japanese_text: '彼にその手紙を渡してください。',
    english_text: 'Please give him the letter.',
    explanation: '動詞の目的語になるので目的格の him を使います。',
    parts: [
      { text: 'Please give', role: 'V' },
      { text: 'him', role: 'O' },
      { text: 'the letter', role: 'O' },
    ],
    options: ['Please give', 'him', 'the letter']
  }
  ,
  {
    mode: 'simple',
    difficulty: 3,
    theme: '時間',
    grammar_category: '前置詞',
    japanese_text: '私は7時に起きます。',
    english_text: 'I get up at seven o\'clock.',
    explanation: '時刻の前には前置詞 at を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'get up', role: 'V' },
      { text: 'at seven o\'clock', role: 'M' },
    ],
    options: ['at', 'in', 'on', 'to']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '場所',
    grammar_category: '前置詞',
    japanese_text: '箱の中にりんごがあります。',
    english_text: 'There is an apple in the box.',
    explanation: '「〜の中に」は前置詞 in を使います。',
    parts: [
      { text: 'There is', role: 'V' },
      { text: 'an apple', role: 'S' },
      { text: 'in the box', role: 'M' },
    ],
    options: ['There is', 'an apple', 'in the box']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '理由',
    grammar_category: '接続詞',
    japanese_text: 'もし時間があれば、私はあなたを手伝います。',
    english_text: 'If I have time, I will help you.',
    explanation: '「もし〜ならば」という条件を表す接続詞 If を使います。',
    parts: [
      { text: 'If I have time', role: 'M' },
      { text: 'I', role: 'S' },
      { text: 'will help', role: 'V' },
      { text: 'you', role: 'O' },
    ],
    options: ['If', 'When', 'Because', 'Though']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '時間',
    grammar_category: '接続詞',
    japanese_text: '私が彼に会ったとき、彼は笑っていました。',
    english_text: 'When I saw him, he was smiling.',
    explanation: '「〜するとき」という時を表す接続詞 When を使います。',
    parts: [
      { text: 'When I saw him', role: 'M' },
      { text: 'he', role: 'S' },
      { text: 'was smiling', role: 'V' },
    ],
    options: ['When I saw him', 'he', 'was smiling']
  }

  ,
  {
    mode: 'simple',
    difficulty: 2,
    theme: '趣味',
    grammar_category: '現在時制',
    japanese_text: '彼女は週末に本を読みます。',
    english_text: 'She reads books on weekends.',
    explanation: '三人称単数の現在の習慣には動詞にsがつきます。',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'reads', role: 'V' },
      { text: 'books', role: 'O' },
      { text: 'on weekends', role: 'M' },
    ],
    options: ['reads', 'read', 'reading', 'is reading']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 2,
    theme: '日常',
    grammar_category: '現在時制',
    japanese_text: '私は毎朝コーヒーを飲みます。',
    english_text: 'I drink coffee every morning.',
    explanation: '現在の習慣を表すので現在形を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'drink', role: 'V' },
      { text: 'coffee', role: 'O' },
      { text: 'every morning', role: 'M' },
    ],
    options: ['I', 'drink', 'coffee', 'every morning']
  }
  ,
  {
    mode: 'simple',
    difficulty: 3,
    theme: '日常',
    grammar_category: '過去時制',
    japanese_text: '彼は昨日、友達に会いました。',
    english_text: 'He met his friend yesterday.',
    explanation: '過去の出来事なので meet の過去形 met を使います。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'met', role: 'V' },
      { text: 'his friend', role: 'O' },
      { text: 'yesterday', role: 'M' },
    ],
    options: ['met', 'meets', 'meet', 'has met']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '趣味',
    grammar_category: '過去時制',
    japanese_text: '私たちは昨夜映画を見ました。',
    english_text: 'We watched a movie last night.',
    explanation: '過去の出来事なので過去形 watched を使います。',
    parts: [
      { text: 'We', role: 'S' },
      { text: 'watched', role: 'V' },
      { text: 'a movie', role: 'O' },
      { text: 'last night', role: 'M' },
    ],
    options: ['We', 'watched', 'a movie', 'last night']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '旅行',
    grammar_category: '現在完了',
    japanese_text: '私はまだパリに行ったことがありません。',
    english_text: 'I have never been to Paris.',
    explanation: '今までの経験を表すため、現在完了形を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'have never been', role: 'V' },
      { text: 'to Paris', role: 'M' },
    ],
    options: ['have never been', 'never went', 'am never going', 'never go']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '日常',
    grammar_category: '現在完了',
    japanese_text: '彼女はちょうど宿題を終えたところです。',
    english_text: 'She has just finished her homework.',
    explanation: '「ちょうど〜したところだ」という完了を表す現在完了形です。',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'has just finished', role: 'V' },
      { text: 'her homework', role: 'O' },
    ],
    options: ['She', 'has just finished', 'her homework']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '社会',
    grammar_category: '受動態',
    japanese_text: '英語は多くの国で話されています。',
    english_text: 'English is spoken in many countries.',
    explanation: '「〜される」という受動態は be動詞 + 過去分詞 になります。',
    parts: [
      { text: 'English', role: 'S' },
      { text: 'is spoken', role: 'V' },
      { text: 'in many countries', role: 'M' },
    ],
    options: ['is spoken', 'speaks', 'spoke', 'has spoken']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '歴史',
    grammar_category: '受動態',
    japanese_text: 'この本は彼によって書かれました。',
    english_text: 'This book was written by him.',
    explanation: '「〜によって」は by を使って表します。',
    parts: [
      { text: 'This book', role: 'S' },
      { text: 'was written', role: 'V' },
      { text: 'by him', role: 'M' },
    ],
    options: ['This book', 'was written', 'by him']
  }
  ,
  {
    mode: 'simple',
    difficulty: 3,
    theme: '趣味',
    grammar_category: '不定詞',
    japanese_text: '私は本を読むことが好きです。',
    english_text: 'I like to read books.',
    explanation: '「〜すること」という名詞的用法の不定詞です。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'like', role: 'V' },
      { text: 'to read books', role: 'O' },
    ],
    options: ['to read', 'read', 'reads', 'readed']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '日常',
    grammar_category: '不定詞',
    japanese_text: '私には今日するべき仕事がたくさんあります。',
    english_text: 'I have a lot of work to do today.',
    explanation: 'work を後ろから修飾する形容詞的用法の不定詞です。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'have', role: 'V' },
      { text: 'a lot of work to do', role: 'O' },
      { text: 'today', role: 'M' },
    ],
    options: ['I', 'have', 'a lot of work', 'to do', 'today']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '日常',
    grammar_category: '関係代名詞',
    japanese_text: 'これは彼が書いた本です。',
    english_text: 'This is the book which he wrote.',
    explanation: 'the book を修飾する目的格の関係代名詞 which (または that) を使います。',
    parts: [
      { text: 'This', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'the book which he wrote', role: 'C' },
    ],
    options: ['which', 'who', 'whose', 'what']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '人物',
    grammar_category: '関係代名詞',
    japanese_text: 'お父さんが医者である少年を知っていますか？',
    english_text: 'Do you know the boy whose father is a doctor?',
    explanation: '「その少年の〜」という所有の関係を表すため whose を使います。',
    parts: [
      { text: 'Do you know', role: 'V' },
      { text: 'the boy whose father is a doctor', role: 'O' },
    ],
    options: ['Do you know', 'the boy', 'whose father', 'is a doctor']
  }
  ,
  {
    mode: 'simple',
    difficulty: 3,
    theme: 'ルール',
    grammar_category: '助動詞',
    japanese_text: 'あなたはここでタバコを吸ってはいけません。',
    english_text: 'You must not smoke here.',
    explanation: '「〜してはいけない」という強い禁止は must not を使います。',
    parts: [
      { text: 'You', role: 'S' },
      { text: 'must not smoke', role: 'V' },
      { text: 'here', role: 'M' },
    ],
    options: ['must not smoke', 'don\'t must smoke', 'must smoke not', 'not must smoke']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '許可',
    grammar_category: '助動詞',
    japanese_text: 'このペンを使ってもいいですか？',
    english_text: 'May I use this pen?',
    explanation: '「〜してもよいか」と許可を求める時は May I を使います。',
    parts: [
      { text: 'May I use', role: 'V' },
      { text: 'this pen', role: 'O' },
    ],
    options: ['May I', 'use', 'this pen']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '仮定',
    grammar_category: '仮定法',
    japanese_text: 'もし私が鳥ならば、あなたのところへ飛んでいくのに。',
    english_text: 'If I were a bird, I would fly to you.',
    explanation: '現在の事実に反する仮定は、仮定法過去（be動詞はwere、助動詞の過去形）を使います。',
    parts: [
      { text: 'If I were a bird', role: 'M' },
      { text: 'I', role: 'S' },
      { text: 'would fly', role: 'V' },
      { text: 'to you', role: 'M' },
    ],
    options: ['were', 'was', 'am', 'will be']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '後悔',
    grammar_category: '仮定法',
    japanese_text: 'あの時もっと勉強していればよかったなぁ。',
    english_text: 'I wish I had studied harder then.',
    explanation: '過去の事実に反する願望は、I wish + 仮定法過去完了（had + 過去分詞）を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'wish', role: 'V' },
      { text: 'I had studied harder then', role: 'O' },
    ],
    options: ['I wish', 'I', 'had studied', 'harder then']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '趣味',
    grammar_category: '動名詞',
    japanese_text: '彼はサッカーをするのが好きです。',
    english_text: 'He enjoys playing soccer.',
    explanation: 'enjoy の目的語には動名詞（-ing）しか使えません。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'enjoys', role: 'V' },
      { text: 'playing soccer', role: 'O' },
    ],
    options: ['playing', 'to play', 'play', 'played']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '日常',
    grammar_category: '動名詞',
    japanese_text: '手伝ってくれてありがとう。',
    english_text: 'Thank you for helping me.',
    explanation: '前置詞 for の後には動名詞がきます。',
    parts: [
      { text: 'Thank you', role: 'V' },
      { text: 'for helping me', role: 'M' },
    ],
    options: ['Thank you', 'for', 'helping me']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '人物',
    grammar_category: '分詞',
    japanese_text: 'あそこで走っている少年は私の弟です。',
    english_text: 'The boy running over there is my brother.',
    explanation: '「走っている〜」と名詞を修飾する場合は現在分詞（-ing）を使います。',
    parts: [
      { text: 'The boy running over there', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'my brother', role: 'C' },
    ],
    options: ['running', 'run', 'ran', 'to run']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '感情',
    grammar_category: '分詞',
    japanese_text: '私はその知らせに驚きました。',
    english_text: 'I was surprised at the news.',
    explanation: '人が「驚かされる」という感情を表す時は過去分詞 surprised を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'was', role: 'V' },
      { text: 'surprised', role: 'C' },
      { text: 'at the news', role: 'M' },
    ],
    options: ['I', 'was', 'surprised', 'at the news']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '比較',
    grammar_category: '比較',
    japanese_text: '彼はクラスで一番背が高いです。',
    english_text: 'He is the tallest in his class.',
    explanation: '「一番〜だ」という最上級は the + -est を使います。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'the tallest', role: 'C' },
      { text: 'in his class', role: 'M' },
    ],
    options: ['the tallest', 'taller', 'the most tall', 'tallest']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '比較',
    grammar_category: '比較',
    japanese_text: 'ロシアは世界で一番大きな国です。',
    english_text: 'Russia is the largest country in the world.',
    explanation: '「〜の中で一番」の最上級。場所や範囲には in を使います。',
    parts: [
      { text: 'Russia', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'the largest country', role: 'C' },
      { text: 'in the world', role: 'M' },
    ],
    options: ['Russia', 'is', 'the largest country', 'in the world']
  }
  ,
  {
    mode: 'simple',
    difficulty: 2,
    theme: '所有',
    grammar_category: '代名詞',
    japanese_text: '私は自分の自転車を洗いました。',
    english_text: 'I washed my bicycle.',
    explanation: '「私の〜」は所有格の my を使います。',
    parts: [
      { text: 'I', role: 'S' },
      { text: 'washed', role: 'V' },
      { text: 'my bicycle', role: 'O' },
    ],
    options: ['my', 'me', 'mine', 'I']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 2,
    theme: '日常',
    grammar_category: '代名詞',
    japanese_text: '私たちは自分たちでそれをしました。',
    english_text: 'We did it ourselves.',
    explanation: '「自分たち自身で」という強調には再帰代名詞 ourselves を使います。',
    parts: [
      { text: 'We', role: 'S' },
      { text: 'did', role: 'V' },
      { text: 'it', role: 'O' },
      { text: 'ourselves', role: 'M' },
    ],
    options: ['We', 'did', 'it', 'ourselves']
  }
  ,
  {
    mode: 'simple',
    difficulty: 3,
    theme: '時間',
    grammar_category: '前置詞',
    japanese_text: '私たちは日曜日には学校に行きません。',
    english_text: 'We don\'t go to school on Sundays.',
    explanation: '特定の曜日や日付の前には前置詞 on を使います。',
    parts: [
      { text: 'We', role: 'S' },
      { text: 'don\'t go', role: 'V' },
      { text: 'to school', role: 'M' },
      { text: 'on Sundays', role: 'M' },
    ],
    options: ['on', 'in', 'at', 'to']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 3,
    theme: '場所',
    grammar_category: '前置詞',
    japanese_text: '壁に絵が掛かっています。',
    english_text: 'There is a picture on the wall.',
    explanation: '「〜の表面に接触して」を表す前置詞 on を使います。',
    parts: [
      { text: 'There is', role: 'V' },
      { text: 'a picture', role: 'S' },
      { text: 'on the wall', role: 'M' },
    ],
    options: ['There is', 'a picture', 'on the wall']
  }
  ,
  {
    mode: 'simple',
    difficulty: 4,
    theme: '逆接',
    grammar_category: '接続詞',
    japanese_text: '彼は疲れていましたが、働き続けました。',
    english_text: 'Though he was tired, he kept working.',
    explanation: '「〜だけれども」という譲歩を表す接続詞 Though を使います。',
    parts: [
      { text: 'Though he was tired', role: 'M' },
      { text: 'he', role: 'S' },
      { text: 'kept working', role: 'V' },
    ],
    options: ['Though', 'Because', 'When', 'If']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 4,
    theme: '理由',
    grammar_category: '接続詞',
    japanese_text: '雨が降っていたので、私たちは家にいました。',
    english_text: 'We stayed home because it was raining.',
    explanation: '「〜だから」という理由を表す接続詞 because を使います。',
    parts: [
      { text: 'We', role: 'S' },
      { text: 'stayed', role: 'V' },
      { text: 'home', role: 'M' },
      { text: 'because it was raining', role: 'M' },
    ],
    options: ['We', 'stayed', 'home', 'because it was raining']
  }

  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '学術',
    grammar_category: '仮定法',
    japanese_text: '万が一彼女が心変わりしたら、私に知らせてください。',
    english_text: 'Should she change her mind, please let me know.',
    explanation: 'If she should change her mind のIfが省略され、倒置が起きた形（Should she change...）です。',
    parts: [
      { text: 'Should she change', role: 'M' },
      { text: 'her mind', role: 'O' },
      { text: 'please let me know', role: 'V' },
    ],
    options: ['Should she change', 'If she changed', 'Had she changed', 'Did she change']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: 'ビジネス',
    grammar_category: '仮定法',
    japanese_text: 'あなたの援助がなかったら、そのプロジェクトは失敗していただろう。',
    english_text: 'Had it not been for your help, the project would have failed.',
    explanation: 'If it had not been for... の If が省略され、倒置が起きた形です。',
    parts: [
      { text: 'Had it not been', role: 'M' },
      { text: 'for your help', role: 'M' },
      { text: 'the project', role: 'S' },
      { text: 'would have failed', role: 'V' },
    ],
    options: ['Had it not been', 'for your help', 'the project', 'would have failed']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '科学',
    grammar_category: '分詞',
    japanese_text: '他の条件がすべて同じであれば、この手法が最も効率的だ。',
    english_text: 'All other things being equal, this method is the most efficient.',
    explanation: '独立分詞構文です。主節の主語(this method)と異なる主語(All other things)が残っています。',
    parts: [
      { text: 'All other things being equal', role: 'M' },
      { text: 'this method', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'the most efficient', role: 'C' },
    ],
    options: ['being', 'are', 'were', 'to be']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '文学',
    grammar_category: '分詞',
    japanese_text: '遠くから見ると、その岩は人間の顔のように見えた。',
    english_text: 'Seen from a distance, the rock looked like a human face.',
    explanation: 'If it is seen... の分詞構文。受動の意味なので過去分詞 Seen から始まります。',
    parts: [
      { text: 'Seen', role: 'M' },
      { text: 'from a distance', role: 'M' },
      { text: 'the rock', role: 'S' },
      { text: 'looked like a human face', role: 'V' },
    ],
    options: ['Seen', 'from a distance', 'the rock', 'looked like a human face']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '社会',
    grammar_category: '関係代名詞',
    japanese_text: '彼がその試験に合格したこと、それは私を驚かせた。',
    english_text: 'He passed the exam, which surprised me.',
    explanation: 'コンマ + which は継続用法で、前文の内容全体を先行詞として受けることができます。',
    parts: [
      { text: 'He passed the exam', role: 'M' },
      { text: 'which', role: 'S' },
      { text: 'surprised', role: 'V' },
      { text: 'me', role: 'O' },
    ],
    options: ['which', 'what', 'that', 'it']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '学術',
    grammar_category: '関係代名詞',
    japanese_text: 'これが、その効果について私たちが議論していた薬です。',
    english_text: 'This is the medicine about the effects of which we were discussing.',
    explanation: 'the effects of the medicine が about the effects of which となります。',
    parts: [
      { text: 'This is the medicine', role: 'C' },
      { text: 'about the effects of which', role: 'M' },
      { text: 'we', role: 'S' },
      { text: 'were discussing', role: 'V' },
    ],
    options: ['This is the medicine', 'about the effects of which', 'we', 'were discussing']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '論理',
    grammar_category: '助動詞',
    japanese_text: '彼女がそんな間違いをしたはずがない。',
    english_text: 'She cannot have made such a mistake.',
    explanation: '「〜したはずがない」は cannot have + 過去分詞 で表します。',
    parts: [
      { text: 'She', role: 'S' },
      { text: 'cannot have made', role: 'V' },
      { text: 'such a mistake', role: 'O' },
    ],
    options: ['cannot have made', 'must not make', 'may not have made', 'should not make']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: 'ビジネス',
    grammar_category: '助動詞',
    japanese_text: 'あなたは上司にその問題を報告すべきだったのに（しなかった）。',
    english_text: 'You should have reported the issue to your boss.',
    explanation: '「〜すべきだったのに（しなかった）」は should have + 過去分詞 で表します。',
    parts: [
      { text: 'You', role: 'S' },
      { text: 'should have reported', role: 'V' },
      { text: 'the issue', role: 'O' },
      { text: 'to your boss', role: 'M' },
    ],
    options: ['You', 'should have reported', 'the issue', 'to your boss']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '学術',
    grammar_category: '動名詞',
    japanese_text: '教授は、学生たちが論文を遅れて提出することに反対した。',
    english_text: 'The professor objected to the students\' submitting their papers late.',
    explanation: 'object to -ing で「〜することに反対する」。動名詞の意味上の主語は所有格（the students\'）または目的格を使います。',
    parts: [
      { text: 'The professor', role: 'S' },
      { text: 'objected to', role: 'V' },
      { text: 'the students\' submitting', role: 'O' },
      { text: 'their papers late', role: 'M' },
    ],
    options: ['submitting', 'submit', 'submitted', 'to submit']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '日常',
    grammar_category: '動名詞',
    japanese_text: '覆水盆に返らず。（こぼれたミルクを嘆いても無駄だ）',
    english_text: 'It is no use crying over spilt milk.',
    explanation: 'It is no use -ing で「〜しても無駄だ」という慣用表現です。',
    parts: [
      { text: 'It is no use', role: 'V' },
      { text: 'crying', role: 'S' },
      { text: 'over spilt milk', role: 'M' },
    ],
    options: ['It is no use', 'crying', 'over spilt milk']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '学術',
    grammar_category: '比較',
    japanese_text: 'その結果は、予想していたよりもはるかに重要であった。',
    english_text: 'The result was much more significant than had been expected.',
    explanation: 'thanの後に主語がなく、いきなり動詞が来ている一種の疑似関係代名詞的な用法です。また much で比較級を強調しています。',
    parts: [
      { text: 'The result', role: 'S' },
      { text: 'was', role: 'V' },
      { text: 'much more significant', role: 'C' },
      { text: 'than had been expected', role: 'M' },
    ],
    options: ['much', 'very', 'many', 'so']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '社会',
    grammar_category: '比較',
    japanese_text: '私たちが直面している問題は、過去のどの問題よりも複雑だ。',
    english_text: 'The problem we are facing is more complex than any other problem in the past.',
    explanation: '比較級 + than any other + 単数名詞 で最上級の意味を表します。',
    parts: [
      { text: 'The problem we are facing', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'more complex', role: 'C' },
      { text: 'than any other problem in the past', role: 'M' },
    ],
    options: ['The problem we are facing', 'is', 'more complex', 'than any other problem in the past']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '学術',
    grammar_category: '不定詞',
    japanese_text: 'その理論が実証されるのは不可能だと思われる。',
    english_text: 'The theory seems impossible to be proven.',
    explanation: '難易形容詞（impossible）＋ 不定詞。主語（the theory）が不定詞の目的語になる場合は受動態（to be proven）にするか、能動態（to prove）にすることも可能です。ここでは受動態が選択肢になります。',
    parts: [
      { text: 'The theory', role: 'S' },
      { text: 'seems impossible', role: 'C' },
      { text: 'to be proven', role: 'M' },
    ],
    options: ['to be proven', 'proving', 'proved', 'having proven']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: 'ビジネス',
    grammar_category: '不定詞',
    japanese_text: 'その問題に対処する唯一の解決策は、戦略を完全に変更することだ。',
    english_text: 'The only solution to cope with the problem is to completely change our strategy.',
    explanation: '不定詞の副詞的用法による修飾（to cope with）と、名詞的用法の補語（to completely change）の両方を含みます。toと動詞の原形の間に副詞が入る分離不定詞です。',
    parts: [
      { text: 'The only solution to cope with the problem', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'to completely change', role: 'C' },
      { text: 'our strategy', role: 'O' },
    ],
    options: ['The only solution to cope with the problem', 'is', 'to completely change', 'our strategy']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '社会',
    grammar_category: '現在完了',
    japanese_text: '気候変動はここ数十年間で深刻な問題となってきた。',
    english_text: 'Climate change has become a severe issue over the last few decades.',
    explanation: '過去から現在までの継続した変化を表すため、現在完了形を使います。over the last few decades と相性が良いです。',
    parts: [
      { text: 'Climate change', role: 'S' },
      { text: 'has become', role: 'V' },
      { text: 'a severe issue', role: 'C' },
      { text: 'over the last few decades', role: 'M' },
    ],
    options: ['has become', 'became', 'becomes', 'is becoming']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '科学',
    grammar_category: '現在完了',
    japanese_text: 'その科学者はついに画期的な発見をした。',
    english_text: 'The scientist has finally made a breakthrough discovery.',
    explanation: '現在に影響を及ぼす「結果・完了」を表す現在完了形です。',
    parts: [
      { text: 'The scientist', role: 'S' },
      { text: 'has finally made', role: 'V' },
      { text: 'a breakthrough discovery', role: 'O' },
    ],
    options: ['The scientist', 'has finally made', 'a breakthrough discovery']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '社会',
    grammar_category: '接続詞',
    japanese_text: '彼が富裕であるか貧困であるかは問題ではない。',
    english_text: 'It doesn\'t matter whether he is rich or poor.',
    explanation: '「〜であろうとなかろうと」という名詞節を導く接続詞 whether を使います。',
    parts: [
      { text: 'It doesn\'t matter', role: 'V' },
      { text: 'whether', role: 'S' },
      { text: 'he is rich or poor', role: 'C' },
    ],
    options: ['whether', 'if', 'that', 'unless']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '学術',
    grammar_category: '接続詞',
    japanese_text: 'ひとたび失われると、時間は決して取り戻すことができない。',
    english_text: 'Once lost, time can never be recovered.',
    explanation: '接続詞 Once に続く it is が省略された分詞構文的な表現です。',
    parts: [
      { text: 'Once lost', role: 'M' },
      { text: 'time', role: 'S' },
      { text: 'can never be recovered', role: 'V' },
    ],
    options: ['Once lost', 'time', 'can never be recovered']
  }
  ,
  {
    mode: 'simple',
    difficulty: 5,
    theme: '文学',
    grammar_category: '受動態',
    japanese_text: '彼はその時代における最も偉大な作家の一人であると言われている。',
    english_text: 'He is said to be one of the greatest writers of his time.',
    explanation: '「〜と言われている」は It is said that he is... または He is said to be... となります。',
    parts: [
      { text: 'He', role: 'S' },
      { text: 'is said to be', role: 'V' },
      { text: 'one of the greatest writers', role: 'C' },
      { text: 'of his time', role: 'M' },
    ],
    options: ['is said to be', 'is said being', 'says to be', 'was said to be']
  }
  ,
  {
    mode: 'personalized',
    difficulty: 5,
    theme: '社会',
    grammar_category: '受動態',
    japanese_text: 'その新しい法律は来月までに施行されることが期待されている。',
    english_text: 'The new law is expected to be enforced by next month.',
    explanation: '「〜されることが期待される」は be expected to be + 過去分詞 となります。',
    parts: [
      { text: 'The new law', role: 'S' },
      { text: 'is expected', role: 'V' },
      { text: 'to be enforced', role: 'C' },
      { text: 'by next month', role: 'M' },
    ],
    options: ['The new law', 'is expected', 'to be enforced', 'by next month']
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
