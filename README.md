# osx-ble-sandbox
OS X で BLEでなにかしたい


```
# 必要な環境をインストール
brew install npm node
npm install gulp-cli -g
# npm アップデート
npm install
# src/ を監視・トランスパイルして dist/ にJS生成
gulp
# 実行
( cd dist; node all.js; )
```

