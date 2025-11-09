# みゃのさんのページ

マルチリンガル対応のポートフォリオサイトです。プロジェクト紹介、リンク集、SAGANシリーズの解説、生成AIコミュニケーション支援プロジェクト「WITHYOU」などをシンプルなUIでまとめています。

## 公開URL
- 日本語: https://myanosasa.github.io
- English: https://myanosasa.github.io/index_en.html
- 中文简体: https://myanosasa.github.io/index_zh.html

## サイトの主な内容
- ヒーローセクション背景スライドショー（4枚 / 5秒間隔）
- About・Mission・Creation・Links・Partners のタブ切り替え
- 次世代人型機械「SAGAN」専用ページ（日・英・中）
- 生成AIコミュニケーション支援サービス「WITHYOU」紹介（日・英・中）
- Font Awesome・Google Fonts を用いた統一デザイン
- PC / タブレット / モバイル対応のレスポンシブ設計

## ディレクトリ概要
- ルート
  - `index.html` / `index_en.html` / `index_zh.html`: トップページ（日・英・中）
  - `withyou.html` / `withyou_en.html` / `withyou_zh.html`: WITHYOU 紹介ページ
  - `sagan.html` / `sagan_en.html` / `sagan_zh.html`: SAGAN 紹介ページ
  - `404.html`: カスタムエラーページ
- `css/`
  - `style.css`: 共通スタイル
  - `sagan.css`: SAGANページ専用スタイル
  - `withyou.css`: WITHYOUページ専用スタイル
- `js/`
  - `main.js`: トップページ共通スクリプト
  - `sagan.js`: SAGANページ用スクリプト
- `images/`, `hero_bgs/`: 画像アセット（ヒーロー背景、プロジェクト画像、アイコンなど）

## 使用技術・ライブラリ
- HTML5 / CSS3 / JavaScript (ES6)
- Google Fonts: Noto Sans JP / Noto Sans SC
- Font Awesome 6 (CDN)
- GitHub Pages（ホスティング）

## ローカル開発
```bash
# Python
python -m http.server 8000
# or Node.js
npx http-server .
```

ブラウザで http://localhost:8000 を開いて確認します。

## ライセンス
- ソースコード・コンテンツ: `LICENSE` の利用条件に準拠（無断転載・改変禁止）