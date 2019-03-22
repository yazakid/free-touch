# free-touch

[Taro](https://github.com/NervJS/taro) 多端统一实例 - 网易严选（小程序 + H5 + React Native）。

本demo基于 taro-yanxuan 在 Taro 多端统一开发方面的实践经验，以网易严选小程序为载体，旨在探讨如何以正确的方式使用 Taro 进行多端开发，具体可查看文章 [Taro 多端开发的正确姿势：打造三端统一的网易严选（小程序、H5、React Native）]

## 本地运行

本项目直接调用的网易严选接口，若要体验登录、购物车功能，请使用网易邮箱账号登录。

``` bash
# 安装依赖，或 npm i
yarn

# 运行小程序（微信 weapp，支付宝 alipay）
npm run dev:weapp

# 运行 H5
npm run dev:h5

# 运行 React Native，有如下注意事项：
# 1. 基于 Expo，运行说明：https://nervjs.github.io/taro/docs/react-native.html
# 2. 当前只适配了 375px 屏幕，若用 iOS 模拟器打开的不是 iPhone 6/7/8，可点击顶部菜单 Hardware -> iOS xx 切换设备
npm run dev:rn
```

## 项目说明

本项目的主要目的是阐述多端开发思路、技巧，力求直观、方便阅读，因此是在 `taro init` 的基础上开发的，没有去做太多封装。诸如是用 Redux 还是 Mobx，网络请求怎么封装比较完美并不是本项目的重点。

注释 `// TODO`（Taro 还未支持的）、`// NOTE`（开发技巧、注意事项）注明了。


## License

MIT

## 更新日志

changelog.md

## 开发者注意

becareful.md
