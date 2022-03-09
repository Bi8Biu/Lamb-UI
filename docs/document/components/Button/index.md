<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 19:18:10
 * @LastEditTime: 2022-03-09 17:48:56
 * @FilePath: \Lamb-UI for Docs\docs\document\components\Button\index.md
-->
# Button 按钮
常用的操作按钮

<br>
<br>

### 普通按钮

:::demo

```vue
<template>
  <lb-button>默认按钮</lb-button>
  <lb-button type="primary">主要按钮</lb-button>
  <lb-button type="success">成功按钮</lb-button>
  <lb-button type="warning">警告按钮</lb-button>
  <lb-button type="danger">危险按钮</lb-button>
  <lb-button type="info">信息按钮</lb-button>
</template>

```
:::

<br>
<br>



### 圆角按钮

:::demo

```vue
<template>
  <lb-button :round="true">默认按钮</lb-button>
  <lb-button type="primary" :round="true">主要按钮</lb-button>
  <lb-button type="success" :round="true">成功按钮</lb-button>
  <lb-button type="warning" :round="true">警告按钮</lb-button>
  <lb-button type="danger" :round="true">危险按钮</lb-button>
  <lb-button type="info" :round="true">信息按钮</lb-button>
</template>

```
:::

<br>
<br>

### 圆形 / 椭圆 按钮

:::demo

```vue
<template>
  <lb-button :circle="true">默认按钮</lb-button>
  <lb-button type="primary" :circle="true">
    <div style="width:60px;height:60px;line-height:60px"> 主要按钮 </div>
  </lb-button>

  <lb-button type="success" :circle="true">
    <div style="width:12px;height:12px;line-height:12px"> A </div>
  </lb-button>
  <lb-button type="warning" :circle="true">
    <div style="width:12px;height:12px;line-height:12px"> B </div>
  </lb-button>
  <lb-button type="danger" :circle="true">
    <div style="width:12px;height:12px;line-height:12px"> C </div>

  </lb-button>
  <lb-button type="info" :circle="true">
    <div style="width:12px;height:12px;line-height:12px"> D </div>
  </lb-button>
</template>

```
:::

<br/>
<br/>

# Attributes

<br/>


| 参数   | 说明         | 类型    | 可选值                                      | 是否必须 | 默认值 |
| :----- | :----------- | :------ | :------------------------------------------ | :------: | :----: |
| type   | 类型         | String  | primary / success / warning / danger / info |   可选   |   —    |
| round  | 是否圆角按钮 | boolean | —                                           |   可选   | false  |
| circle | 是否圆形按钮 | boolean | —                                           |   可选   | false  |

<br/>
<br/>