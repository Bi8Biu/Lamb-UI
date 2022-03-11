<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-05 10:58:38
 * @LastEditTime: 2022-03-10 20:18:00
 * @FilePath: \soul-plus-master\packages\Button\index.vue
-->
<template>
  <button
    :class="[
      'lb-button',
      type,
      round ? 'lb-btn-round' : '',
      circle ? 'lb-btn-circle' : '',
    ]"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "lb-button",
  props: {
    type: {
      type: String,
      default: "",
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
