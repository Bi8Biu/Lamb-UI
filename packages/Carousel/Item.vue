<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-06 11:00:08
 * @LastEditTime: 2022-03-10 20:26:01
 * @FilePath: \soul-plus-master\packages\Carousel\Item.vue
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