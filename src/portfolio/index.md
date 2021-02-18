# Portfolio

---
## 犬の飼育について

<div class="img-single">
    <img src="../.vuepress/public/mau01.png">
</div>
<div class="img-flex">
    <img src="../.vuepress/public/mau02.png">
    <img src="../.vuepress/public/mau03.png">
</div>


##### 公開日 -

#### 担当
デザイン・コーディング

#### ページの意図
大学の課題で制作したものです。身近なことをテーマに5ページ程度のサイトを作るという内容で、
実際に一緒に暮らしているボーダーコリー犬について、飼っている人にしかわからないような視点から情報をまとめました。


#### 技術面
実際に自分で撮影した画像を使用。
また、左カラムに全ページ共通ナビを配置して各カテゴリーにアクセス性を向上を図りました。こちらも`js` でコンポーネント化しており、一括で全ページの共通ナビを編集することができます。


<div class="img-single">
    <img src="../.vuepress/public/mau04.png">
</div>

#### ロゴ
ロゴはsvgで自作しており、ソースコード内で色を変更したり、解像度を落とさずに拡大・縮小することができます。



---
## コーポレートサイト(ダミー)

<div class="img-single">
    <img src="../.vuepress/public/ffc3.png">
</div>
<div class="img-flex">
    <img src="../.vuepress/public/ffc2.png">
</div>

<div class="btn-wrapper">
    <a class="btn" href="https://y-t-zj4rb.github.io/fictious_foods_company/" target="_blank">DEMOページ</a>
</div>

##### 公開日 2020.10.25

#### 担当
デザイン・コーディング

#### ページの意図
架空のコーポレートサイトです。飲食業界をターゲットとしたBtoBのサービスを主とする企業という設定です。
顧客によって多様な要望・ケースが発生する想定の為、入口からハードルを下げ、スッキリとしたシンプルなデザインを意識しました。

[DEMOページ](https://y-t-zj4rb.github.io/fictious_foods_company/)

#### 技術面

APIを利用したヘッドレスCMSを組み込んでいる為、サイトのオーナーや管理者が手軽に『事例』や『お知らせ』部分を更新できます。

<div class="img-single">
    <img src="../.vuepress/public/ffc4.png">
</div>

メンテナンス性向上のため、共通部分のヘッダーやナビ部分などは`Vue.js`を用いてコンポーネント化してます。
変更が生じても1か所を修正するだけで済み、全ページを修正する必要がありません。



---

## 情報ページ

<div class="img-flex">
    <img src="../.vuepress/public/ganbarou3.png" height="550">
    <img src="../.vuepress/public/ganbarou4.png" height="550">
</div>

##### 公開日 2020.5.1

#### 担当
デザイン・コーディング

#### ページの意図
同人誌の販売促進ページ。自社通販TOPページと比べると「同人」というカテゴリにフォーカスして、商品やイベント情報等をまとめています。ページの導線的にスマホで見られることを想定している為、アプリのような操作感を意識しました。

#### 技術面
ニュースアプリのようなフリックでの遷移を実現するため`swiper.js`というライブラリを使用しています。
手動での更新を減らすため、日付ごとの新着作品ページへのリンクはjavascriptで自動で取得するようにしています。(画像一枚目 上部)


---
## LP

<div class="img-single"><img src="../.vuepress/public/kedama2.png" height="500"></div>
<div class="img-single"><img src="../.vuepress/public/kedama1.png" height="500"></div>

##### 公開日 2020.7.21

#### 担当
デザイン・コーディング

#### ページの意図
某作家のオリジナルキャラクターがフィギュア化した際の特集ページです。メインであるフィギュアを推しつつも、これまでに作家が販売していた商品(本やタペストリーなど)も紹介できる構成です。
スクロール時、PC表示左側のフィギュア紹介部分は固定、右側のみ下に流れていきます。


<div class="img-flex">
    <img src="../.vuepress/public/kedama3.png" height="550">
    <img src="../.vuepress/public/kedama4.png" height="550">
</div>

#### 技術面
レスポンシブ対応です。
フィギュアはもちろん、書籍の試し読みもできるようポップアップのスライドを用意しています。


---
## アーカイブ

<div class="img-flex">
    <img src="../.vuepress/public/sns1.png" height="550">
    <img src="../.vuepress/public/sns2.png" height="550">
</div>

##### 公開日 2020.5.20

#### 担当
デザイン・コーディング

#### ページの意図
作家の新刊特集やインタビュー等を定期的に取り組んでいた時期がありました。それらのバックナンバーページです。
Twitterで活動している作家の特集だったため色遣いはそのあたりを意識しました。

#### 技術面
スクロール時の視差効果やテキストの`CSS`アニメーションなど遊び心を取り入れています。


---
## 通販ページ内

<div class="img-flex">
    <img src="../.vuepress/public/summer3.png" height="550">
    <img src="../.vuepress/public/summer4.png" height="550">
</div>

##### 公開日 2020.7.1

#### 担当
スマホ版/ヘッダー部のみ　デザイン・コーディング

#### ページの意図
割引セールページのカスタマイズです。ファーストビュー部分の装飾とカテゴリメニューの実装で、ユーザーが目的の商品にたどり着きやすくなるような導線を作りました。
ナビや商品ブロックなどは通常の通販ページと同様です。

#### 技術面
CMSの仕様で`script`タグの使用できない範囲があるため、`CSS`のみで折り畳みメニューやポップアップ等を実装しました。
またユーザーに商品の入れ替わりを体験してもらえるよう、アクセスの度にランダムで切り替わるスライドバナーを作成しました。


---
## 情報サイト

::: warning ※
クライアント非公開のため多くの情報を伏せています。
:::

<div class="img-single"><img src="../.vuepress/public/site1.png" height="600"></div>



##### 公開日 2020.9.~


#### 担当
デザイン・コーディング・運用

#### ページの意図
情報まとめサイトを1から立ち上げました。ブログのような形式で編集者がコンテンツを投稿して運用します。

#### 技術面
APIの取得、フィルタリング・ソート機能等は`Vue.js`を使用しています。

<div class="img-single"><img src="../.vuepress/public/site2.png" height="400"></div>


<div class="img-flex">
    <img src="../.vuepress/public/site3.png" height="550">
    <img src="../.vuepress/public/site4.png" height="550">
</div>


レスポンシブ対応



<div class="img-single"><img src="../.vuepress/public/microcms.png" height="400"></div>

ヘッドレスCMS(microCMS)を採用しており、部分的にCMSとして更新作業が出来ます。そのためコーディングの知識が無い方でもブログのように更新が行えます。



::: tip SEOについて
とある関連キーワード(1語)のGoogle検索結果において1番目に表示されます！
:::