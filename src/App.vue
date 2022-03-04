<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-28 15:30:37
 * @LastEditTime: 2022-03-04 20:14:17
 * @FilePath: \Lamb-UI\src\App.vue
-->

<template>
  <!-- <lb-selector
    style="margin: 100px 500px"
    :data="selectorData"
    :selected="getSelectValue"
    placeholder="请选择框架"
  ></lb-selector> -->
  <div style="width: 200px; font-size: 10px">
    <lb-treeMenu :menu="menuData" :choose="chooseMenu"></lb-treeMenu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    //   Selector 数据 与 方法
    const selectorData = reactive([
      {
        id: 1,
        value: "Vue.js",
      },
      {
        id: 2,
        value: "React.js",
      },
      {
        id: 3,
        value: "jQuery.js",
      },
      {
        id: 4,
        value: "Angular.js",
      },
    ]);
    function getSelectValue(value: String) {
      console.log(value);
    }

    //Menu 数据 与 方法
    const menuData = [
      {
        id: "1",
        title: "菜单1",
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
        children: [
          {
            id: "4.1",
            title: "菜单4-1",
          },
          {
            id: "4.2",
            title: "菜单4-2",
          },
        ],
      },
    ];
    function chooseMenu(item: any) {
      alert(item.title);
    }
    return {
      //   selectorData,
      //   getSelectValue,
      menuData,
      chooseMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>