<template>
  <h2 :class="['section-title', 'letter-spacing', color]">
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    color?: string;
  }
  defineProps<Props>();
</script>

<style lang="less" scoped>
  .section-title {
    font-size: 16px;
    line-height: 95%;

    &.white {
      color: @white;
    }

    @media @xlarge-min {
      font-size: 25px;
    }
  }
</style>
