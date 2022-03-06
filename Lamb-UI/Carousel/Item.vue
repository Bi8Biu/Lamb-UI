<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-06 11:00:08
 * @LastEditTime: 2022-03-06 13:38:41
 * @FilePath: \Lamb-UI\Lamb-UI\Carousel\Item.vue
-->
<template>
  <a
    class="car-item-container"
    :href="self.href ? self.href : 'javascript:void(0)'"
    :target="target"
  >
    <img :src="self.src" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Item",
  props: {
    self: Object,
    index: Number,
    target: String,
  },
});
</script>

<style lang="scss" scoped>
.car-item-container {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>