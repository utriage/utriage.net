---
name: write-post
description: >-
  Assists in writing, authoring, and publishing new blog posts for the Ultimate Triage (utriage.net) website.
  Use when the user wants to write a new post, drafts a raid log/progress article, adds screenshots, or asks to publish new content.
---

# Ultimate Triage 記事執筆スキル (`write-post`)

World of Warcraft ギルド「Ultimate Triage」ウェブサイト（Astro + TypeScript）の新規記事作成・推敲・画像配置・公開支援を行うスキルです。

## 1. 記事作成の基本仕様

### ファイルの配置と命名
- **パス**: `_posts/YYYY-MM-DD-<slug>.md`
- **日付**: 記事の日付（指定がなければ当日、過去のログ等の場合はその日付）
- **Slug**: 英語小文字・ハイフン区切り（例: `2024-11-30-tww-season-one.md`, `2026-02-16-midnight-is-nigh.md`）

### Frontmatter 仕様 (`src/content.config.ts` で検証)
```yaml
---
title: "記事タイトル"
excerpt: "記事の概要・サブタイトル（記事一覧ページの見出し下部に表示されるため推奨）"
author: Gada   # 通常は Gada（指定があればその名前）
image: /images/xxxx.jpg   # 左側大枠のヒーロー背景画像（未指定ならデフォルト画像）
tag:
  - blog
  - <tag-name> # 小文字、必要に応じて複数（例: tww, raid, legion, salvaged など）
---
```

### 文体とトーン（UTスタイル）
- 管理者・筆者 **Gada** a.k.a. **ymtszw** の軽快で親しみやすい語り口
- WoW用語を自然に交えた表現（Try, Wipe, Farm, Clear, P1/P2, Alt, M+, BoE, GBank など）
- 記事の冒頭は `## 見出し`（h2）から開始する

---

## 2. メディア・埋め込みタグの記法

### 単一画像（Lightbox拡大対応）
```liquid
{% include image src="/images/screenshot_name.jpg" %}
```
- 画像ファイルは `images/` 直下に配置します。
- ユーザーからチャットでアップロードされた画像は、適切な英名（例: `heroic_queen_ansurek.jpg`）で `images/` に保存します。
- 画像直後にキャプション文字を添えることも可能です（例: `{% include image src="/images/xxx.jpg" %}ボスの部屋`）。

### ギャラリー表示（2列または3列）
複数の画像を横並びで並べる場合は `gallery.html` を使用します。
```liquid
{% capture images %}
/images/photo1.jpg
/images/photo2.jpg
{% endcapture %}
{% include gallery.html images=images caption="記念撮影" cols=2 %}
```
- `cols=2`（2列・半幅）または `cols=3`（3列・1/3幅）

### YouTube 動画埋め込み（レスポンシブ対応）
```liquid
{% include youtube_embed.html src="https://www.youtube.com/watch?v=VIDEO_ID" %}
```

### 外部リンク（OGP プレビューカード）
```liquid
{% include link_with_preview.html href="https://example.com/article" %}
```

---

## 3. 執筆・公開ワークフロー手順

1. **素材の受領と配置**:
   - ユーザーから渡されたスクリーンショット画像がある場合、`images/` 配下に保存する。
   - ユーザーからの箇条書き・メモ・URLなどの素材をもとに、記事構成を組み立てる。
2. **Markdown ファイルの作成**:
   - `_posts/YYYY-MM-DD-<slug>.md` を作成。
   - Frontmatter（タイトル、抜粋、タグ、ヒーロー画像）と本文を執筆。
3. **検証**:
   - `npm run check` を実行し、Astro Content Collections の型チェック・スキーマバリデーションが通ることを確認。
4. **プレビュー提示**:
   - ローカル開発サーバー（`http://localhost:4000/<slug>`）のURLをユーザーに提示し、仕上がりを確認してもらう。
5. **推敲・コミット・プッシュ**:
   - ユーザーのフィードバックに応じて本文や画像を調整。
   - ユーザーの確認（`pushして` 等）を得た後、Git commit ＆ push を実行して Cloudflare Pages にデプロイを反映する。
