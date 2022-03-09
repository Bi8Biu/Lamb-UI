<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-05 09:27:19
 * @LastEditTime: 2022-03-09 16:11:16
 * @FilePath: \Lamb-UI for Docs\docs\document\components\Link\index.md
-->
<br/>
<br/>

# Link 文字链接
文字超链接

<br/>
<br/>

### 基础用法
基础的文字链接用法


:::demo

```vue
<template>
  <lb-link >默认链接</lb-link>
  <lb-link type="primary">主要链接</lb-link>
  <lb-link type="success">成功链接</lb-link>
  <lb-link type="warning">警告链接</lb-link>
  <lb-link type="danger">危险链接</lb-link>
  <lb-link type="info">信息链接</lb-link>
</template>

```
:::


<br/>
<br/>

### 禁用状态
文字链接不可用状态

:::demo

```vue
<template>
  <lb-link :disabled="true">默认链接</lb-link>
  <lb-link type="primary" :disabled="true">主要链接</lb-link>
  <lb-link type="success" :disabled="true">成功链接</lb-link>
  <lb-link type="warning" :disabled="true">警告链接</lb-link>
  <lb-link type="danger" :disabled="true">危险链接</lb-link>
  <lb-link type="info" :disabled="true">信息链接</lb-link>
</template>

```
:::


<br/>
<br/>


### 下划线
文字链接下划线

:::demo

```vue
<template>
  <lb-link >有下划线</lb-link>
  <lb-link :underline="false">无下划线</lb-link>

</template>

```
:::


<br/>
<br/>

# Attributes

<br/>

| 参数      | 说明             | 类型    | 可选值                                      | 是否必须 | 默认值 |
| :-------- | :--------------- | :------ | :------------------------------------------ | :------: | :----: |
| type      | 类型             | String  | primary / success / warning / danger / info |   可选   |   —    |
| underline | 是否下划线       | Boolean | —                                           |   可选   |  true  |
| disabled  | 是否禁用状态     | Boolean | —                                           |   可选   | false  |
| href      | 原生 href 属性   | String  | —                                           |   可选   |   —    |
| target    | 原生 target 属性 | String  | _blank / _self / _parent / _top             |   可选   | _blank |

<br/>
<br/>