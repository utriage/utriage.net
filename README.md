# Ultimate Triage Guild Site

World of Warcraftギルド[**Ultimate Triage**](http://www.utriage.net)のウェブサイトソースコードです。

- Github Pagesを使って公開しています(タダ！)。
- 静的サイトジェネレータ[Jekyll](http://jekyllrb.com/)と、
  少し手を加えた[Halve theme](https://github.com/TaylanTatli/Halve)を使用しています。
- 管理者は[ymtszw](https://github.com/ymtszw) a.k.a. [Gadagarr](https://twitter.com/gada_twt)です。

## Static Site with Jekyll

- WordPress等のCMSがイマイチ好きくないので、markdownで書けて、
  ビルドしてしまえば読み込みも高速な静的サイトジェネレータを使うことにしました。
- GithubとJekyllの仕組みを知っている方は、markdownで書いた記事をPRしてもらえれば、mergeします。
    - よくあるFront MattersのついたMarkdownです。[_posts/](./_posts)ディレクトリの既存記事を参考にしてください。
        - `author`という筆者を表示するcustom variableを使っています。
    - 最新記事は数十件トップに並びますが、ある程度以上古いものは表示されません。
    - 過去記事に飛ぶためのカレンダーはないですが、Front MattersにリストアップしたTagを元にインデックスされるので、
      [Tags](http://www.utriage.net/tags)ページからキーワードごとに飛べます。
        - 逆に言うとTagがついていない記事はpermalinkを知らないと埋もれます。
- Lightboxを使った画像ポップアップ表示・スライドショーに対応しています。
- WoWDBのリンクツールチップに対応しています。Wowheadでもいいんですが、微妙にスタイル崩れてたので。
- なんのこっちゃわからないけど記事を書きたいメンバの方は、適当なテキスト形式で書いた記事を送ってください。整形して載せます。

## Running locally (Unix)

- RubyとBundlerを好きな方法でインストールして`$ bundle install`
- `_config_dev.yml`というファイルを以下の内容で用意。

  ```yaml
  url: localhost:4000
  ```

- `$ ./dev_start`
    - ファイル変更時に自動で再ビルド
- `http://localhost:4000`をブラウザで開く

## Running locally (Windows)

- [RubyInstaller](http://rubyinstaller.org/)でインストール(2.3.x推奨)。
- [DevKit](http://rubyinstaller.org/add-ons/devkit/)もインストール。
- Bundlerをインストールして`> bundle install`
    - SSL関連のエラーが出たら[これ](http://qiita.com/whiteleaf7@github/items/4504b208ad2e
    - ec1f9357)とか、
      [これ](http://qiita.com/shimoju/items/394818b4989b94680aaf)とかに従う。
- `_config_dev.yml`を上記と同じように用意。
- `> win_dev_start.bat`
- `http://localhost:4000`をブラウザで開く

## Remarks
- [Jekyll](http://jekyllrb.com/)
- [Halve](https://github.com/TaylanTatli/Halve)
- [Noto Sans CJK JP](https://www.google.com/get/noto/#sans-jpan)
