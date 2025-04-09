# EdBlocks/EdScratch JA_kanji [![Health Check](https://github.com/bonzeboy/edscratchja_kanji/actions/workflows/health-check.yml/badge.svg)](https://github.com/bonzeboy/edscratchja_kanji/actions/workflows/health-check.yml) ![GitHub Release](https://img.shields.io/github/v/release/bonzeboy/edscratchja_kanji)

![Screenshot](./images/screenshot.png)

## 概要

[EdBlocks](https://www.edblocksapp.com/v3/)/[EdScratch](https://www.edscratchapp.com/v3/) V3を日本語化するChrome拡張機能のリポジトリです。\
Scratchと相互に移行しやすいように、Scratchに近い翻訳にしています。

## インストール方法

本拡張機能はChromeウェブストアやソースコードからインストールすることができます。\
通常はChromeウェブストアからインストールしてください。\
不具合対策版などをChromeウェブストアでの公開前に使用したい場合は、ソースコードからインストールしてください。

### Chromeウェブストアからインストールする（推奨）

1. [Chromeウェブストア](https://chromewebstore.google.com/detail/lblflnfgopjnhoblchpddniebailongb)で「Chromeに追加」ボタンをクリックして本拡張機能を追加します。

### ソースコードからインストールする

1. [Releases](https://github.com/bonzeboy/edscratchja_kanji/releases)からインストールしたいソースコード（zip）をダウンロードして展開します。
2. 展開したフォルダを、[こちら](https://support.google.com/chrome/a/answer/2714278?hl=JA)の「手順 2: アプリや拡張機能をテストする」に従い、パッケージ化されていない拡張機能として読み込みます。

## 使用方法

本拡張機能をインストールしてから[EdBlocks](https://www.edblocksapp.com/v3/)/[EdScratch](https://www.edscratchapp.com/v3/) V3を開いてください。

## トラブルシューティング

### [EdBlocks](https://www.edblocksapp.com/v3/)/[EdScratch](https://www.edscratchapp.com/v3/)が正常に動作しない

以下のバッジがpassingでない場合は、正常に動作しない可能性があります。
本拡張機能を一時的に無効化し、passingとなるバージョンがリリースされたら最新版に更新してください。

[![Health Check](https://github.com/bonzeboy/edscratchja_kanji/actions/workflows/health-check.yml/badge.svg)](https://github.com/bonzeboy/edscratchja_kanji/actions/workflows/health-check.yml)

### [EdBlocks](https://www.edblocksapp.com/v3/)/[EdScratch](https://www.edscratchapp.com/v3/)の一部が翻訳されない

以下については英語のままになっています。これら以外に翻訳されていない箇所があった場合は、翻訳漏れの可能性がありますので、[Issue](https://github.com/bonzeboy/edscratchja_kanji/issues)にてご報告をお願いいたします。
- EdBlocks V3
   - 「メニュー」以下の項目のダイアログ
   - 「保存」のダイアログ
   - 「Edison V3」以下の項目のダイアログ
   - デフォルトのファイル名（Untitled Program）
- EdScratch V3
   - 「メニュー」＞「ファームウェアを更新する」のダイアログ
   - 「メニュー」＞「診断する」のダイアログ
   - 「メニュー」＞「EdScratchについて」のダイアログ
   - 「メニュー」＞「利用規約」のページ
   - 「Edison V3」＞「自分のEdisonのバージョンを確認する」のダイアログ
   - 「変数」＞「変数を管理する」で変数を削除後の操作ボタン
   - デフォルトのファイル名（Untitled Program）
