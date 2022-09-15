## Flashおよびライブコーディングのファイル
Flashのデータは`/flash`ディレクトリ・ライブコーディングのデータは`/coding`ディレクトリに格納されています。  
写真は[ぱくたそ](www.pakutaso.com)の素材を利用しています。

## スライド
web_animation.pdfに書き出しています。  
または下記の手順でブラウザで確認できます。

## 環境構築
```
yarn
yarn dev

yarn build // 本番用ビルド
```

## 簡単に構造説明
- `src/App.svelte`: メインです。
  - `src/routes/*.svelte`: 各ページのコンポーネントです。  
  基本的にコンテンツは`src/constants/`の`{同一ファイル}.js`に記述して、レイアウトに関する記述がメインです。
  - `src/constants/page.js`: `svelte-spa-router`用のルーティング設定です。
  - `src/components/page/`
    - `Page.svelte`: `src/routes/*.svelte`のコンテンツを読み込んでいます
    - `FadePage.svelte`: ページ切り替えしたときにFadeの効果が付与されます。上記`Page.svelte`をwrapしています。
    - `ScalePage.svelte`: ページ切り替えしたときにScaleの効果が付与されます。上記`Page.svelte`をwrapしています。

## ページの操作方法
- 右キーで次のページへ、左キーへ前のページへ
- Enterキーでページ内でコンテンツ切り替え。ページによってはあるなしがあるので、テキトウに操作してみるとわかります

## 注意事項
- `transition`を使用する際に、`transition:fade`のようにすると、`in`と`out`の両方が適用されます。  
そうすると`unmount`される際（今回の場合、ページ切り替え時）に、`out`の`transition`が実行されます。  
なので、`in:fade`のような記述の仕方をしています。
