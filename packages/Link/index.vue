<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-05 09:30:49
 * @LastEditTime: 2022-03-10 20:26:35
 * @FilePath: \soul-plus-master\packages\Link\index.vue
-->
<template>
  <a
    :class="[
      'lb-link',
      type,
      underline ? 'is-underline' : '',
      disabled ? 'is-disabled' : '',
    ]"
    :href="disabled ? 'javascript:void(0)' : href"
    :target="target"
  >
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "lb-link",
  props: {
    href: {
      type: String,
      default: "#",
    },
    target: {
      type: String,
      default: "_black",
    },
    type: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
