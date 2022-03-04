<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-04 18:18:05
 * @LastEditTime: 2022-03-04 23:46:46
 * @FilePath: \Lamb-UI\Lamb-UI\TreeMenu\index.vue
-->
<template>
  <ul class="menu">
    <li v-for="item of menu" :key="item.id">
      <template v-if="item.children">
        <SubMenu
          :menu="item.children"
          :choose="choose"
          @click.stop="choose(item)"
        >
          <template v-slot:title>
            {{ item.title }}
          </template>
          <template v-slot:menu>
            <lb-treeMenu :menu="item.children" :choose="choose"></lb-treeMenu>
          </template>
        </SubMenu>
      </template>
      <template v-else>
        <MenuItem @click.stop="choose(item)">
          {{ item.title }}
        </MenuItem>
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, defineComponent } from "vue";
import MenuItem from "./MenuItem.vue";
import SubMenu from "./SubMenu.vue";
const comment: Component = defineComponent({
  name: "lb-treeMenu",
  components: { MenuItem, SubMenu },
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
});
export default comment;
</script>

<style lang="scss" scoped>
.menu {
  background-color: #545c64;
  padding: 0;
  margin: 0;
  width: 200px;
  font-size: 10px;
  cursor: pointer;
  li {
    list-style: none;
    color: #fff;
  }
  li:hover {
    background-color: #434a50;
  }
}
</style>