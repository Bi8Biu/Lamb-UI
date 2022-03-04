<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-04 18:27:54
 * @LastEditTime: 2022-03-04 19:41:26
 * @FilePath: \Lamb-UI\Lamb-UI\TreeMenu\MenuItem.vue
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

<style lang="scss" scoped>
.title {
  padding: 20px;
}
</style>