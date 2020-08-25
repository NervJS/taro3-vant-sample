# taro3-vant-sample

> Taro3 中使用 vant-weapp 的示例 React 版本

## 需要关注的点

### 引用 vant 组件

引用 vant 组件需要在页面的 config 文件中进行配置，如

```js
export default {
  navigationBarTitleText: '首页',
  usingComponents: {
    'van-button': '../../components/vant-weapp/dist/button/index'
  }
}
```

值得注意的是，无论是在页面还是组件中引用 vant 组件，都是在页面的 config 中进行配置引用。

### 配置 copy 小程序原生文件

vant 组件中包含一些小程序原生文件的依赖，目前 Taro 没有对这些依赖进行分析，需要配置 copy 移动到 dist 目录中，例如需要 copy wxs 和样式文件，部分配置如下

```js
// config/index.js

const config = {
  // ...
  copy: {
    patterns: [
      { from: 'src/components/vant-weapp/dist/wxs', to: 'dist/components/vant-weapp/dist/wxs' },
      { from: 'src/components/vant-weapp/dist/common/style', to: 'dist/components/vant-weapp/dist/common/style' },
      { from: 'src/components/vant-weapp/dist/common/index.wxss', to: 'dist/components/vant-weapp/dist/common/index.wxss' },
      { from: 'src/components/vant-weapp/dist/calendar/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/index.wxs' },
      { from: 'src/components/vant-weapp/dist/calendar/utils.wxs', to: 'dist/components/vant-weapp/dist/calendar/utils.wxs' },
      { from: 'src/components/vant-weapp/dist/calendar/calendar.wxml', to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml' },
      { from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs', to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs' },
    ],
    options: {
    }
  },
}
```

### 配置忽略 vant 的样式尺寸转换

如果直接在 Taro 中使用 vant 组件，会发现样式偏小的情况，这是因为 Taro 默认将 vant 的样式尺寸从 px 转换为了 rpx，可以通过配置 [selectorblacklist](https://nervjs.github.io/taro/docs/size#selectorblacklist) 来禁止转换。

```js
// config/index.js
const config = {
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
        }
      }
    }
  },
}
```
