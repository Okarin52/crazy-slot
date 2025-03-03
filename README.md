# Crazy Slot

ランダムな数値を生成して、その結果に基づいて食事制限のルールを決定し、Discordに通知するシンプルなアプリケーションです。

## 機能

- 1から100までのランダムな数値を生成
- 生成された数値に基づいて食事制限ルールを決定
- 結果をDiscordに通知

## 設定方法

1. リポジトリをクローン
2. 依存関係をインストール: `npm install`
3. `.env`ファイルを作成し、Discordのウェブフックを設定:
   ```
   DISCORD_WEBHOOK_URL=あなたのDiscordウェブフックURL
   ```

## 使用方法

```bash
node src/index.js
```

## AWS Lambda での実行

このアプリケーションはAWS Lambdaでの実行にも対応しています。`handler`関数をLambdaのハンドラーとして設定してください。
