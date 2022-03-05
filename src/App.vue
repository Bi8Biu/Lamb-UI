<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-28 15:30:37
 * @LastEditTime: 2022-03-05 11:45:01
 * @FilePath: \Lamb-UI\src\App.vue
-->

<template>
  <!-- <lb-selector
    style="margin: 100px 500px"
    :data="selectorData"
    :selected="getSelectValue"
    placeholder="请选择框架"
  ></lb-selector> -->
  <!-- <div style="width: 200px; font-size: 10px">
    <lb-treeMenu :menu="menuData" :choose="chooseMenu"></lb-treeMenu>
  </div> -->

  <!-- <h1>有下划线</h1>
  <lb-link href="https://element.eleme.io" target="_blank">默认链接</lb-link>
  <lb-link type="primary">主要链接</lb-link>
  <lb-link type="success">成功链接</lb-link>
  <lb-link type="warning">警告链接</lb-link>
  <lb-link type="danger">危险链接</lb-link>
  <lb-link type="info">信息链接</lb-link>

  <h1>无下划线</h1>
  <lb-link href="https://element.eleme.io" :underline="false">
    默认链接
  </lb-link>
  <lb-link type="primary" :underline="false">主要链接</lb-link>
  <lb-link type="success" :underline="false">成功链接</lb-link>
  <lb-link type="warning" :underline="false">警告链接</lb-link>
  <lb-link type="danger" :underline="false">危险链接</lb-link>
  <lb-link type="info" :underline="false">信息链接</lb-link>

  <h1>禁用链接</h1>
  <lb-link href="https://element.eleme.io" :disabled="true"> 默认链接 </lb-link>
  <lb-link type="primary" :disabled="true">主要链接</lb-link>
  <lb-link type="success" :disabled="true">成功链接</lb-link>
  <lb-link type="warning" :disabled="true">警告链接</lb-link>
  <lb-link type="danger" :disabled="true">危险链接</lb-link>
  <lb-link type="info" :disabled="true">信息链接</lb-link> -->

  <lb-button>默认按钮</lb-button>
  <lb-button type="primary">主要按钮</lb-button>
  <lb-button type="success">成功按钮</lb-button>
  <lb-button type="info">信息按钮</lb-button>
  <lb-button type="warning" :circle="true">警告按钮</lb-button>
  <lb-button type="danger" :circle="true">
    <div style="width: 20px; height: 20px; line-height: 20px">A</div>
  </lb-button>
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