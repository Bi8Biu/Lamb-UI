<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-04 18:27:54
 * @LastEditTime: 2022-03-10 20:31:23
 * @FilePath: \soul-plus-master\packages\TreeMenu\MenuItem.vue
-->
<template>
  <div class="title">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuItem",
});
</script>
