<p align="center">
  <a href="https://github.com/liihuu/KLineChart">
    <img style="width: 160px" src="https://cdn.nlark.com/yuque/0/2022/png/8403091/1646572140298-assets/web-upload/16d5552a-3a7d-43a0-a5cb-079274af1df6.png"/>
  </a>
</p>
<h1 align="center" style="margin-top: -16px">KLineChart</h1>
<p align="center">💹📈Lightweight k-line chart built with html5 canvas.</p>
<div align="center">

[![Version](https://badgen.net/npm/v/klinecharts)](https://www.npmjs.com/package/klinecharts)
[![Build Status](https://travis-ci.org/liihuu/KLineChart.svg?branch=master)](https://travis-ci.org/liihuu/KLineChart)
[![Size](https://badgen.net/bundlephobia/minzip/klinecharts@latest)](https://bundlephobia.com/result?p=klinecharts@latest)
[![Typescript](https://badgen.net/npm/types/klinecharts)](types/index.d.ts)
[![LICENSE](https://badgen.net/github/license/liihuu/KLineChart)](LICENSE)

</div>

[![](https://cdn.nlark.com/yuque/0/2022/png/8403091/1646569986673-assets/web-upload/56a9e87d-8028-4875-97dd-bcfda0eb131a.png)](https://github.com/liihuu/KLineChart)

## 📦 Install
### Using npm
```bash
npm install klinecharts --save
```

### Using yarn
```bash
yarn add klinecharts
```

### CDNs
#### [unpkg](https://unpkg.com)
https://unpkg.com/klinecharts/dist/klinecharts.min.js

#### [jsDelivr](https://cdn.jsdelivr.net)
https://cdn.jsdelivr.net/npm/klinecharts/dist/klinecharts.min.js

## 📄 Docs
+ [中文](https://www.klinecharts.com/zh-CN)
+ [English](https://www.klinecharts.com)

## 🛠️ Build
Execute command in root directory. [Node.js](https://nodejs.org) is required.
```bash
# Install the dependencies from NPM:
npm install

# Build files:
npm run build
```
The generated files are in the dist folder.

## 🔗 Links
+ [Sample page](https://www.klinecharts.com/sample)
+ [Sample code](https://github.com/liihuu/KLineChartSample)

## ©️ License
KLineChart is available under the Apache License V2.

## ❤️ Sponsor Author
### PayPal
+ [paypal](https://paypal.me/liihuu)

### Digital assets
+ BTC: [bc1qnwzukszzk5xfk0zs3sr8etzgctgnrtqts43jzp3khe6gm7xazprsp4y6n3]()
+ ETH: [0xd2c3911654db861e0a2e17415e11a209c1fc3594]()
+ USDT-ERC20: [0xd2c3911654db861e0a2e17415e11a209c1fc3594]()
+ USDT-Omni: [3DSXSbTbMwXumaaqMySVPgedBP9rGhpnfQ]()
+ USDT-TRC20: [THJpTQmFGaVm12KE1Jzc5mLXiApP6qXMCi]()


### 合并代码

➜  KLineChart git:(gyc) git pull --rebase
➜  KLineChart git:(gyc) git checkout master
➜  KLineChart git:(master) git pull --rebase
➜  KLineChart git:(master) git checkout gyc
➜  KLineChart git:(gyc) git merge master --squash
冲突（修改/删除）：config/rollup.config.js 在 master 中被删除，在 HEAD 中被修改。config/rollup.config.js 的 HEAD 版本在树中被保留。
自动合并 src/options/styleOptions.js
冲突（内容）：合并冲突于 src/options/styleOptions.js
自动合并 src/view/TechnicalIndicatorView.js
挤压提交 -- 未更新 HEAD
自动合并失败，修正冲突然后提交修正的结果。
➜  KLineChart git:(gyc) ✗ git rm -r --force config
rm 'config/rollup.config.js'
rm 'config/rollup.config.js
➜  KLineChart git:(gyc) ✗ gst
位于分支 gyc
您的分支与上游分支 'origin/gyc' 一致。

要提交的变更：
  （使用 "git restore --staged <文件>..." 以取消暂存）
	修改：     .eslintignore
	...
  （使用 "git restore --staged <文件>..." 以取消暂存）
  （使用 "git add <文件>..." 标记解决方案）
	双方修改：   src/options/styleOptions.js

➜  KLineChart git:(gyc) ✗ git add src/options/styleOptions.js
➜  KLineChart git:(gyc) ✗ gcsm 'Merge from master'
➜  KLineChart git:(gyc) ggpush
➜  KLineChart git:(gyc) npm run build



