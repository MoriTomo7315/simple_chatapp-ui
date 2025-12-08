# Simple Chat App UI

シンプルなチャットアプリケーションのフロントエンドUIリポジトリです。

## Background

このUIは、チャットアプリケーション作成の学習のためのものです。スクリーン等のベースの初回作成を[Cursor](https://cursor.sh/)で主に作成しています。

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.4 
- **UI Library**: [React](https://react.dev/) 19.2.0
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) 

## Run this app

このアプリケーションをローカル環境で実行するには、以下の手順に従ってください。

### Prerequisite

- [Node.js](https://nodejs.org/) 18.0.0以上がインストールされていること
- npm、yarn、pnpm、またはbunがインストールされていること

### Setting up

Please run [simple_chatapp-api](https://github.com/MoriTomo7315/simple_chatapp-api) beforehands.

```bash
npm install
# または
yarn install
# または
pnpm install
```

### Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)


## Specification

### Screens

1. **チャットルーム一覧画面** (`/`)
   - チャットルームのリスト表示
   - 各チャットルームの新着表示
   - チャットルームをクリックして詳細画面に遷移
   - ナビゲーションバー（チャット、作成、検索、プロフィールタブ）　※実際には検索とプロフィールタブは未実装

2. **チャットルーム詳細画面** (`/chatroom/[id]`)
   - メッセージの一覧表示
   - メッセージの送信機能
   - 送信者と受信者のメッセージを区別して表示
   - アバター画像の表示
   - タイムスタンプの表示









## Licenses

このプロジェクトは学習目的で作成されています。
