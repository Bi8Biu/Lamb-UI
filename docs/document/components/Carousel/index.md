<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-06 18:29:58
 * @LastEditTime: 2022-03-09 16:10:06
 * @FilePath: \Lamb-UI for Docs\docs\document\components\Carousel\index.md
-->


<br/>
<br/>

# Carousel 轮播图


<br/>
<br/>


### 轮播图类型
1. 淡入淡出：`fade` **( 默认 )**
2. 左右滑动：`slide`

<br/>
<br/>

:::demo 使用 `type` 来定义轮播图的类型

```vue
<template>
    <div style="float:left;width: 430px; height: 250px">
      <lb-carousel :data="Data"></lb-carousel>
    </div>
    <div style="float:right;width: 430px; height: 250px">
      <lb-carousel :data="Data" type="slide"></lb-carousel>
    </div>
</template>

<script>
export default{
    setup(){
        const Data = [
          {
            id: "1",
            src: "https://gtms02.alicdn.com/tps/i2/TB10vPXKpXXXXacXXXXvKyzTVXX-520-280.jpg",
            href: "",
          },
          {
            id: "2",
            src: "https://img.alicdn.com/imgextra/i4/6000000004047/O1CN01Y8A3Cu1flZaFyZZft_!!6000000004047-0-alimamazszw.jpg",
            href: "",
          },
          {
            id: "3",
            src: "https://gtms03.alicdn.com/tps/i3/TB1gXd1JXXXXXapXpXXvKyzTVXX-520-280.jpg",
            href: "",
          },
          {
            id: "4",
            src: "https://img.alicdn.com/tfs/TB1wOidVWL7gK0jSZFBXXXZZpXa-520-280.jpg",
            href: "",
          },
          {
            id: "5",
            src: "https://gtms01.alicdn.com/tps/i1/TB1r4h8JXXXXXXoXXXXvKyzTVXX-520-280.jpg",
            href: "",
          },
        ];


        return {
            Data
        }
    }
}
</script>

```
:::


<br/>
<br/>


### 自动播放 与 播放间隔
1. 控制轮播图是否自动：`autoPlay` **( 默认：true )**
1. 轮播图自动播放间隔：`interval` **( 默认：3000 )**，单位 `ms`， **仅在 autoPlay 为 true 时有效**

<br/>
<br/>

:::demo 

```vue
<template>
    <div style="float:left;width: 430px; height: 250px">
      <lb-carousel :data="Data" :autoPlay="false"></lb-carousel>
    </div>
    <div style="float:right;width: 430px; height: 250px">
      <lb-carousel :data="Data" :interval="1000"></lb-carousel>
    </div>
</template>

<script>
export default{
    setup(){
        const Data = [
          {
            id: "1",
            src: "https://gtms02.alicdn.com/tps/i2/TB10vPXKpXXXXacXXXXvKyzTVXX-520-280.jpg",
            href: "",
          },
          {
            id: "2",
            src: "https://img.alicdn.com/imgextra/i4/6000000004047/O1CN01Y8A3Cu1flZaFyZZft_!!6000000004047-0-alimamazszw.jpg",
            href: "",
          },
          {
            id: "3",
            src: "https://gtms03.alicdn.com/tps/i3/TB1gXd1JXXXXXapXpXXvKyzTVXX-520-280.jpg",
            href: "",
          },
          {
            id: "4",
            src: "https://img.alicdn.com/tfs/TB1wOidVWL7gK0jSZFBXXXZZpXa-520-280.jpg",
            href: "",
          },
          {
            id: "5",
            src: "https://gtms01.alicdn.com/tps/i1/TB1r4h8JXXXXXXoXXXXvKyzTVXX-520-280.jpg",
            href: "",
          },
        ];


        return {
            Data
        }
    }
}
</script>

```
:::


<br/>
<br/>

