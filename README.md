# osx-ble-sandbox
OS X で BLEを発信・受信し続けるスクリプト。

環境:

- OS X El Capitan(10.11.3)
- Node JS
- Gulp
- Babel ES2015

```
# 必要な環境をインストール
brew install npm node
npm install gulp-cli -g
# npm アップデート
npm install
# 実行(必要ならsrcからビルド)
gulp run
# 開発用のコマンド。 src/ を監視・トランスパイルして dist/ にJS生成する。
gulp
```

