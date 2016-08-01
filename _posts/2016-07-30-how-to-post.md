---
title:   "Markdownでギルドブログに記事を書く"
excerpt: "書いてみたい人がいるかもしれないので、ほんとにさわりだけ説明。"
author:  Gadagarr
image:   "images/dalaran.jpg"
tag:
- blog
- markdown
---

## Markdown

Markdownはいくつかの記号を使ってHTMLよりもシンプルに構造化文書が書ける仕組みです。

基本は以下:

````markdown

# h1

## h2

### h3

#### h4
ヘッダを付けなければ通常の段落扱い。

空行を挟むと段落。
間に挟まないと同じ段落の中のまま。

backtickを使うと`<pre>`タグつき。
[こうするとリンク](http://www.utriage.net)。

- リスト
- インデント
    - 子要素

1. 数字付きリスト
2. インデント
    1. 子要素

![こうすると画像](/images/blackrock-mountain.jpg)

```
backtick3つのブロックで囲むとコード表記。
```

次のように書くと引用

> 引用されている文章
````

上記の内容をそのまま書くと以下のようになります。

---

# h1

## h2

### h3

#### h4
ヘッダを付けなければ通常の段落扱い。

空行を挟むと段落。
間に挟まないと同じ段落の中のまま。

backtickを使うと`<pre>`タグつき。
[こうするとリンク](http://www.utriage.net)。

- リスト
- インデント
    - 子要素

1. 数字付きリスト
2. インデント
    1. 子要素

![こうすると画像](/images/blackrock-mountain.jpg)

```
backtick3つのブロックで囲むとコード表記。
```

次のように書くと引用

> 引用されている文章

---

## 詳細
面倒なのでどうしても詳しく知りたい人は[ソースコード](https://github.com/ymtszw/utriage)見て下さい！

[kramdown](http://kramdown.gettalong.org/)というレンダリングエンジンを使っており、独自記法が使えるはずです。
[Lightbox](http://lokeshdhakar.com/projects/lightbox2/)を導入してあるので、ちょっと面倒ですが画像ポップアップやスライドショーも使えます。

こんな感じ。

{% capture images %}
	/images/dalaran.jpg
	/images/gate-of-stormwind.jpg
	/images/blackrock-mountain.jpg
{% endcapture %}
{% include gallery.html images=images caption="Screenshots" cols=3 %}
