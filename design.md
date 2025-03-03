# クレイジースロットシステム設計書

## 1. システム概要

### 1.1 システム名
crazy-slot

### 1.2 目的
ランダムな数値生成に基づいて、日々の食事制限とカロリー目標を自動的に設定し、Discordを通じて通知するシステム。

### 1.3 主要機能
- 日次での自動実行
- ランダムな数値生成（1-100）
- 結果に基づく食事制限とカロリー目標の決定
- Discord経由での通知

## 2. 技術仕様

### 2.1 開発環境
- 実行環境：Node.js
- 開発言語：JavaScript
- クラウドサービス：AWS
  - AWS Lambda
  - AWS EventBridge
- 通知プラットフォーム：Discord Webhook

### 2.2 システムアーキテクチャ
```mermaid
graph TD
    A[AWS EventBridge] -->|定期実行 or イベント発生| B[AWS Lambda (Node.js)]
    B -->|HTTPリクエスト| C[Discord Webhook]
    
    subgraph AWS
        A
        B
    end
    
    subgraph Discord
        C
    end
```

## 3. 機能仕様

### 3.1 ルール定義
| 乱数範囲 | 結果 | 詳細 |
|----------|------|------|
| 1        | 精進デー | - 米、納豆、漬物、味噌汁のみ許可<br>- 社食の場合はうどん・そば選択可 |
| 2-10     | 1,500Kcal | 通常の食事制限 |
| 11-25    | 1,600Kcal | 通常の食事制限 |
| 26-50    | 1,700Kcal | 通常の食事制限 |
| 51-75    | 1,800Kcal | 通常の食事制限 |
| 76-90    | 1,900Kcal | 通常の食事制限 |
| 91-97    | 2,000Kcal | 通常の食事制限 |
| 98-100   | チートデー | 制限なし |

### 3.2 処理フロー
1. AWS EventBridgeによる定期実行トリガー
2. AWS Lambda関数の起動
3. 乱数生成（1-100）
4. ルールテーブルに基づく結果判定
5. Discord Webhookを使用したメッセージ送信

## 4. 実装詳細

### 4.1 AWS EventBridge設定
- スケジュール：日次実行
- 実行時刻：毎日午前0時（JST）

### 4.2 AWS Lambda設定
- ランタイム：Node.js 18.x
- タイムアウト：30秒
- メモリ：128MB
- 環境変数：
  - DISCORD_WEBHOOK_URL：Discord Webhook URL

### 4.3 エラーハンドリング
- Lambda実行エラー時のリトライ設定
- Discord通知失敗時の例外処理
- ログ出力によるモニタリング

## 5. 監視・運用

### 5.1 モニタリング項目
- Lambda実行ステータス
- Discord通知成功率
- エラーログ

### 5.2 アラート設定
- Lambda実行失敗時
- Discord通知失敗時

## 6. セキュリティ

### 6.1 認証・認可
- AWS IAMロールによる適切な権限設定
- Discord Webhook URLの安全な管理

### 6.2 環境変数管理
- 機密情報のAWS Systems Managerパラメータストアでの管理