<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-04 20:15:12
 * @LastEditTime: 2022-03-09 16:12:38
 * @FilePath: \Lamb-UI for Docs\docs\document\components\TreeMenu\index.md
-->

<br/>
<br/>

# TreeMenu 无限级菜单
当菜单项与菜单子项数量不确定时，使用无限级菜单展示与选择菜单项
- 层级结构展示信息
- 使用递归思想，可展示无限级


<br/>
<br/>

:::demo

```vue
<template>
    <lb-treeMenu 
    :menu="menuData" 
    :choose="chooseMenu"
    class="selectorBox"
    >
    </lb-treeMenu>
</template>

<script>
export default{
    setup(){
        const menuData = [
            {
                id: "1",
                title: "菜单1",
                children: [
                  {
                    id: "1.1",
                    title: "菜单1-1",
                  },
                  {
                    id: "1.2",
                    title: "菜单1-2",
                  },
                ],
            },
            {
              id: "2",
              title: "菜单2",
              children: [
                {
                  id: "2.1",
                  title: "菜单2-1",
                },
                {
                  id: "2.2",
                  title: "菜单2-2",
                  children: [
                    {
                      id: "2.2.1",
                      title: "菜单2-2-1",
                    },
                  ],
                },
              ],
            },
          {
            id: "3",
            title: "菜单3",
          },
          {
            id: "4",
            title: "菜单4",
          },
        ];

        function chooseMenu(item) {
        alert(item.title);
        };
        
        return {
            menuData,
            chooseMenu
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

| 参数名 | 说明                           |      类型      | 是否必须 | 默认值 |
| ------ | ------------------------------ | :------------: | :------: | :----: |
| menu   | 菜单数据                       | Array\<object> |   必须   |   —    |
| choose | 点击菜单项回调，接收菜单项对象 |    Function    |   必须   |   —    |

<br/>
<br/>

