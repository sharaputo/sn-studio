<template>
  <article class="portfolio-card">
    <div class="portfolio-card__image">
      <img :src="image" :alt="title" />
    </div>

    <a :href="url" class="portfolio-card__title" target="_blank">
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
    &__image {
    }
    &__title {
    }
  }
</style>
