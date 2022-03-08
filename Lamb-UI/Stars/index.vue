<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-07 15:43:11
 * @LastEditTime: 2022-03-08 11:42:00
 * @FilePath: \Lamb-UI\Lamb-UI\Stars\index.vue
-->
<template>
  <span
    class="stars-container"
    :style="{
      fontSize: size + 'px',
      width: (size + 10) * sum + 1 + 'px',
      height: size + 10 + 'px',
      lineHeight: size + 'px',
    }"
  >
    <!-- 普通评分 -->
    <span v-if="type === 'default' || type === 'color'" class="clickable">
      <i
        v-for="i in sum"
        :key="i"
        :class="[
          'stars',
          'iconfont',
          hoverNum >= i || curNum >= i ? 'icon-active-star' : 'icon-star',
        ]"
        :style="{
          width: size + 'px',
          color: hoverNum >= i || curNum >= i ? curColor : '',
        }"
        @mouseenter="hoverStars(i)"
        @mouseleave="curNum ? (hoverNum = curNum) : (hoverNum = 0)"
        @click="clickStars(i)"
      ></i>
    </span>

    <!-- 只读的评分 -->
    <!-- 总星星数-->
    <span v-if="type === 'readonly'" class="readonly">
      <i v-for="i in sum" :key="i" class="iconfont icon-star stars"></i>
    </span>
    <!-- 当前评分星数 -->
    <span
      v-if="type === 'readonly'"
      class="readonly"
      :style="{
        color: curColor,
      }"
    >
      <i
        v-for="i in scoreInt"
        :key="i"
        class="iconfont icon-active-star stars"
      ></i>
      <i
        class="iconfont icon-active-star stars"
        :style="{
          width: size * scoreFloat + 'px',
          display: size * scoreFloat ? '' : 'none',
          paddingRight: 0,
        }"
      ></i>
    </span>

    <!-- 显示分数  -->
    <span
      v-if="!texts && showScore && hoverNum"
      class="score-text"
      :style="{
        color: curColor,
      }"
    >
      {{ hoverNum }}
    </span>
    <!-- 显示辅助文字 -->
    <span
      v-if="texts"
      class="score-text"
      :style="{
        color: textColor ? textColor : curColor,
      }"
    >
      {{ curText }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "lb-stars",
  emits: ["score"],
  props: {
    type: {
      type: String,
      default: "default",
    },
    sum: {
      type: Number,
      default: 5,
    },
    size: {
      type: Number,
      default: 16,
    },
    colors: {
      type: Object,
      default: null,
    },
    texts: {
      type: Object,
      default: null,
    },
    textColor: {
      type: String,
      default: "",
    },
    score: {
      type: Number,
      default: 0,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    let curNum = ref(0);
    let hoverNum = ref(0);
    let curColor = ref("#f7ba2a");
    let curText = ref("");
    let scoreInt = Math.floor(props.score);
    let scoreFloat = props.score - scoreInt;

    // 如果是只读模式，则将 curNum、hoverNum 设为固定分数
    if (props.type === "readonly") {
      curNum.value = props.score;
      hoverNum.value = props.score;
    }
    // 鼠标滑过时改变 hoverNum为当前鼠标下的星星索引 ，小于等于它（选中）的星星将变色色
    function hoverStars(index: number) {
      if (curNum.value !== 0) return;
      hoverNum.value = index;
    }
    // 点击（评价）后改变 curNum
    function clickStars(index: number) {
      curNum.value = index;
      ctx.emit("score", index);
    }

    // 根据评分获取对应的数据：颜色、文本
    function getInfo(infos: object, num: number) {
      let keys = Object.keys(infos);
      let curKey: string = keys.find(
        (key) => Number.parseInt(key) >= num
      ) as string;
      return infos[curKey];
    }

    // 根据评分设置对应数据：颜色、文本
    function setInfo() {
      if (props.colors) {
        if (curNum.value === 0) {
          curColor.value = getInfo(props.colors, hoverNum.value);
        } else {
          curColor.value = getInfo(props.colors, curNum.value);
        }
      }
      if (props.texts) {
        if (curNum.value === 0) {
          curText.value = hoverNum.value
            ? getInfo(props.texts, hoverNum.value)
            : "";
        } else {
          curText.value = getInfo(props.texts, curNum.value);
        }
      }
    }

    watch(
      [curNum, hoverNum],
      () => {
        setInfo();
      },
      { immediate: true }
    );
    return {
      curNum,
      hoverNum,
      curColor,
      curText,
      hoverStars,
      clickStars,
      scoreInt,
      scoreFloat,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./iconfont/iconfont.css";

.stars-container {
  position: relative;
  display: inline-block;
  color: #c0c4cc;
}

.stars {
  display: inline-block;
  padding: 5px;
  transition: color 0.2s;
  overflow: hidden;
  box-sizing: content-box;
}
.clickable {
  position: absolute;
  i {
    cursor: pointer;
  }
}
.readonly {
  position: absolute;
}
.score-text {
  position: absolute;
  left: 100%;
  padding: 5px 2px;
  white-space: nowrap;
}
</style>