---
title:   その他のLegionの変更点で気になるやつ
excerpt: 前の記事で書かなかったものを含め、いくつか追加でピックアップ
author:  Gadagarr
#image:   "images/dalaran.jpg" # header image
tag:
- blog
- raid
- legion
---

## デイリー・ウィークリーリセットシステムの単純化

デイリー・ウィークリークエスト、及びウィークリーRaidリセットのシステムは、
サーバーのRegionごとに単一の時刻に統合された。

[Legion Pre-Path - Grouping and Reset Timer Changes](http://us.battle.net/forums/en/wow/topic/20745655899)


> Additionally, reset timers for recurring in-game activities such as daily/weekly quests and raid/dungeon lockouts will be updated to **a single unified lockout time of 15:00:00 UTC (8 a.m. PDT / 1 a.m. AEST) for all North American, Latin American, and Oceanic realms.** This change will make it more convenient for players, as you will only need to keep track of one reset time. Weekly resets will occur on Tuesdays (early Wednesday mornings for Oceanic realms) at this time.

多くの日本人ギルドが属しているアメリカ大陸＋オセアニアRegionの統合リセット時刻はUTC(GMT)15:00:00 = **JST24:00:00**、つまり日付が変わるのと同時になった。

非常にわかりやすくなったというのは便利な半面、深夜帯前後でプレイしているJPプレイヤーにとっては微妙に面倒で、0時になってデイリーが更新されたので全Altやってから寝る、なんてことをやろうとすると1時～2時になってしまいそうだ。もしくは家に帰ってから日付が変わるまでにその日の分を終わらせる、というリズムになる。

幸い、今回のメインとなるフィールドコンテンツ・[World Quest](http://us.battle.net/forums/en/wow/topic/20743204177)は、必ずしもデイリーローテーションするわけではない。むしろWoDのGarrison Follower Missionに近く、Questそれぞれによって3時間で切り替わったり、1週間ずっと(クリアするまで)有効だったり、とリズムが異なっている。これによってどのタイミングでやろうとしても常に何がしかやることがあり、かつ重要なクエストは取りこぼすことがなく、小規模な(切り替わりの早い)クエストは全て追いかけることなく無視してもいい、と自由度が増している。

## Personal Lootの改善

[6/15のLegion Q&A](http://www.wowhead.com/news=253605/6-15-weekly-legion-developer-q-a-assistant-game-director-ion-watcher-hazzikostas)で発表された。

> - Players enjoy trading loot around, and a social component. In Legion, if you get an item from a boss with personal loot on, that isn't an upgrade for you in item level terms, it will be tradeable.
> - This includes items that aren't duplicates--if they don't seem like an upgrade, you can trade it.

Personal Lootモードで手に入れたアイテムは、以下の条件を満たすとKill時のメンバーとの間でトレード可能になった：

- すでにそのアイテムを手に入れたことがある
- Item levelが既に装備しているアイテムと同じか、小さい

この変更はRaid運営的にかなり重要である。というのも、もともとPersonal Lootには**「装備できないものはドロップしない」**という大きな利点があったからだ。

ドロップしたが、該当クラスがいなかったり、装備できる人が既にそのアイテムを持っていたりするアイテムは基本的にVendorかDE行きになる。1週間に1ボスから数個しかアイテムはドロップしない(25man Firelandなど、ドロップが多いケースでも最大で8個とか？)。そのうち1～2個でも無駄になると、GearUpに与える影響は大きい。
特にHunterとShamanしか該当クラスのないMail装備や、Hunter以外は装備できないBow/Crossbow/Gunは悩みの種だった。

今回の変更で、「その日のRaidにMail WearerがいないのにMailが出た」「HunterがいないのにGunが出た」といった絶望的な状況は、少なくともPersonal Lootなら発生しない保証を得られることになる。

~20man以上で全Armorクラスが満遍なくいるRaidなら、従来通りMLを採用して分配の最適化を行う利点もありそうだが、それより少ないなら or 明らかに無駄になる装備が多い構成の日なら、Personal Lootを使用する利点のほうが大きいと考えている。[^1]

[^1]: UTも現在メンバ調整中ですが、Armorの偏りが結構ありそうなので、最初からPersonal Lootの採用を考えています。


## 小話：ドイツ語版のDemon Hunterは……

{% include link_with_preview.html href="https://worldofwarcraft.com/de-de/news/20231211/ursprunge-illidari-ein-blick-auf-den-damonenjager" %}

**デモーネンイェーガー!!**
