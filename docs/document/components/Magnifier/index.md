<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-09 16:17:05
 * @LastEditTime: 2022-03-09 21:05:47
 * @FilePath: \Lamb-UI for Docs\docs\document\components\Magnifier\index.md
-->
<br/>
<br/>

# Stars 放大镜
图片放大镜组件

<br/>
<br/>

### 基础用法
1. 图片源：`src`
2. 放大倍数：`times`
3. 图片宽度：`imgWidth`
4. 图片长度：`imgHeight`

:::demo  如果是在线图片，可以直接将地址传给src，若为本地图片，则需要使用 `require` 包裹图片路径

```vue
<template>
  <lb-magnifier 
        src="https://s3.bmp.ovh/imgs/2022/03/80dcf1f081b7b7f8.png"
        :times="1.5"
        :imgWidth="800"
        :imgHeight="420"
  ></lb-magnifier>
</template>
```
:::

<br>
<br>


### 调整放大镜大小与形状
1. 设置放大镜宽度：`magnifierWidth`
2. 设置放大镜长度：`magnifierHeight`
3. 设置放大镜边框：`magnifierBorder`
4. 将放大镜设为圆形：`type="inCircle"`

:::demo 

```vue
<template>
  <lb-magnifier 
        src="https://s3.bmp.ovh/imgs/2022/03/80dcf1f081b7b7f8.png"
        type="inCircle"
        :times="1.2"
        :imgWidth="800"
        :imgHeight="420"
        :magnifierWidth="250"
        :magnifierHeight="250"
        magnifierBorder="8px solid #314154"
  ></lb-magnifier>
</template>
```
:::

<br>
<br>

### 外视图放大镜
1. 设置外视图放大镜：`type="outRect"`
2. 放大镜背景颜色：`outRectBgc`  仅 `outRect` 模式下有效
3. 外视图宽度：`viewWidth`  仅 `outRect` 模式下有效
4. 外视图长度：`viewHeight` 仅 `outRect` 模式下有效


:::demo 

```vue
<template>
  <lb-magnifier 
        src="https://img10.360buyimg.com//n0/jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg"
        type="outRect"
        :times="2.5"
        :imgWidth="400"
        :imgHeight="400"
        :viewWidth="400"
        :viewHeight="400"
  ></lb-magnifier>
</template>
```
:::

<br/>
<br/>

# Attributes

<br/>

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


<br/>
<br/>
