<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-09 11:33:53
 * @LastEditTime: 2022-03-09 17:43:33
 * @FilePath: \Lamb-UI for Docs\docs\.vitepress\components\Magnifier\index.vue
-->
<template>
  <div
    class="magnifier-container"
    @mouseover="showMagnifier = true"
    @mouseleave="showMagnifier = false"
    @mousemove="move($event)"
    ref="container"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
  >
    <img :src="src" :width="imgWidth" :height="imgHeight" />
    <div
      v-if="(type === 'inCircle' || type === 'inRect') && showMagnifier"
      :class="['magnifier', type === 'inCircle' ? 'in-circle' : '']"
      :style="{
        top: magnifierY + 'px',
        left: magnifierX + 'px',
        width: magnifierWidth + 'px',
        height: magnifierHeight + 'px',
        backgroundImage: `Url(${src})`,
        backgroundSize: `${imgWidth * times}px ${imgHeight * times}px`,
        backgroundPosition: `${-magnifierX * times}px ${-magnifierY * times}px`,
        border: magnifierBorder,
      }"
    ></div>
    <div
      v-if="type === 'outRect' && showMagnifier"
      class="magnifier"
      :style="{
        top: magnifierY + 'px',
        left: magnifierX + 'px',
        width: magnifierWidth + 'px',
        height: magnifierHeight + 'px',
        backgroundColor: outRectBgc,
        boxShadow: 'none',
      }"
    ></div>

    <div
      v-if="type === 'outRect' && showMagnifier"
      class="magnifier-view"
      :style="{
        width: viewWidth + 'px',
        height: viewHeight + 'px',
        backgroundImage: `Url(${src})`,
        backgroundSize: `${imgWidth * times}px ${imgHeight * times}px`,
        backgroundPosition: `${-magnifierX * times}px ${-magnifierY * times}px`,
        backgroundRepeat: 'no-repeat',
      }"
      @mouseenter="showMagnifier = false"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "lb-magnifier",
  props: {
    src: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "inRect",
    },
    imgWidth: {
      type: Number,
      default: 600,
    },
    imgHeight: {
      type: Number,
      default: 450,
    },
    magnifierWidth: {
      type: Number,
      default: 200,
    },
    magnifierHeight: {
      type: Number,
      default: 200,
    },
    magnifierBorder: {
      type: String,
      default: "5px solid #314154",
    },
    times: {
      type: Number,
      default: 2,
    },
    outRectBgc: {
      type: String,
      default: "rgba(254, 222, 79, 0.5)",
    },
    viewWidth: {
      type: Number,
      default: 450,
    },
    viewHeight: {
      type: Number,
      default: 450,
    },
  },
  setup(props) {
    const container = ref("");
    const showMagnifier = ref(false);
    // 放大镜坐标
    const magnifierX = ref(0);
    const magnifierY = ref(0);

    function move(e: MouseEvent) {
      const containerDom = container.value as unknown as HTMLElement;
      // 放大镜的一半
      const magnifierHalf = {
        width: props.magnifierWidth / 2,
        height: props.magnifierHeight / 2,
      };
      const X = e.pageX - getOffset(containerDom).X;
      const Y = e.pageY - getOffset(containerDom).Y;
      // 修改放大镜的坐标
      magnifierX.value = X - magnifierHalf.width;
      magnifierY.value = Y - magnifierHalf.height;

      //   不允许超出
      const maxX = props.imgWidth - props.magnifierWidth;
      const maxY = props.imgHeight - props.magnifierHeight;

      magnifierX.value =
        magnifierX.value > 0
          ? magnifierX.value > maxX
            ? maxX
            : magnifierX.value
          : 0;
      magnifierY.value =
        magnifierY.value > 0
          ? magnifierY.value > maxY
            ? maxY
            : magnifierY.value
          : 0;
    }

    // 获取元素距离页面的 X,Y 坐标
    function getOffset(DOM: HTMLElement) {
      let offset = { X: DOM.offsetLeft, Y: DOM.offsetTop };
      if (DOM.offsetParent != null) {
        offset.X += getOffset(DOM.offsetParent as HTMLElement).X;
        offset.Y += getOffset(DOM.offsetParent as HTMLElement).Y;
      }
      return offset;
    }
    return {
      container,
      showMagnifier,
      move,
      magnifierX,
      magnifierY,
    };
  },
});
</script>

<style lang="scss" scoped>
.magnifier-container {
  display: block;
  position: relative;
  .magnifier {
    position: absolute;
    cursor: move;
    box-shadow: 0 0 50px #314154;
    box-sizing: border-box;
    &.in-circle {
      border-radius: 50%;
    }
  }
  .magnifier-view {
    position: absolute;
    top: 0px;
    left: 100%;
  }
}
</style>