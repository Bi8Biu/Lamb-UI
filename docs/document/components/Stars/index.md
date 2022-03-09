<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-08 10:47:53
 * @LastEditTime: 2022-03-09 16:18:45
 * @FilePath: \Lamb-UI for Docs\docs\document\components\Stars\index.md
-->
<br/>
<br/>

# Stars 五星好评
评分组件

<br/>
<br/>

### 基础用法
基础的评分组件用法
1. 评分后回调：`@score` 自定义事件 回调函数接收一个参数 ：该参数评价的分数
2. 设置星星数量：`sum` ，默认 ：`5`
3. 设置星星大小：`size` ，默认：`16`


:::demo 

```vue
<template>
  <lb-stars @score="score"></lb-stars>
  <br/>
  <lb-stars @score="score" :sum="3"></lb-stars>
  <br/>
  <lb-stars @score="score" :size="30"></lb-stars>
</template>
<script>
export default{
    setup(){
        function score(value){
            alert(value)
        }
        return {
            score
        }
    }
}
</script>

```
:::

<br>
<br>



### 区分颜色
根据不同的得分显示不同的颜色
1. 设置颜色：`colors` , 值为颜色映射对象，具体结构参考示例代码
:::demo 


```vue
<template>    
  <lb-stars :sum="8" :colors="myColors" :size="30"></lb-stars>
</template>
<script>
export default{
    setup(){
        const myColors = {
            "2": "#99A9BF",         // 1-2 星   展示该颜色
            "3": "#F7BA2A",         // 3 星     展示该颜色
            "5": "#FF9900",         // 4-5 星   展示该颜色
            "8": "red"              // 6-8 星   展示该颜色
                                    // 以此类推
        };
        return {
            myColors
        }
    }
}
</script>

```
:::

<br>
<br>



### 辅助文本
根据不同的得分显示不同的文本
1. 是否显示分数：`showScore`，默认false
2. 设置辅助文本：`texts` , 值为文本映射对象，具体结构参考示例代码
3. 设置文本颜色：若传入 颜色映射对象 `colors`，则辅助文本会根据颜色映射对象改变
4. 固定文本颜色: `textColor`，优先级高于 `colors`
5. 辅助文本 `texts` 优先级 大于 分数显示 `showScore`
:::demo 


```vue
<template>
  <p> 显示分数：</p>
  <lb-stars :showScore="true" :size="30"></lb-stars>
  <br>
  <br>
  <p> 设置文本：</p>
  <lb-stars :texts="myTexts" :size="30"></lb-stars>
  <br>
  <br>
  <p> 根据颜色映射对象改变文本颜色：</p>
  <lb-stars :showScore="true" :colors="myColors" :size="30"></lb-stars>
  <br>
  <lb-stars :colors="myColors" :texts="myTexts" :size="30"></lb-stars>
  <br>
  <br>
  <p> 固定文本颜色：</p>
  <lb-stars :colors="myColors" :showScore="true" :size="30" textColor="red"></lb-stars>
  <br>
  <lb-stars :colors="myColors" :texts="myTexts" :size="30" textColor="red"></lb-stars>
  
</template>
<script>
export default{
    setup(){
        const myColors = {
            "2": "#99A9BF",         // 1-2 星   展示该颜色
            "3": "#F7BA2A",         // 3 星     展示该颜色
            "5": "#FF9900",         // 4-5 星   展示该颜色
        };
        const myTexts = {
            "1": "极差",           // 1星  展示
            "2": "失望",           // 2星  展示
            "3": "一般",           // 3星  展示
            "4": "满意",           // 4星  展示
            "5": "完美",           // 5星  展示
        };
        return {
            myColors,
            myTexts
        }
    }
}
</script>

```
:::

<br>
<br>



### 只读评分
用于展示评分
1. 设置评分只读模式：`type` 为 `readonly`
2. 固定分数：`score`，需要配合显示分数使用：`showScore`， 在非只读模式下无效
3. 可以配合 `colors` 使用
4. 可以配合 `texts` 使用，`texts` 优先级 高于 `score`

:::demo 


```vue
<template>
  <lb-stars type="readonly" :size="20" :score="3.5"></lb-stars>
  <br>
  <lb-stars type="readonly" :size="20" :score="3.5" :showScore="true"></lb-stars>
  <br>
  <p>配合 colors：</p>
  <lb-stars type="readonly" :size="20" :score="1.67" :showScore="true" :colors="myColors"></lb-stars>
    <br>
  <p>配合 texts：</p>
  <lb-stars type="readonly" :size="20" :score="0.5" :showScore="true" :colors="myColors" :texts="myTexts"></lb-stars>
</template>
<script>
export default{
    setup(){
        const myColors = {
            "2": "#99A9BF",         // 1-2 星   展示该颜色
            "3": "#F7BA2A",         // 3 星     展示该颜色
            "5": "#FF9900",         // 4-5 星   展示该颜色
        };
        const myTexts = {
            "1": "极差",           // 1星  展示
            "2": "失望",           // 2星  展示
            "3": "一般",           // 3星  展示
            "4": "满意",           // 4星  展示
            "5": "完美",           // 5星  展示
        };
        return {
            myColors,
            myTexts
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

| 参数      | 说明                     |  类型   |       可选值       | 是否必须 | 默认值  |
| :-------- | :----------------------- | :-----: | :----------------: | :------: | :-----: |
| type      | 评分组件类型             | String  | default / readonly |   可选   | default |
| sum       | 星星数量                 | Number  |         —          |   可选   |    5    |
| size      | 星星大小                 | Number  |         —          |   可选   |   16    |
| colors    | 颜色映射对象             | Object  |         —          |   可选   |  null   |
| showScore | 是否展示当前分数文字     | Boolean |         —          |   可选   |  false  |
| texts     | 辅助文字映射对象         | Object  |         —          |   可选   |  null   |
| textColor | 辅助文字固定颜色         | String  |         —          |   可选   |    —    |
| score     | 固定分数，只读，用于展示 | Number  |         —          |   可选   |    0    |



<br/>
<br/>

### Events

| 事件名称 | 说明       | 回调参数                   |
| -------- | ---------- | -------------------------- |
| score    | 评分后回调 | 接收一个参数，为评价的分数 |

<br/>
<br/>
