# Syntaxy - 英語文法学習アプリ

![Syntaxy](https://syntaxy.app/og-image.jpg)

**Syntaxy** は、大学受験やTOEIC対策など、英語を学ぶすべての方に向けた「英語文法特化型」の学習ウェブアプリケーションです。
クイズ形式で文法を楽しく学べるだけでなく、SVOC（文型）の並べ替えゲームや、苦手な問題のみを復習できる機能などを備えています。

## 🚀 デプロイURL (Live Demo)
**[https://syntaxy.app/](https://syntaxy.app/)**
*(※ デモ用のURLです。実際のデプロイURLに合わせて変更してください)*

## ✨ 主な機能 (Features)

- **4択クイズモード**: スピーディーに英文法の基礎を定着させるシンプルモード。
- **並べ替えモード**: SVOCの構造を意識しながら正しい語順を組み立てるパーソナライズ学習。
- **ワンポイント解説**: 正解・不正解にかかわらず、なぜその語順になるのかという文法解説を表示し、学習定着率を向上。
- **苦手克服（復習）モード**: 過去に間違えた問題だけを抽出し、集中的に復習が可能。
- **学習進捗トラッキング**: 正答率や回答数、連続学習日数（ストリーク機能）を可視化。
- **SEO & OGP 最適化**: Next.js (App Router) によるSSGで、SNSシェア時の表示やクローラーへの対応を最適化。

## 🛠 技術スタック (Tech Stack)

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, SSG/CSR Hybrid)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: React (独自カスタマイズのUIコンポーネント)

### Backend / Infrastructure
- **Authentication**: Firebase Authentication (Google ログイン)
- **Database**: Cloud Firestore (ユーザー情報、学習履歴、問題データの管理)
- **Hosting**: Vercel (推奨)

## 📂 ディレクトリ構成 (Directory Structure)

```text
src/
├── app/                  # Next.js App Router (ページルーティング)
│   ├── login/            # ログインページ
│   ├── onboarding/       # 初回登録・目的設定ページ
│   ├── progress/         # 学習進捗・統計ページ
│   ├── quiz/             # クイズ出題・結果ページ
│   ├── settings/         # ユーザー設定ページ
│   ├── globals.css       # グローバルCSS (Tailwind設定)
│   └── layout.tsx        # Root Layout (メタデータ / OGP / 共通プロバイダ)
├── components/           # UIコンポーネント群
│   ├── home/             # ホーム画面用コンポーネント
│   ├── layout/           # ヘッダー・ボトムナビ等 (ClientLayout)
│   └── ui/               # 汎用UI (Skeleton, ErrorBoundary)
├── contexts/             # React Context (AuthContextによる状態管理)
├── hooks/                # カスタムフック (useUserProfile, useStudyStats)
├── lib/                  # ライブラリ初期化 (firebase.ts)
├── services/             # 外部API/DB通信ロジック (userService, questionService等)
└── types/                # TypeScript型定義
```

## 💻 ローカルでの起動手順 (Local Setup)

このプロジェクトをローカルで動かすための手順です。

### 1. リポジトリのクローンと依存関係のインストール

```bash
git clone https://github.com/Ken25044/syntaxy.git
cd syntaxy
npm install
```

### 2. 環境変数の設定

プロジェクトのルートディレクトリに `.env.local` ファイルを作成し、Firebaseのプロジェクト設定から取得した情報を記述します。

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Firestoreへの問題データの投入（シード）

クイズデータをFirestoreに保存するためのシードスクリプトを実行します。
*(※ 事前にFirebase Admin SDKの `serviceAccountKey.json` を `scripts/` に配置する必要があります)*

```bash
node scripts/seed.mjs
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスすると、アプリが起動します。

## 💡 アピールポイント

- **モダンなアーキテクチャへの移行**: 当初は Vite (SPA) で開発していましたが、SEOや初回読み込み速度、クローラーへの対応を考慮し、**Next.js (App Router)** にリファクタリング・移行を行いました。
- **データ駆動のUI設計**: Firebaseによるリアルタイムな状態管理と、Suspense や ErrorBoundary などのReact 18の機能を活用した堅牢なUIを実現しています。
- **高いユーザー体験（UX）**: スムーズな画面遷移、直感的なUI（FlameIcon等の視覚的フィードバック）、すぐに復習できる導線設計など、ユーザーの「学習を続けたくなる」体験にこだわっています。
