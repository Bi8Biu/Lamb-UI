<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-01 15:05:18
 * @LastEditTime: 2022-03-10 20:28:31
 * @FilePath: \soul-plus-master\packages\Selector\index.vue
-->
<template>
  <div class="selector" v-focus>
    <!-- 输入框 -->
    <div class="selector-input">
      <label class="placeholder">{{ placeholder }}</label>
      <input
        type="text"
        class="input"
        v-model="inputValue"
        @input="searchOptions"
        @keydown.enter="keyDownSelect($event)"
        @focus="filterData = data"
        @blur="
          inputValue = curValue;
          curIndex = -1;
        "
        @keydown.down="keyMoveOption($event)"
        @keydown.up="keyMoveOption($event)"
      />
      <span class="iconfont icon-xiala input-icon"></span>
    </div>
    <!-- 下拉列表 -->
    <div class="selector-item-group">
      <ul>
        <li
          v-if="filterData.length"
          v-for="(item, index) in filterData"
          :key="item.id"
          :class="item.value === inputValue ? 'active' : ''"
          :style="index === curIndex ? 'background-color:#f5f7fa' : ''"
          @click="setValue(item.value)"
          @mouseover="curIndex = index"
        >
          {{ item.value }}
        </li>
        <li v-else>无匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import focus from "./directives/focus";

type item = { id: string | number; value: string };

export default defineComponent({
  name: "lb-selector",
  directives: { focus },
  props: {
    data: {
      type: Array,
      default: [],
    },
    selected: {
      type: Function,
      require: true,
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
  setup(props: any) {
    let inputValue = ref("");
    let filterData = ref(filterOptions());
    let curValue = ref("");
    let curIndex = ref(-1);
    // 点击列表项进行选择
    function setValue(value: string) {
      inputValue.value = value;
      curValue.value = value;
      props.selected(inputValue.value);
    }
    // 筛选列表函数
    function filterOptions() {
      return props.data.filter((item: item) => {
        return (item as item).value
          .toUpperCase()
          .trim()
          .includes(inputValue.value.toUpperCase().trim());
      });
    }
    // 输入框输入时进行筛选列表
    function searchOptions() {
      filterData.value = filterOptions();
    }
    // 回车选择
    function keyDownSelect(e: Event) {
      if (
        (filterData.value.length > 0 && inputValue.value.length > 0) ||
        curIndex.value !== -1
      ) {
        if (curIndex.value >= 0 && curIndex.value < filterData.value.length) {
          setValue(filterData.value[curIndex.value].value);
        } else {
          setValue(filterData.value[0].value);
        }
        (e.target as HTMLInputElement).blur();
      }
    }
    // 上下移动选择项
    function keyMoveOption(e: KeyboardEvent) {
      if (e.key === "ArrowUp") {
        curIndex.value--;
      } else if (e.key === "ArrowDown") {
        curIndex.value++;
      }

      if (curIndex.value > filterData.value.length - 1) {
        curIndex.value = 0;
      } else if (curIndex.value < 0) {
        curIndex.value = filterData.value.length - 1;
      }
    }
    return {
      inputValue,
      setValue,
      searchOptions,
      filterData,
      keyDownSelect,
      filterOptions,
      keyMoveOption,
      curIndex,
      curValue,
    };
  },
});
</script>
