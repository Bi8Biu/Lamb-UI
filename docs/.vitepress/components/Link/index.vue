<!--
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-05 09:30:49
 * @LastEditTime: 2022-03-05 10:25:25
 * @FilePath: \Lamb-UI\Lamb-UI\Link\index.vue
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
    :target="disabled ? '_self' : target"
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

<style lang="scss" scoped>
.lb-link {
  color: #606266;
  cursor: pointer;
  font-size: 14px;
  margin: 10px;
  text-decoration: none;
  &:hover {
    color: #409eff;
  }
  &.primary {
    color: #409eff;
  }
  &.success {
    color: #67c23a;
  }
  &.warning {
    color: #e6a23c;
  }
  &.danger {
    color: #f56c6c;
  }
  &.info {
    color: #909399;
  }

  &:hover.is-underline {
    // text-decoration: underline;
    border-bottom: 1px solid #409eff;
    &.is-underline.primary {
      border-bottom: 1px solid #409eff;
    }
    &.is-underline.success {
      border-bottom: 1px solid #67c23a;
    }
    &.is-underline.warning {
      border-bottom: 1px solid #e6a23c;
    }
    &.is-underline.danger {
      border-bottom: 1px solid #f56c6c;
    }
    &.is-underline.info {
      border-bottom: 1px solid #909399;
    }
  }

  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    border: none !important;
  }
  &.is-disabled.primary {
    color: #a0cfff;
  }
  &.is-disabled.success {
    color: #b3e19d;
  }
  &.is-disabled.warning {
    color: #f3d19e;
  }
  &.is-disabled.danger {
    color: #fab6b6;
  }
  &.is-disabled.info {
    color: #c8c9cc;
  }
}
</style>