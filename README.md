# Lamb-UI



<img src="https://i.bmp.ovh/imgs/2022/03/b925d7f4dcc81c52.png" style="width:100%"></img>




## 安装

### 使用 npm 安装
```shell
npm install lamb-ui
```




### 使用 yarn 安装
```shell
yarn add lamb-ui
```

## 



## 快速上手

### 使用之前
您应该在一定程度上了解 vue 的相关概念、基础知识，这样在使用本框架的时候会更顺利



### 完整引入



在项目的入口文件（一般是 `main.js`）中配置
```js
import { createApp } from 'vue'
import App from './App.vue'

// 完整引入组件
import LambUI from 'lamb-ui'
// 完整引入组件样式
import 'lamb-ui/lib/styles/index.css'

const app = createApp(App);

// 全局注册组件
app.use(LambUI);                // 注册组件需要在 mount(挂载) 之前哦

app.mount('#app')
```





### 按需引入



#### Vue CLI
在 `Webpack工程` 中借助 `babel-plugin-import`，我们可以只引入需要的组件，以达到减小项目体积的目的

首先安装 `babel-plugin-import`
```shell
# npm
npm install babel-plugin-import -D

# yarn
yarn add babel-plugin-import -D
```



然后，在 `babel.config.js` 中配置
```js
module.exports = {
    plugins: [
        [
            'import',
            {
                libraryName: 'lamb-ui',
                libraryDirectory: 'lib',
                customStyleName: name => {
                    return `lamb-ui/lib/styles/${name}.css`;
                }
            },
            'lamb-ui'
        ]
    ]
};
```



#### Vite
在 `Vite工程` 中 借助 `vite-plugin-style-import`，我们可以只引入需要的组件，以达到减小项目体积的目的

首先安装 `vite-plugin-style-import`
```shell
# npm
npm install vite-plugin-style-import -D

# yarn
yarn add vite-plugin-style-import -D
```

然后，在 `vite.config.js` 中配置
```js
import styleImport from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'lamb-ui',
          ensureStyleFile: true,
          resolveStyle: name => {
            return `lamb-ui/lib/styles/${name}.css`;
          },
          resolveComponent: name => {
            return `lamb-ui/es/${name}`;
          }
        }
      ]
    }),
    ...
  ]
})
```






#### 引入

```js
import { createApp } from 'vue'
import App from './App.vue'
// 按需引入需要的组件
import { Button, Link } from 'lamb-ui'

const app = createApp(App);
// 全局注册组件                        // ps 也可以在单组件文件 (xxx.vue )  中 局部注册哦
app.use(Button);                 
app.use(Link);                       // 注册组件需要在 mount(挂载) 之前哦

app.mount('#app')
```

#### 备注

``` js
import { Button, Link } from 'lamb-ui'
// 通过前面对 babel.config.js 或 vite.config.js 的配置
// 这段代码在生产环境将被解析为: 

import Button from 'lamb-ui/lib/button.js'
import 'lamb-ui/lib/styles/button.css'

import Link from 'lamb-ui/lib/link.js'
import 'lamb-ui/lib/styles/link.css'
```




## 组件

### Selector
#### prop 参数

| 参数名      | 说明                           |      类型      | 是否必须 | 默认值 |
| ----------- | ------------------------------ | :------------: | :------: | :----: |
| data        | 下拉列表选项                   | Array\<object> |   必须   |   —    |
| selected    | 选项选择回调函数，接收选择的值 |    Function    |   必须   |   —    |
| placeholder | 输入框提示文本                 |     String     |   可选   | 请选择 |





### TreeMenu

#### prop

| 参数名 | 说明                           |      类型      | 是否必须 | 默认值 |
| ------ | ------------------------------ | :------------: | :------: | :----: |
| menu   | 菜单数据                       | Array\<object> |   必须   |   —    |
| choose | 点击菜单项回调，接收菜单项对象 |    Function    |   必须   |   —    |



### Link

#### prop

| 参数      | 说明            | 类型    |                   可选值                    | 是否必须 | 默认值 |
| :-------- | :-------------- | :------ | :-----------------------------------------: | :------: | :----: |
| type      | 组件类型        | String  | primary / success / warning / danger / info |   可选   |   —    |
| underline | 是否下划线      | Boolean |                      —                      |   可选   |  true  |
| disabled  | 是否禁用状态    | Boolean |                      —                      |   可选   | false  |
| href      | 原生 href 属性  | String  |                      —                      |   可选   |   —    |
| target    | 原生 target属性 | String  |       _blank / _self / _parent / _top       |   可选   | _blank |





### Button

#### prop

| 参数   | 说明         | 类型    | 可选值                                      | 是否必须 | 默认值 |
| :----- | :----------- | :------ | :------------------------------------------ | :------: | :----: |
| type   | 组件类型     | String  | primary / success / warning / danger / info |   可选   |   —    |
| round  | 是否圆角按钮 | Boolean | —                                           |   可选   | false  |
| circle | 是否圆形按钮 | Boolean | —                                           |   可选   | false  |