### 圆点设置
1. 是否启用轮播图圆点：`hasDots` **( 默认：true )**
2. 轮播图圆点容器背景：`dotsBgColor` **( 默认：transparent  透明)**，支持所有CSS颜色值，包括 `rgb`、`rbga`
3. 轮播图圆点大小：`dotSize` **( 默认：8 )**
4. 轮播图圆点颜色：`dotColor` **( 默认：#FFFFFF )**
5. 轮播图激活项圆点颜色：`curDotColor`  **( 默认：#F56C6C )**

<br/>
<br/>

:::demo 

```vue
<template>
    <div style="width: 520px; height: 380px">
         <lb-carousel 
            :data="Data" 
            dotsBgColor="rgba(0,0,0,0.3)"
            :dotSize="12"
            dotColor="wheat"
            curDotColor="#FFA400"
        ></lb-carousel>
    </div>
</template>

<script>
export default{
    setup(){
        const Data = [
          {
            id: "1",
            src: "https://gtms02.alicdn.com/tps/i2/TB10vPXKpXXXXacXXXXvKyzTVXX-520-280.jpg",
            href: "",
          },
          {
            id: "2",
            src: "https://img.alicdn.com/imgextra/i4/6000000004047/O1CN01Y8A3Cu1flZaFyZZft_!!6000000004047-0-alimamazszw.jpg",
            href: "",
          },
          {
            id: "3",
            src: "https://gtms03.alicdn.com/tps/i3/TB1gXd1JXXXXXapXpXXvKyzTVXX-520-280.jpg",
            href: "",
          },
          {
            id: "4",
            src: "https://img.alicdn.com/tfs/TB1wOidVWL7gK0jSZFBXXXZZpXa-520-280.jpg",
            href: "",
          },
          {
            id: "5",
            src: "https://gtms01.alicdn.com/tps/i1/TB1r4h8JXXXXXXoXXXXvKyzTVXX-520-280.jpg",
            href: "",
          },
        ];
        return {
            Data
        }
    }
}
</script>

```
:::


<br/>
<br/>


### 左右控制按钮设置
1. 是否启用控制按钮：`hasController` **( 默认：true )**
2. 是否启用半圆形按钮：`ControllerRound` **( false )**
3. 控制按钮背景颜色：`ControllerBgColor` **( rgba(0,0,0,0.3) )**，支持所有CSS颜色值，包括 `rgb`、`rbga`
4. 控制按钮符号颜色：`ControllerColor` **( 默认：#FFFFFF )**
5. 控制按钮宽度：`ControllerWidth` **( 默认：25 )**
6. 控制按钮高度：`ControllerHeight`  **( 默认：25 )**

<br/>
<br/>

:::demo 

```vue
<template>
    <div style="width: 620px; height: 380px">
         <lb-carousel 
            :data="Data" 
            :ControllerRound="true"
            :ControllerWidth="40"
            :ControllerHeight="40"
        ></lb-carousel>
    </div>
</template>

<script>
export default{
    setup(){
        const Data = [
          {
            id: "1",
            src: "https://gtms02.alicdn.com/tps/i2/TB10vPXKpXXXXacXXXXvKyzTVXX-520-280.jpg",
            href: "",
          },
          {
            id: "2",
            src: "https://img.alicdn.com/imgextra/i4/6000000004047/O1CN01Y8A3Cu1flZaFyZZft_!!6000000004047-0-alimamazszw.jpg",
            href: "",
          },
          {
            id: "3",
            src: "https://gtms03.alicdn.com/tps/i3/TB1gXd1JXXXXXapXpXXvKyzTVXX-520-280.jpg",
            href: "",
          },
          {
            id: "4",
            src: "https://img.alicdn.com/tfs/TB1wOidVWL7gK0jSZFBXXXZZpXa-520-280.jpg",
            href: "",
          },
          {
            id: "5",
            src: "https://gtms01.alicdn.com/tps/i1/TB1r4h8JXXXXXXoXXXXvKyzTVXX-520-280.jpg",
            href: "",
          },
        ];
        return {
            Data
        }
    }
}
</script>

```
:::


<br/>
<br/>







# Attributes

<br/>



| 参数              | 说明                   | 类型           | 可选值                          | 是否必须 |     默认值      |
| :---------------- | :--------------------- | :------------- | :------------------------------ | :------: | :-------------: |
| data              | 轮播图数据             | Array\<object> | —                               |   必须   |        —        |
| type              | 轮播图类型             | String         | fade / slide                    |   可选   |      fade       |
| autoPlay          | 是否自动播放           | Boolean        | —                               |   可选   |      true       |
| interval          | 自动播放间隔           | Number         | —                               |   可选   |      3000       |
| target            | 原生 a标签 target 属性 | String         | _blank / _self / _parent / _top |   可选   |     _blank      |
| hasDots           | 是否启用轮播图圆点     | Boolean        | —                               |   可选   |      true       |
| dotSize           | 轮播图圆点大小         | Number         | —                               |   可选   |        8        |
| dotsBgColor       | 轮播图圆点容器背景     | String 颜色值  | —                               |   可选   |   transparent   |
| dotColor          | 轮播图圆点颜色         | String 颜色值  | —                               |   可选   |     #FFFFFF     |
| curDotColor       | 轮播图激活项圆点颜色   | String 颜色值  | —                               |   可选   |     #F56C6C     |
| hasController     | 是否启用左右控制按钮   | Boolean        | —                               |   可选   |      true       |
| ControllerBgColor | 控制按钮背景颜色       | String 颜色值  | —                               |   可选   | rgba(0,0,0,0.3) |
| ControllerColor   | 控制按钮符号颜色       | String 颜色值  | —                               |   可选   |     #FFFFFF     |
| ControllerWidth   | 控制按钮宽度           | Number         | —                               |   可选   |       25        |
| ControllerHeight  | 控制按钮高度           | Number         | —                               |   可选   |       25        |
| ControllerRound   | 是否启用半圆形按钮     | Boolean        | —                               |   可选   |      false      |



<br/>
<br/>

# Events

| 事件名称   | 说明                         | 回调参数                                                                                                                             |
| ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| toggle     | 点击圆点或左右控制按钮后触发 | 共三个参数：<br />1. *type*：触发类型，clickBtn / clickDot<br />2. *oldIndex*：之前的轮播图索引<br />3. *curIndex*：当前的轮播图索引 |
| autoToggle | 自动切换轮播图后触发         | 共两个参数：<br />1. *oldIndex*：之前的轮播图索引<br />2. *curIndex*：当前的轮播图索引                                               |

