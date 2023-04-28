<template>
  <article class="portfolio-card">
    <div class="portfolio-card__image animated" @click.prevent="showLightbox">
      <img :src="src" :alt="title" />
    </div>

    <button
      type="button"
      class="portfolio-card__title letter-spacing"
      @click.prevent="showLightbox">
      <span>
        {{ title }}
      </span>

      <ArrowIcon />
    </button>
  </article>

  <vue-easy-lightbox
    :visible="isLightboxVisible"
    :imgs="lightboxImages"
    :loop="true"
    :moveDisabled="true"
    :rotateDisabled="true"
    :swipeTolerance="10"
    :minZoom="1"
    @hide="onLightboxClose">
    <template v-slot:prev-btn="{ prev }">
      <button
        type="button"
        class="lightbox-arrow lightbox-arrow--prev"
        @click="prev">
        <LightboxArrow style="transform: rotate(180deg)" />
      </button>
    </template>

    <template v-slot:next-btn="{ next }">
      <button
        type="button"
        class="lightbox-arrow lightbox-arrow--next"
        @click="next">
        <LightboxArrow />
      </button>
    </template>
  </vue-easy-lightbox>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import ArrowIcon from '@/components/icons/ArrowIcon.vue';
  import LightboxArrow from '@/components/icons/LightboxArrow.vue';

  interface Props {
    src: string;
    title: string;
    lightboxImages: string[];
  }

  defineProps<Props>();

  // Lighbox related logic
  const isLightboxVisible = ref(false);
  const showLightbox = () => {
    isLightboxVisible.value = true;
  };
  const onLightboxClose = () => (isLightboxVisible.value = false);
</script>

<style lang="less" scoped>
  .portfolio-card {
    display: grid;
    gap: 10px;

    &__image {
      cursor: pointer;
    }
    &__title {
      display: grid;
      grid-template-columns: 1fr 10px;
      align-items: center;
      gap: 20px;
      font-size: 14px;
      line-height: 95%;
      text-align: left;
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
