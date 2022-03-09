<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-28 15:30:37
 * @LastEditTime: 2022-03-09 15:39:10
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

  <!-- <lb-button>默认按钮</lb-button>
  <lb-button type="primary">主要按钮</lb-button>
  <lb-button type="success">成功按钮</lb-button>
  <lb-button type="info">信息按钮</lb-button>
  <lb-button type="warning" :circle="true">警告按钮</lb-button>
  <lb-button type="danger" :circle="true">
    <div style="width: 20px; height: 20px; line-height: 20px">A</div>
  </lb-button> -->

  <!-- <div style="width: 520px; height: 280px">
    <lb-carousel
      :data="carData"
      type="slide"
      target="_self"
      :autoPlay="true"
      :dotSize="8"
      @toggle="toggle"
      :ControllerRound="true"
    ></lb-carousel>
  </div> -->
  <!-- <lb-stars :score="2.5" type="readonly"></lb-stars> -->
  <!-- src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.nga.178.com%2Fattachments%2Fmon_201712%2F12%2F-39t2Q5-6f44XbZ34T3cS1hc-vh.jpg&refer=http%3A%2F%2Fimg.nga.178.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649390195&t=1d2ef21bf7cfa3daca6c29f73b10b09b" -->

  <lb-magnifier
    :src="require('./assets/demo.png')"
    type="outRect"
    :imgWidth="900"
    :imgHeight="450"
    :magnifierWidth="250"
    :magnifierHeight="250"
  ></lb-magnifier>
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

    // 轮播图 数据 与 方法
    type TCarouselItem = {
      id: number | string;
      src: string;
      [propName: string]: any;
    };
    const carData: Array<TCarouselItem> = [
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

    function toggle(type: string, oldIndex: number, curIndex: number) {
      alert([type, oldIndex, curIndex]);
    }
    function autoToggle(oldIndex: number, curIndex: number) {
      console.log(oldIndex, curIndex);
    }

    const myColors = {
      "2": "#99A9BF",
      "3": "#F7BA2A",
      "5": "#FF9900",
    };
    const myTexts = {
      "1": "极差",
      "2": "失望",
      "3": "一般",
      "4": "满意",
      "5": "完美",
    };
    return {
      //   selectorData,
      //   getSelectValue,
      //   menuData,
      //   chooseMenu,
      //   carData,
      //   toggle,
      //   autoToggle,
      myColors,
      myTexts,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>