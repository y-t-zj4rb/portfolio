# Portfolio

---

## 1.情報ページ

<div style="display:flex;justify-content:space-between;">
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
手動での更新を減らすため、日付ごとの新着作品ページへのリンクは自動で取得するようにしています。(画像一枚目 上部)


---
## 2.LP

<div style="text-align:center;margin:20px 0;border:1px solid #ddd;"><img src="../.vuepress/public/kedama2.png" height="500"></div>
<div style="text-align:center;margin:20px 0;border:1px solid #ddd;"><img src="../.vuepress/public/kedama1.png" height="500"></div>

##### 公開日 2020.7.21

#### 担当
デザイン・コーディング

#### ページの意図
某作家のオリジナルキャラクターがフィギュア化した際の特集ページです。メインであるフィギュアを推しつつも、これまでに作家が販売していた商品(本やタペストリーなど)も紹介できる構成です。
スクロール時、PC表示左側のフィギュア紹介部分は固定、右側のみ下に流れていきます。


<div style="display:flex;justify-content:space-between;">
    <img src="../.vuepress/public/kedama3.png" height="550">
    <img src="../.vuepress/public/kedama4.png" height="550">
</div>

#### 技術面
レスポンシブ対応です。
フィギュアはもちろん、書籍の試し読みもできるようポップアップのスライドを用意しています。


---
## 3.アーカイブ

<div style="display:flex;justify-content:space-between;">
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
## 4.通販ページ内

<div style="display:flex;justify-content:space-between;">
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
## 5.情報サイト

::: warning
クライアント非公開のため多くの情報を伏せています。
:::

<div style="text-align:center;margin:20px 0;border:1px solid #ddd;"><img src="../.vuepress/public/site1.png" height="600"></div>



##### 公開日 2020.9.~


#### 担当
デザイン・コーディング・運用

#### ページの意図
情報まとめサイトを1から立ち上げました。ブログのような形式で編集者がコンテンツを投稿して運用します。

#### 技術面
APIの取得、フィルタリング・ソート機能等は`Vue.js`を使用しています。

<div style="text-align:center;margin:20px 0;border:1px solid #ddd;"><img src="../.vuepress/public/site2.png" height="500"></div>


<div style="display:flex;justify-content:space-between;">
    <img src="../.vuepress/public/site3.png" height="550">
    <img src="../.vuepress/public/site4.png" height="550">
</div>
レスポンシブ対応


<div style="text-align:center;margin:20px 0;border:1px solid #ddd;"><img src="../.vuepress/public/microcms.png" height="400"></div>
ヘッドレスCMSを採用しており、部分的にCMSとして更新作業が出来ます。そのためコーディングの知識が無い方でもブログのように更新が行えます。