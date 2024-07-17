# Ultimate Triage

- [Ultimate Triage](#ultimate-triage)
  - [Static Site with Jekyll](#static-site-with-jekyll)
  - [How To](#how-to)
  - [Remarks](#remarks)

World of Warcraftギルド[**Ultimate Triage**](http://www.utriage.net)のウェブサイトソースコードです。

- ~~Github~~ Cloudflare Pagesを使って公開しています(タダ！)。
- 静的サイトジェネレータ[Jekyll](http://jekyllrb.com/)と、
  少し手を加えた[Halve theme](https://github.com/TaylanTatli/Halve)を使用しています。
- 管理者は[ymtszw](https://github.com/ymtszw) a.k.a. [Gada](https://twitter.com/gada_twt)です。

## Static Site with Jekyll

- WordPress等のCMSがイマイチ好きくないので、markdownで書けて、
  ビルドしてしまえば読み込みも高速な静的サイトジェネレータを使うことにしました。
- GithubとJekyllの仕組みを知っている方は、markdownで書いた記事をPRしてもらえれば、mergeします。
  - よくあるFrontmatterのついたMarkdownです。[_posts/](./_posts)ディレクトリの既存記事を参考にしてください。
    - `author`という筆者を表示するcustom variableを使っています。
  - 最新記事は数十件トップに並びますが、ある程度以上古いものは表示されません。
  - 過去記事に飛ぶためのカレンダーはないですが、Front MattersにリストアップしたTagを元にインデックスされるので、
      [Tags](http://www.utriage.net/tags)ページからキーワードごとに飛べます。
    - 逆に言うとTagがついていない記事はpermalinkを知らないと埋もれます。
- Lightboxを使った画像ポップアップ表示・スライドショーに対応しています。
- WoWDBのリンクツールチップに対応しています。Wowheadでもいいんですが、微妙にスタイル崩れてたので。
- なんのこっちゃわからないけど記事を書きたいメンバの方は、適当なテキスト形式で書いた記事を送ってください。整形して載せます。

## How To

- （Linuxとかmacとか前提）
- Cloudflare Pagesの対応Rubyバージョンをインストール
  - <https://developers.cloudflare.com/pages/configuration/language-support-and-tools/>
  - 使ってるなら`mise install`（asdfでも可）
- `make`
- `make serve`
  - `--watch`が効かないWSLなどの環境なら`make serve.polling`

## Remarks

- [Jekyll](http://jekyllrb.com/)
- [Halve](https://github.com/TaylanTatli/Halve)
- [Noto Sans CJK JP](https://www.google.com/get/noto/#sans-jpan)
