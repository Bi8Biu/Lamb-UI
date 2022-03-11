<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-04 18:18:05
 * @LastEditTime: 2022-03-10 20:31:06
 * @FilePath: \soul-plus-master\packages\TreeMenu\index.vue
-->
<template>
  <ul class="lb-menu-container">
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
