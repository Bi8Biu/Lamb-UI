<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-04 18:48:06
 * @LastEditTime: 2022-03-04 23:37:49
 * @FilePath: \Lamb-UI\Lamb-UI\TreeMenu\SubMenu.vue
-->
<template>
  <div class="subMenu">
    <div class="subMenu-title">
      <slot name="title"></slot>
      <i class="iconfont icon-xiangyou"></i>
    </div>
    <div class="child-menu">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import TreeMenu from "./index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "SubMenu",
  components: { "lb-treeMenu": TreeMenu },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    choose: {
      type: Function,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "./iconfont/iconfont.css";
.subMenu {
  position: relative;
  padding: 20px;
  .subMenu-title {
    display: flex;
    justify-content: space-between;
  }
  .child-menu {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
  }
}
.subMenu:hover {
  & > .child-menu {
    display: block;
  }
}
</style>