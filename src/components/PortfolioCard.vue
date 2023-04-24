<template>
  <article class="portfolio-card">
    <a :href="url" class="portfolio-card__image" target="_blank">
      <img :src="image" :alt="title" />
    </a>

    <a :href="url" class="portfolio-card__title letter-spacing" target="_blank">
      <span>
        {{ title }}
      </span>

      <ArrowIcon />
    </a>
  </article>
</template>

<script setup lang="ts">
  import ArrowIcon from '@/components/icons/ArrowIcon.vue';

  interface Props {
    image: string;
    title: string;
    url: string;
  }

  defineProps<Props>();
</script>

<style lang="less" scoped>
  .portfolio-card {
    display: grid;
    gap: 10px;

    &__title {
      display: grid;
      grid-template-columns: 1fr 10px;
      align-items: center;
      gap: 20px;
      font-size: 14px;
      line-height: 95%;
      color: @text-primary;
      padding-bottom: 7px;
      border-bottom: 1px solid @black;
    }
  }

  @media @xlarge-min {
    .portfolio-card {
      gap: 20px;

      &__title {
        font-size: 16px;
        padding-bottom: 15px;
      }
    }
  }
</style>
