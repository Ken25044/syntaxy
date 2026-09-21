import type { ToeflQuestion } from '@/types';

export const toeflMockQuestions: ToeflQuestion[] = [
  {
    "id": "toefl-mock-r1",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r1-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r1-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r1-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r1-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r1-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t1",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t1-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t1-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t1-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t1-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r2",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r2-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r2-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r2-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r2-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r2-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t2",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t2-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t2-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t2-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t2-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r3",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r3-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r3-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r3-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r3-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r3-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t3",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t3-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t3-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t3-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t3-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r4",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r4-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r4-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r4-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r4-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r4-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t4",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t4-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t4-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t4-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t4-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r5",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r5-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r5-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r5-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r5-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r5-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t5",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t5-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t5-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t5-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t5-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r6",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r6-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r6-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r6-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r6-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r6-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t6",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t6-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t6-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t6-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t6-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r7",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r7-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r7-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r7-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r7-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r7-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t7",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t7-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t7-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t7-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t7-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r8",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r8-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r8-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r8-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r8-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r8-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t8",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t8-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t8-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t8-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t8-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r9",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r9-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r9-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r9-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r9-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r9-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t9",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t9-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t9-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t9-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t9-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r10",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r10-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r10-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r10-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r10-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r10-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t10",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t10-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t10-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t10-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t10-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r11",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r11-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r11-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r11-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r11-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r11-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t11",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t11-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t11-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t11-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t11-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r12",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r12-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r12-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r12-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r12-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r12-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t12",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t12-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t12-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t12-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t12-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r13",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r13-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r13-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r13-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r13-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r13-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t13",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t13-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t13-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t13-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t13-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r14",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r14-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r14-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r14-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r14-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r14-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t14",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t14-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t14-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t14-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t14-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r15",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r15-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r15-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r15-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r15-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r15-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t15",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t15-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t15-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t15-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t15-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r16",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r16-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r16-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r16-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r16-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r16-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t16",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t16-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t16-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t16-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t16-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r17",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r17-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r17-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r17-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r17-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r17-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t17",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t17-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t17-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t17-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t17-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r18",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r18-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r18-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r18-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r18-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r18-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t18",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t18-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t18-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t18-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t18-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r19",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r19-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r19-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r19-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r19-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r19-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t19",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t19-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t19-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t19-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t19-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r20",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r20-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r20-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r20-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r20-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r20-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t20",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t20-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t20-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t20-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t20-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r21",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r21-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r21-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r21-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r21-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r21-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t21",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t21-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t21-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t21-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t21-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r22",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r22-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r22-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r22-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r22-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r22-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t22",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t22-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t22-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t22-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t22-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r23",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r23-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r23-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r23-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r23-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r23-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t23",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t23-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t23-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t23-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t23-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r24",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r24-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r24-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r24-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r24-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r24-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t24",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t24-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t24-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t24-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t24-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r25",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r25-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r25-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r25-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r25-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r25-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t25",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t25-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t25-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t25-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t25-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r26",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r26-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r26-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r26-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r26-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r26-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t26",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t26-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t26-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t26-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t26-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r27",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r27-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r27-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r27-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r27-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r27-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t27",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t27-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t27-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t27-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t27-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r28",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r28-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r28-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r28-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r28-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r28-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t28",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t28-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t28-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t28-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t28-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r29",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r29-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r29-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r29-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r29-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r29-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t29",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t29-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t29-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t29-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t29-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r30",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r30-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r30-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r30-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r30-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r30-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t30",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t30-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t30-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t30-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t30-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r31",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r31-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r31-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r31-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r31-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r31-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t31",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t31-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t31-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t31-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t31-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r32",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r32-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r32-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r32-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r32-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r32-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t32",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t32-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t32-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t32-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t32-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r33",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r33-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r33-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r33-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r33-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r33-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t33",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t33-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t33-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t33-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t33-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r34",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r34-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r34-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r34-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r34-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r34-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t34",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t34-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t34-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t34-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t34-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r35",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r35-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r35-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r35-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r35-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r35-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t35",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t35-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t35-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t35-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t35-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r36",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r36-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r36-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r36-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r36-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r36-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t36",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t36-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t36-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t36-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t36-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r37",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r37-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r37-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r37-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r37-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r37-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t37",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t37-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t37-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t37-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t37-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r38",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r38-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r38-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r38-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r38-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r38-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t38",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t38-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t38-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t38-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t38-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r39",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r39-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r39-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r39-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r39-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r39-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t39",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t39-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t39-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t39-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t39-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r40",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r40-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r40-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r40-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r40-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r40-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t40",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t40-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t40-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t40-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t40-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r41",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r41-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r41-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r41-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r41-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r41-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t41",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t41-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t41-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t41-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t41-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r42",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r42-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r42-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r42-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r42-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r42-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t42",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t42-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t42-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t42-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t42-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r43",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r43-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r43-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r43-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r43-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r43-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t43",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t43-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t43-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t43-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t43-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r44",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r44-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r44-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r44-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r44-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r44-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t44",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t44-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t44-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t44-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t44-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r45",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r45-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r45-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r45-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r45-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r45-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t45",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t45-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t45-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t45-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t45-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r46",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u6587\u732e\u3092\u5206\u6790\u3057\u305f\u7814\u7a76\u8005\u305f\u3061\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u304c\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The researchers who analyzed the literature found that globalization significantly affects public health.",
    "parts": [
      {
        "id": "r46-1",
        "text": "The researchers",
        "role": "S"
      },
      {
        "id": "r46-2",
        "text": "who analyzed the literature",
        "role": "M"
      },
      {
        "id": "r46-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r46-4",
        "text": "that globalization significantly affects public health",
        "role": "O"
      },
      {
        "id": "r46-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t46",
    "question_type": "typing",
    "japanese_text": "\u30b0\u30ed\u30fc\u30d0\u30eb\u5316\u306f\u516c\u8846\u885b\u751f\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Globalization significantly affects public health.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t46-1",
        "text": "Globalization",
        "role": "S"
      },
      {
        "id": "t46-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t46-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t46-4",
        "text": "public health",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r47",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u73fe\u8c61\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u79d1\u5b66\u8005\u305f\u3061\u306f\u3001\u6c5a\u67d3\u304c\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scientists who reviewed the phenomenon found that pollution significantly affects cognitive performance.",
    "parts": [
      {
        "id": "r47-1",
        "text": "The scientists",
        "role": "S"
      },
      {
        "id": "r47-2",
        "text": "who reviewed the phenomenon",
        "role": "M"
      },
      {
        "id": "r47-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r47-4",
        "text": "that pollution significantly affects cognitive performance",
        "role": "O"
      },
      {
        "id": "r47-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t47",
    "question_type": "typing",
    "japanese_text": "\u6c5a\u67d3\u306f\u8a8d\u77e5\u80fd\u529b\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Pollution significantly affects cognitive performance.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t47-1",
        "text": "Pollution",
        "role": "S"
      },
      {
        "id": "t47-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t47-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t47-4",
        "text": "cognitive performance",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r48",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u8a3c\u62e0\u3092\u8abf\u67fb\u3057\u305f\u5c02\u9580\u5bb6\u305f\u3061\u306f\u3001\u7761\u7720\u4e0d\u8db3\u304c\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The experts who investigated the evidence found that sleep deprivation significantly affects biodiversity.",
    "parts": [
      {
        "id": "r48-1",
        "text": "The experts",
        "role": "S"
      },
      {
        "id": "r48-2",
        "text": "who investigated the evidence",
        "role": "M"
      },
      {
        "id": "r48-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r48-4",
        "text": "that sleep deprivation significantly affects biodiversity",
        "role": "O"
      },
      {
        "id": "r48-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t48",
    "question_type": "typing",
    "japanese_text": "\u7761\u7720\u4e0d\u8db3\u306f\u751f\u7269\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Sleep deprivation significantly affects biodiversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t48-1",
        "text": "Sleep deprivation",
        "role": "S"
      },
      {
        "id": "t48-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t48-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t48-4",
        "text": "biodiversity",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r49",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u7814\u7a76\u3092\u691c\u8a3c\u3057\u305f\u5b66\u8005\u305f\u3061\u306f\u3001\u6c17\u5019\u5909\u52d5\u304c\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The scholars who examined the study found that climate change significantly affects local economies.",
    "parts": [
      {
        "id": "r49-1",
        "text": "The scholars",
        "role": "S"
      },
      {
        "id": "r49-2",
        "text": "who examined the study",
        "role": "M"
      },
      {
        "id": "r49-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r49-4",
        "text": "that climate change significantly affects local economies",
        "role": "O"
      },
      {
        "id": "r49-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t49",
    "question_type": "typing",
    "japanese_text": "\u6c17\u5019\u5909\u52d5\u306f\u5730\u57df\u7d4c\u6e08\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Climate change significantly affects local economies.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t49-1",
        "text": "Climate change",
        "role": "S"
      },
      {
        "id": "t49-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t49-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t49-4",
        "text": "local economies",
        "role": "O"
      }
    ]
  },
  {
    "id": "toefl-mock-r50",
    "question_type": "reorder",
    "japanese_text": "\u305d\u306e\u30c7\u30fc\u30bf\u3092\u884c\u3063\u305f\u6559\u6388\u305f\u3061\u306f\u3001\u90fd\u5e02\u5316\u304c\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3053\u3068\u3092\u767a\u898b\u3057\u305f\u3002",
    "english_text": "The professors who conducted the data found that urbanization significantly affects cultural diversity.",
    "parts": [
      {
        "id": "r50-1",
        "text": "The professors",
        "role": "S"
      },
      {
        "id": "r50-2",
        "text": "who conducted the data",
        "role": "M"
      },
      {
        "id": "r50-3",
        "text": "found",
        "role": "V"
      },
      {
        "id": "r50-4",
        "text": "that urbanization significantly affects cultural diversity",
        "role": "O"
      },
      {
        "id": "r50-d1",
        "text": "in the laboratory",
        "role": "M",
        "is_dummy": true
      }
    ]
  },
  {
    "id": "toefl-mock-t50",
    "question_type": "typing",
    "japanese_text": "\u90fd\u5e02\u5316\u306f\u6587\u5316\u7684\u591a\u69d8\u6027\u306b\u5927\u304d\u304f\u5f71\u97ff\u3059\u308b\u3002",
    "english_text": "Urbanization significantly affects cultural diversity.",
    "target_word": "significantly",
    "parts": [
      {
        "id": "t50-1",
        "text": "Urbanization",
        "role": "S"
      },
      {
        "id": "t50-2",
        "text": "significantly",
        "role": "M",
        "is_target": true
      },
      {
        "id": "t50-3",
        "text": "affects",
        "role": "V"
      },
      {
        "id": "t50-4",
        "text": "cultural diversity",
        "role": "O"
      }
    ]
  }
];

export function getMockToeflQuestions(
  questionType: 'reorder' | 'typing',
  count = 50,
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
