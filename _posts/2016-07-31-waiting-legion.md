---
title:   "Legion来るまでにやること"
excerpt: "記事水増しも兼ねて雑にまとめ"
author:  Gadagarr
image:   "images/legion.jpg" # header image
tag:
- blog
- patch
- legion
---

## Path 7.0.3 already live!

- Transmogシステムが大幅に改善
    - 「装備可能」で「Soulbound」になったアイテムの見た目を「覚える」
    - 一度覚えたアイテムは売ってしまってOK
    - 覚えたアイテムのリストはWardrobe(Collectionウィンドウの一番右、"Appearances"タブ)で見られる
      [![Wardrobe](/images/wardrobe.jpg)](/images/wardrobe.jpg){:data-lightbox="wardrobe"}
    - Enchant(Illusion)も同じ枠組みで変更できる
- Nameplate周りも大幅に改善
    - ターゲットのNameplateは距離関係なく表示される
    - ターゲットのNameplateは視界の境界にぶら下がり表示される
    - 重要なDebuffはデフォルトで表示される
- Professionウィンドウも改善
- Interfaceメニューが簡素化(なくなった項目もあるし、API経由でのみ変えられる項目もある)
- **遠くまで見えるようになった**
    - フィールドに出てみるとわかるが結構大きな変更。
    - Ironforgeの程近くからBastion of Twilightが見えたりする。
- **カメラの最大俯瞰距離が20ydsほど短くなった**
    - Raidするときは結構ダルいNerf。
- Spec/Talentは**Restエリアにいる限り自由に変えられる**ようになった。
    - Restエリア外で変えるためには[Inscriptionで作る消費アイテム](http://www.wowdb.com/items/141640-tome-of-the-clear-mind)が必要。
    - ちなみに上記アイテムはLv100用なので、Lv101以上になったら[こっち](http://www.wowdb.com/items/141446-tome-of-the-tranquil-mind)が必要。
- 例によってスキル・タレント変更は既に導入
    - RogのCombatスペックはOutlawスペックに変更になった
    - HntのSurvivalスペックはMeleeになった
    - LockのDemonologyスペックはデーモンを召喚するだけになり、変身は~~[DHに取られた](http://www.wowdb.com/spells/187827-metamorphosis)~~無くなった
    - 他にも色々
- **近接攻撃アニメーションが刷新**
- 8/9から**拡張前イベント＋Demon Hunter解禁**

## やること：AddOnアップデート
ついでにUIが相当改善されたので、要らなそうなのは削るチャンス。

今やっておかないと新コンテンツ来てから泥縄でやることになり、辛い。

## やること：アイテム整理・売り抜け
6.2.4まではGarrisonのMission/Naval Missionでマジで何もしなくても金が稼げたのだが、残念ながら終了してしまった。
代わりにPrimal SpiritをはじめとするProf素材が報酬になったMissionが複数ある。
Prof素材は拡張が変わると流通量が減るため高価格になることもままあるが、需要自体は減るのでしばらく売れづらくなる。
今のうちにアイテム整理を兼ねて売り抜けてしまうのもあり。

Transmogが改善されたことで、見た目用装備をBankやVoidStorageに入れておく必要は殆どなくなった。
Raid装備なら1つ数十Gで売れるので、たくさん集めている人はログインして覚えたら片っ端から売ると数千Gになる。

今までToyではなかったアイテムでToy化したものが結構あるので、右クリックして覚えていけばその分も減らせる。
複数キャラで持っている場合は2キャラ目以降片っぱしからDELETEしなくてはならず超面倒だが。。。

## やること：ローテ確認、Action bar/Macro調整
かなりのクラスで**1スペックあたりの使用可能なスキルが減っている**。
減っただけでなく、内容が変わったものも例によって多く、ローテ確認も合わせて調整が必要。

タレントのActive/Passiveの並びが今回から大胆にシャッフルされており、ActiveのTier/PassiveのTierという区別が薄れた。
Passiveを中心にしてボタンを減らすこともできるし、逆にActiveを増やすこともできるデザイン。
最適化が進むまではお好みで遊べる。

- [Icy Veinsのガイド](http://www.icy-veins.com/wow/class-guides)は各クラスだいたい更新されている
- SimulatoinCraftはまだ出ていない模様

ちなみにスペックが自由に変えられるようになった影響で、Macroの`[spec:n]`条件が使えなくなってしまった(常時`[spec:1]`と判定される)。
個人的には結構打撃だったけど、スキルが減ったのでMacro依存を減らすいい機会になった。

## やること：Mog装備・Illusion・Mount集め
別にそこまで集めてない、って人もいると思いますが、いざ欲しくなったときに集めようとしても、
拡張始まってしまっていると他にやることが多くてなかなか時間取れないというパターンはありがち。

特に7.0.3の変更によってソロ力が増したスペックであれば、MoPのRaidを楽にソロできるようになっているので、
欲しいものがある人はチャンス到来。

既にこんな報告もあり。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">Elegon Mount出たやで <a href="https://t.co/oUwIoFSKOC">pic.twitter.com/oUwIoFSKOC</a></p>&mdash; kameo (@kameo1048) <a href="https://twitter.com/kameo1048/status/757553888434061314">2016年7月25日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## やること：[Moose](http://www.wowdb.com/items/128422-reins-of-the-grove-warden)を取る
Mythic [Archimonde](http://www.wowdb.com/items/123890-felsteel-annihilator)/[Blackhand](http://www.wowdb.com/items/116660-ironhoof-destroyer)のマウントは例によってレアドロップ化しますが、
こちらは取れなくなります。Heroic Archimonde倒せば必ずもらえます。がんばってください。

UTでも1回くらいやる。。。かも？

## ~~やること：チャレモ~~
~~これもやれなくなります。武器マウント欲しい人はがんばれ。~~ もうやれなくなってました。クリアしてた人おめでとう！

## やること：(8/9以降)[Pre-launch Event](http://www.wowhead.com/guides/legion/pre-patch-demon-event)
各地にLegion invasionが発生し、ワールドマップから確認できる。

イベントは定期的に繰り返し発生し、居合わせることができればクリア時に[トークン](http://www.wowdb.com/currencies/1226-nethershard)をもらえる。
トークンはMog装備セットやペットと交換可能。

また**イベントクリア時にもらえる宝箱からは限定モデルの武器が出る**可能性あり。

加えて、Broken Shoreのイントロクエストが開始でき、Legion拡張の導入ストーリーが語られるほか、
**Alliance/Hordeで異なるモデルの武器**がもらえるようです。

## やること：時間を確保する。体調を整える。気分を高める
個人的には今回のCinematic Trailerは結構好きなのでたまに見返してます。

{% include youtube_embed.html src="https://www.youtube.com/embed/eYNCCu0y-Is" %}
