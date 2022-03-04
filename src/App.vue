<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-28 15:30:37
 * @LastEditTime: 2022-03-04 18:13:58
 * @FilePath: \Lamb-UI\src\App.vue
-->

<template>
  <lb-selector
    style="margin: 100px 500px"
    :data="selectorData"
    :selected="getSelectValue"
    placeholder="请选择框架"
  ></lb-selector>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
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