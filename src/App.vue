<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-28 15:30:37
 * @LastEditTime: 2022-03-01 21:06:28
 * @FilePath: \Lamb-UI\src\App.vue
-->

<template>
  <Selector
    style="margin: 100px 500px"
    :data="selectorData"
    :selected="getSelectValue"
    placeholder="请选择框架"
  ></Selector>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Selector from "./components/Selector/Selector.vue";
export default defineComponent({
  name: "App",
  components: { Selector },
  setup() {
    const selectorData = reactive([
      {
        id: 1,
        value: "Vue.js",
      },
      {
        id: 2,
        value: "React.js",
      },
      {
        id: 3,
        value: "jQuery.js",
      },
      {
        id: 4,
        value: "Angular.js",
      },
    ]);

    function getSelectValue(value: String) {
      console.log(value);
    }

    return {
      selectorData,
      getSelectValue,
    };
  },
});
</script>

<style lang="scss">
</style>