<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-06 16:45:13
 * @LastEditTime: 2022-03-08 13:59:46
 * @FilePath: \Lamb-UI for Docs\docs\.vitepress\components\Carousel\Controller.vue
-->
<template>
  <div
    :style="{
      width: width + 'px',
      height: height + 'px',
      lineHeight: height + 'px',
      fontSize: width / 2.5 + 'px',
      background: bgc,
      color: color,
      borderTopLeftRadius: round && type === 'right' ? '50%' : '0%',
      borderBottomLeftRadius: round && type === 'right' ? '50%' : '0%',
      borderTopRightRadius: round && type === 'left' ? '50%' : '0%',
      borderBottomRightRadius: round && type === 'left' ? '50%' : '0%',
    }"
    class="controller-btn"
  >
    <i :class="['iconfont', type === 'left' ? 'icon-zuo' : 'icon-you']"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Controller",
  props: {
    type: String,
    bgc: {
      type: String,
      default: "rgba(0,0,0,0.3)",
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    width: {
      type: Number,
      default: 35,
    },
    height: {
      type: Number,
      default: 25,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../iconfont/iconfont.css";
.controller-btn {
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  user-select: none;
}
</style>