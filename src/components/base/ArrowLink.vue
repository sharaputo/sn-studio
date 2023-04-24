<template>
  <a
    :href="href"
    :class="['arrow-link', isWhite ? 'arrow-link--white' : '']"
    :target="isNewWindow ? '_blank' : ''">
    <ArrowIcon />
    <slot />
  </a>
</template>

<script setup lang="ts">
  import ArrowIcon from '@/components/icons/ArrowIcon.vue';

  interface Props {
    href: string;
    isWhite?: boolean;
    isNewWindow?: boolean;
  }
  defineProps<Props>();
</script>

<style lang="less" scoped>
  .arrow-link {
    position: relative;
    height: 24px;
    display: inline-grid;
    grid-template-columns: 9px 1fr;
    align-items: center;
    gap: 7px;
    font-size: 14px;
    text-transform: uppercase;
    color: @text-primary;

    svg {
      width: 9px;
      fill: @black;
    }
    &::after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: @bg-secondary;
      transition: background-color @anim-slow;
    }
  }

  .arrow-link--white {
    color: @text-light;
    svg {
      fill: @white;
    }
    &::after {
      background-color: @bg-primary;
    }
  }
</style>
