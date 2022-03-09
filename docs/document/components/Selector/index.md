<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 19:16:42
 * @LastEditTime: 2022-03-09 16:15:14
 * @FilePath: \Lamb-UI for Docs\docs\document\components\Selector\index.md
-->

<br/>
<br/>

# Selector 选择器
当选项过多时，使用下拉菜单展示并选择内容
- 可以根据输入框内容进行选项筛选
- 可以使用上下方向键移动选择光标
- 可以使用回车选定

<br/>
<br/>

:::demo

```vue
<template>
<div class="myContainer">
    <lb-selector 
    :data="selectorData"
    :selected="selected"
    placeholder="请选择框架"
    class="selectorBox"
    ></lb-selector>
</div>
</template>

<script>
export default{
    setup(){
        const selectorData = [
            {
                id:1,
                value:'Vue.js'
            },
            {
                id:1,
                value:'React.js'
            },
            {
                id:1,
                value:'Angular.js'
            },
            {
                id:1,
                value:'jQuery.js'
            }
        ];
        function selected(value){
            alert(value)
        }
        return {
            selectorData,
            selected
        }
    }
}
</script>
<style scoped>
.myContainer{
    height:30px;
}
.myContainer .selectorBox{
    position:absolute;
    z-index:2;
}
</style>
```
:::


<br/>
<br/>

# Attributes

<br/>

| 参数名      | 说明                           | 类型           | 是否必须 | 默认值 |
| ----------- | ------------------------------ | -------------- | :------: | :----: |
| data        | 下拉列表选项                   | Array\<object> |   必须   |   —    |
| getValue    | 选项选择回调函数，接收选择的值 | Function       |   必须   |   —    |
| placeholder | 输入框提示文本                 | String         |   可选   | 请选择 |

<br/>
<br/>