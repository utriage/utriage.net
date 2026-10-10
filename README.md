# Ultimate Triage

- [Ultimate Triage](#ultimate-triage)
  - [Static Site with Astro](#static-site-with-astro)
  - [How To](#how-to)
  - [Remarks](#remarks)

World of Warcraftギルド[**Ultimate Triage**](https://utriage.net)のウェブサイトソースコードです。

- ~~Github~~ Cloudflare Pagesを使って公開しています(タダ！)。
- 元々は静的サイトジェネレータ[Jekyll](http://jekyllrb.com/)を使っていましたが、現在は[Astro](https://astro.build/) (TypeScript) に移行しています。
  テーマはJekyll時代に少し手を加えた[Halve theme](https://github.com/TaylanTatli/Halve)のデザイン・CSSを移植してそのまま引き継いでいます。
- 管理者は[ymtszw](https://github.com/ymtszw) a.k.a. [Gada](https://twitter.com/gada_twt)です。

## Static Site with Astro

- WordPress等のCMSがイマイチ好きくないので、markdownで書けて、
  ビルドしてしまえば読み込みも高速な静的サイトジェネレータを使うことにしました。
- 元々はJekyllで動かしていましたが、環境構築の面倒さ（特にWindows環境でのRuby/C拡張のビルド辛い問題など）から脱却するため、Astro + TypeScript構成に移行しました。
- GithubやMarkdownでのサイト管理に興味がある方は、markdownで書いた記事をPRしてもらえれば、mergeします。
  - よくあるFrontmatterのついたMarkdownです。[_posts/](./_posts)ディレクトリの既存記事を参考にしてください。
    - `author`という筆者を表示するcustom variableを使っています。
  - 最新記事は数十件トップに並びますが、ある程度以上古いものは表示されません。
  - 過去記事に飛ぶためのカレンダーはないですが、Front MattersにリストアップしたTagを元にインデックスされるので、
    [Tags](https://utriage.net/tags)ページからキーワードごとに飛べます。
    - 逆に言うとTagがついていない記事はpermalinkを知らないと埋もれます。
- Lightboxを使った画像ポップアップ表示・スライドショーに対応しています。
- WoWDBのリンクツールチップに対応しています。Wowheadでもいいんですが、微妙にスタイル崩れてたので。
- なんのこっちゃわからないけど記事を書きたいメンバの方は、適当なテキスト形式で書いた記事を送ってください。整形して載せます。

## How To

- Node.js (v24以降のLTS、`.node-version` 参照)
  - `mise install` 等
- 開発サーバー起動:
  - `npm run dev` -> http://127.0.0.1:4000
- ビルド:
  - `npm run build` -> `dist/` に静的サイト生成
- 型チェック:
  - `npm run check`

## Remarks

- [Astro](https://astro.build/)
- [Halve](https://github.com/TaylanTatli/Halve)
- [Noto Sans CJK JP](https://www.google.com/get/noto/#sans-jpan)