### Carousel

#### prop

| 参数              | 说明                   |      类型      |             可选值              | 是否必须 |     默认值      |
| :---------------- | :--------------------- | :------------: | :-----------------------------: | :------: | :-------------: |
| data              | 轮播图数据             | Array\<object> |                —                |   必须   |        —        |
| type              | 组件类型               |     String     |          fade / slide           |   可选   |      fade       |
| autoPlay          | 是否自动播放           |    Boolean     |                —                |   可选   |      true       |
| interval          | 自动播放间隔           |     Number     |                —                |   可选   |      3000       |
| target            | 原生 a标签 target 属性 |     String     | _blank / _self / _parent / _top |   可选   |     _blank      |
| hasDots           | 是否启用轮播图圆点     |    Boolean     |                —                |   可选   |      true       |
| dotSize           | 轮播图圆点大小         |     Number     |                —                |   可选   |        8        |
| dotsBgColor       | 轮播图圆点容器背景     | String 颜色值  |                —                |   可选   |   transparent   |
| dotColor          | 轮播图圆点颜色         | String 颜色值  |                —                |   可选   |     #FFFFFF     |
| curDotColor       | 轮播图激活项圆点颜色   | String 颜色值  |                —                |   可选   |    \#F56C6C     |
| hasController     | 是否启用左右控制按钮   |    Boolean     |                —                |   可选   |      true       |
| ControllerBgColor | 控制按钮背景颜色       | String 颜色值  |                —                |   可选   | rgba(0,0,0,0.3) |
| ControllerColor   | 控制按钮符号颜色       | String 颜色值  |                —                |   可选   |     #FFFFFF     |
| ControllerWidth   | 控制按钮宽度           |     Number     |                —                |   可选   |       25        |
| ControllerHeight  | 控制按钮高度           |     Number     |                —                |   可选   |       25        |
| ControllerRound   | 是否启用半圆形按钮     |    Boolean     |                —                |   可选   |      false      |



#### Events

| 事件名称   | 说明                         | 回调参数                                                                                                                             |
| ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| toggle     | 点击圆点或左右控制按钮后触发 | 共三个参数：<br />1. *type*：触发类型，clickBtn / clickDot<br />2. *oldIndex*：之前的轮播图索引<br />3. *curIndex*：当前的轮播图索引 |
| autoToggle | 自动切换轮播图后触发         | 共两个参数：<br />1. *oldIndex*：之前的轮播图索引<br />2. *curIndex*：当前的轮播图索引                                               |



### Stars

#### prop

| 参数      | 说明                     |  类型   |       可选值       | 是否必须 | 默认值  |
| :-------- | :----------------------- | :-----: | :----------------: | :------: | :-----: |
| type      | 组件类型                 | String  | default / readonly |   可选   | default |
| sum       | 星星数量                 | Number  |         —          |   可选   |    5    |
| size      | 星星大小                 | Number  |         —          |   可选   |   16    |
| colors    | 颜色映射对象             | Object  |         —          |   可选   |  null   |
| showScore | 是否展示当前分数文字     | Boolean |         —          |   可选   |  false  |
| texts     | 辅助文字映射对象         | Object  |         —          |   可选   |  null   |
| textColor | 辅助文字固定颜色         | String  |         —          |   可选   |    —    |
| score     | 固定分数，只读，用于展示 | Number  |         —          |   可选   |    0    |



#### Events

| 事件名称 | 说明       | 回调参数                   |
| -------- | ---------- | -------------------------- |
| score    | 评分后回调 | 接收一个参数，为评价的分数 |





### Magnifier

#### prop

| 参数            | 说明                                    |  类型  |           可选值            | 是否必须 |         默认值          |
| :-------------- | :-------------------------------------- | :----: | :-------------------------: | :------: | :---------------------: |
| src             | 图片地址                                | String |              —              |   必须   |            —            |
| type            | 组件类型                                | String | inRect / inCircle / outRect |   可选   |         inRect          |
| times           | 放大倍数                                | Number |              —              |   可选   |            2            |
| imgWidth        | 图片宽度                                | Number |              —              |   可选   |           600           |
| imgHeight       | 图片长度                                | Number |              —              |   可选   |           450           |
| magnifierWidth  | 放大镜宽度                              | Number |              —              |   可选   |           200           |
| magnifierHeight | 放大镜长度                              | Number |              —              |   可选   |           200           |
| magnifierBoder  | 放大镜边框，仅在 非 outRect 模式下有效  | String |              —              |   可选   |   5px solid #314154;    |
| outRectBgc      | 放大镜背景颜色，仅 outRect 模式下有效   | String |              —              |   可选   | rgba(254, 222, 79, 0.5) |
| viewWidth       | 右侧放大视图宽度，仅 outRect 模式下有效 | Number |              —              |   可选   |           450           |
| viewHeight      | 右侧放大视图长度，仅 outRect 模式下有效 | Number |              —              |   可选   |           450           |





