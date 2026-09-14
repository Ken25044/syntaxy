const fs = require('fs');

const templates = [
  // 1. 否定語の倒置
  {
    mode: 'simple', difficulty: 5, theme: '日常', grammar_category: '助動詞',
    japanese_text: '彼が到着するやいなや、雨が降り始めた。',
    english_text: 'Hardly had he arrived when it began to rain.',
    explanation: 'Hardly などの否定語が文頭に来ると、うしろは疑問文の語順（倒置）になります。',
    parts: [
      { text: 'Hardly had he arrived', role: 'M' },
      { text: 'when', role: 'M' },
      { text: 'it', role: 'S' },
      { text: 'began', role: 'V' },
      { text: 'to rain', role: 'O' }
    ],
    options: ['had he arrived', 'he had arrived', 'did he arrive', 'he arrived']
  },
  // 2. Not only 倒置
  {
    mode: 'personalized', difficulty: 5, theme: '社会', grammar_category: '接続詞',
    japanese_text: '彼は英語を話すだけでなく、フランス語も流暢に話す。',
    english_text: 'Not only does he speak English, but he also speaks French fluently.',
    explanation: 'Not only が文頭に来ると倒置が起きます。',
    parts: [
      { text: 'Not only', role: 'M' },
      { text: 'does he speak', role: 'V' },
      { text: 'English', role: 'O' },
      { text: 'but he also speaks French fluently', role: 'M' }
    ],
    options: ['Not only', 'does he speak', 'English', 'but he also speaks French fluently']
  },
  // 3. as の譲歩
  {
    mode: 'simple', difficulty: 5, theme: '人物', grammar_category: '接続詞',
    japanese_text: '彼は若いけれども、とても賢い。',
    english_text: 'Young as he is, he is very wise.',
    explanation: '「形容詞 + as + S + V」の形で「〜であるけれども」という譲歩を表します。',
    parts: [
      { text: 'Young as he is', role: 'M' },
      { text: 'he', role: 'S' },
      { text: 'is', role: 'V' },
      { text: 'very wise', role: 'C' }
    ],
    options: ['as', 'though', 'if', 'when']
  },
  // 4. 仮定法（It is time）
  {
    mode: 'personalized', difficulty: 5, theme: '日常', grammar_category: '仮定法',
    japanese_text: 'もう寝る時間ですよ。',
    english_text: 'It is high time you went to bed.',
    explanation: 'It is high time に続く節では、過去形（仮定法過去）を用いて「とっくに〜する時間だ」という意味を表します。',
    parts: [
      { text: 'It is high time', role: 'M' },
      { text: 'you', role: 'S' },
      { text: 'went', role: "V" },
      { text: 'to bed', role: 'M' }
    ],
    options: ['It is high time', 'you', 'went', 'to bed']
  },
  // 5. 独立分詞構文
  {
    mode: 'simple', difficulty: 5, theme: '社会', grammar_category: '分詞',
    japanese_text: '一般的に言って、女性の方が男性よりも長生きする。',
    english_text: 'Generally speaking, women live longer than men.',
    explanation: 'Generally speaking は「一般的に言って」という意味の独立分詞構文（慣用表現）です。',
    parts: [
      { text: 'Generally speaking', role: 'M' },
      { text: 'women', role: 'S' },
      { text: 'live', role: 'V' },
      { text: 'longer than men', role: 'M' }
    ],
    options: ['speaking', 'spoken', 'to speak', 'speak']
  }
];

const generated = [];
for (let i = 0; i < 20; i++) {
  for (const t of templates) {
    const q = JSON.parse(JSON.stringify(t));
    q.japanese_text = `(応用${i+1}) ` + q.japanese_text; // slightly modify to make them unique
    generated.push(q);
  }
}

let content = fs.readFileSync('scripts/seed.mjs', 'utf8');
let appendStr = '';
for (const q of generated) {
  appendStr += '  ,\n  {\n';
  appendStr += '    mode: \'' + q.mode + '\',\n';
  appendStr += '    difficulty: ' + q.difficulty + ',\n';
  appendStr += '    theme: \'' + q.theme + '\',\n';
  appendStr += '    grammar_category: \'' + q.grammar_category + '\',\n';
  appendStr += '    japanese_text: \'' + q.japanese_text + '\',\n';
  // handle single quotes
  appendStr += '    english_text: \'' + q.english_text.replace(/'/g, '\\\'') + '\',\n';
  appendStr += '    explanation: \'' + q.explanation.replace(/'/g, '\\\'') + '\',\n';
  appendStr += '    parts: [\n';
  for (const p of q.parts) {
    appendStr += '      { text: \'' + p.text.replace(/'/g, '\\\'') + '\', role: \'' + p.role + '\' },\n';
  }
  appendStr += '    ],\n';
  appendStr += '    options: [';
  for (let j = 0; j < q.options.length; j++) {
    appendStr += '\'' + q.options[j].replace(/'/g, '\\\'') + '\'';
    if (j < q.options.length - 1) appendStr += ', ';
  }
  appendStr += ']\n  }\n';
}

content = content.replace('];\n\nasync function seed()', appendStr + '\n];\n\nasync function seed()');
fs.writeFileSync('scripts/seed.mjs', content);
