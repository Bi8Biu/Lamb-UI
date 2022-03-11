<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-05 20:43:32
 * @LastEditTime: 2022-03-10 20:25:36
 * @FilePath: \soul-plus-master\packages\Carousel\index.vue
-->
<template>
  <div
    :class="['car-container', type]"
    @mouseenter="stopPlay"
    @mouseleave="play"
    ref="container"
  >
    <template v-for="(item, index) of data">
      <transition>
        <Item
          class="car-item"
          :self="item"
          :index="index"
          v-show="curIndex === index"
          :target="target"
        >
        </Item>
      </transition>
    </template>
    <div
      v-if="hasDots"
      class="dot-container"
      :style="{ background: dotsBgColor }"
    >
      <Dot
        :num="data.length"
        :curIndex="curIndex"
        :dotColor="dotColor"
        :curDotColor="curDotColor"
        :dotSize="dotSize"
        @clickDot="clickDot"
      ></Dot>
    </div>
    <Controller
      class="cur-controller left"
      type="left"
      :width="ControllerWidth"
      :height="ControllerHeight"
      :bgc="ControllerBgColor"
      :color="ControllerColor"
      :round="ControllerRound"
      @click="clickController('prev')"
    ></Controller>
    <Controller
      class="cur-controller right"
      type="right"
      :width="ControllerWidth"
      :height="ControllerHeight"
      :bgc="ControllerBgColor"
      :color="ControllerColor"
      :round="ControllerRound"
      @click="clickController('next')"
    ></Controller>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Item from "./Item.vue";
import Dot from "./Dot.vue";
import Controller from "./Controller.vue";

export default defineComponent({
  name: "lb-carousel",
  emits: ["toggle", "autoToggle"],
  props: {
    data: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: "fade",
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    target: {
      type: String,
      default: "_black",
    },
    hasDots: {
      type: Boolean,
      default: true,
    },
    dotSize: {
      type: Number,
      default: 8,
    },
    dotsBgColor: {
      type: String,
      default: "transparent",
    },
    dotColor: {
      type: String,
      default: "#fff",
    },
    curDotColor: {
      type: String,
      default: "#f56c6c",
    },
    hasController: {
      type: Boolean,
      default: true,
    },
    ControllerBgColor: {
      type: String,
      default: "rgba(0,0,0,0.3)",
    },
    ControllerColor: {
      type: String,
      default: "#ffffff",
    },
    ControllerWidth: {
      type: Number,
      default: 25,
    },
    ControllerHeight: {
      type: Number,
      default: 25,
    },
    ControllerRound: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Item,
    Dot,
    Controller,
  },
  setup(props, ctx) {
    const container = ref("");
    let curIndex = ref(0);
    // 定时器 ID
    let t: any = null;

    // 改变 当前索引
    function changeDot(direction: "next" | "prev") {
      // 如果轮播图类型是滑动 则需要根据方向改变滑动动画
      if (props.type === "slide") changeDir(direction);
      // 修改当前索引
      if (direction === "prev") {
        if (curIndex.value === 0) {
          curIndex.value = props.data.length - 1;
        } else {
          curIndex.value--;
        }
      } else {
        if (curIndex.value === props.data.length - 1) {
          curIndex.value = 0;
        } else {
          curIndex.value++;
        }
      }
    }
    // 修改 播放顺序
    function changeDir(direction: "next" | "prev") {
      const containerDom: HTMLElement =
        container.value as unknown as HTMLElement;
      if (direction === "next") {
        containerDom.classList.remove("prev");
        containerDom.classList.add("next");
      } else {
        containerDom.classList.remove("next");
        containerDom.classList.add("prev");
      }
    }
    // 停止播放
    function stopPlay() {
      clearInterval(t);
      t = null;
    }
    // 开启自动播放
    function play() {
      if (props.autoPlay) {
        t = setInterval(() => {
          const oldValue = curIndex.value;
          changeDot("next");
          ctx.emit("autoToggle", oldValue, curIndex.value);
        }, props.interval);
      }
    }

    // 自动播放
    play();

    // 点击 dot
    function clickDot(value: number) {
      const oldValue = curIndex.value;
      if (value > curIndex.value) {
        const step = value - curIndex.value;
        for (let i = 0; i < step; i++) {
          changeDot("next");
        }
      } else {
        const step = curIndex.value - value;
        for (let i = 0; i < step; i++) {
          changeDot("prev");
        }
      }
      ctx.emit("toggle", "clickDot", oldValue, curIndex.value);
    }
    // 点击控制器（左右按钮）
    function clickController(direction: "next" | "prev") {
      const oldValue = curIndex.value;
      changeDot(direction);
      ctx.emit("toggle", "clickBtn", oldValue, curIndex.value);
    }
    return {
      container,
      curIndex,
      stopPlay,
      play,
      clickDot,
      clickController,
    };
  },
});
</script>