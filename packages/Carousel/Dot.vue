<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-06 16:31:22
 * @LastEditTime: 2022-03-10 20:25:42
 * @FilePath: \soul-plus-master\packages\Carousel\Dot.vue
-->
<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-06 13:39:19
 * @LastEditTime: 2022-03-06 16:30:52
 * @FilePath: \Lamb-UI\Lamb-UI\Carousel\dot.vue
-->
<template>
  <div
    v-for="i in num"
    class="car-dot"
    :style="{
      background: i - 1 === curIndex ? curDotColor : dotColor,
      width: dotSize + 'px',
      height: dotSize + 'px',
    }"
    @click="clickDot(i - 1)"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "dot",
  emits: ["clickDot"],
  props: {
    num: Number,
    curIndex: Number,
    dotColor: String,
    curDotColor: String,
    dotSize: Number,
  },
  setup(props, ctx) {
    function clickDot(index: number) {
      //   if (props.curIndex !== index) {
      ctx.emit("clickDot", index);
      //   }
    }
    return { clickDot };
  },
});
</script>
