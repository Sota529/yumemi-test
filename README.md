## コードチェックテスト

## 技術選定

- next
- TypeScript
- Eslint
- Prettier
- husky
- axios
- swr
- highcharts
- highcharts-react-official

## 頑張ったところ

- ほとんどないだろうが、都道府県が減る or 増えることを考え描画に使うデータは全て get してくるようにした点(定数をコードで定義しない)
- 自身で実装したいと考えていたので react-hook-form 等のモジュールを使わずに、input の制御をした点
- カスタム hook を使うことで、コンポーネントは useSWR の存在を知らずに済むようにした点

## 課題

- checkbox を押すたびに、選択された都道府県の分だけ get が走るのでパフォーマンスが悪い。差分だけを get できるようにしたい
