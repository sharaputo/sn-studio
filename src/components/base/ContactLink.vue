<template>
  <a :href="href" class="contact-link" :target="isNewWindow ? '_blank' : ''">
    <ArrowIcon />
    <slot />
  </a>
</template>

<script setup lang="ts">
  import ArrowIcon from '@/components/icons/ArrowIcon.vue';

  interface Props {
    href: string;
    isNewWindow?: boolean;
  }
  defineProps<Props>();
</script>

<style lang="less" scoped>
  .contact-link {
    position: relative;
    display: inline-grid;
    grid-template-columns: 13px 1fr;
    align-items: center;
    gap: 11px;
    font-size: 20px;
    line-height: 135%;
    text-transform: uppercase;
    color: @text-light;
    padding-bottom: 5px;
    overflow: hidden;

    &::after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: @bg-primary;
      transition: transform @anim-slow;
    }

    svg {
      width: 100%;
      fill: @white;
    }

    @media @xlarge-min {
      grid-template-columns: 18px 1fr;
      font-size: 30px;
    }
  }

  @media @hover {
    .contact-link:hover {
      &::after {
        transform: translateX(-105%);
      }
    }
  }
</style>
