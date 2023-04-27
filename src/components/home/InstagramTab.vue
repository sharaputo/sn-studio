<template>
  <Transition>
    <div class="grid">
      <PortfolioInstagramCard
        v-for="(item, i) in data"
        :key="i"
        :image="item.image"
        :title="item.title"
        :lightboxImages="item.images" />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import PortfolioInstagramCard from '@/components/PortfolioInstagramCard.vue';

  const data = ref([
    {
      image: './assets/images/portfolio/instagram/instagram-01.jpg',
      title: 'Визуал для бюро архитектуры и дизайна',
      images: [
        './assets/images/portfolio/instagram/lightbox/01-01.jpg',
        './assets/images/portfolio/instagram/lightbox/01-02.jpg',
      ],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-02.jpg',
      title: 'Визуальная концепция для личного профиля',
      images: ['./assets/images/portfolio/instagram/lightbox/02-01.jpg'],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-03.jpg',
      title: 'Визуальная концепция для дизайнера интерьера',
      images: ['./assets/images/portfolio/instagram/lightbox/03-01.jpg'],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-04.jpg',
      title: 'Визуал для крипто эксперта',
      images: ['./assets/images/portfolio/instagram/lightbox/04-01.jpg'],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-05.jpg',
      title: 'Визуальная концепция для личного профиля',
      images: ['./assets/images/portfolio/instagram/lightbox/05-01.jpg'],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-06.jpg',
      title: 'Визуальная концепция для личного профиля',
      images: ['./assets/images/portfolio/instagram/lightbox/06-01.jpg'],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-07.jpg',
      title: 'Визуал для кардиолога',
      images: ['./assets/images/portfolio/instagram/lightbox/07-01.jpg'],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-08.jpg',
      title: 'Визуал для мебельного производства',
      images: [
        './assets/images/portfolio/instagram/lightbox/08-01.jpg',
        './assets/images/portfolio/instagram/lightbox/08-02.jpg',
      ],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-09.jpg',
      title: 'Визуал для крипто эксперта',
      images: ['./assets/images/portfolio/instagram/lightbox/09-01.jpg'],
    },
    {
      image: './assets/images/portfolio/instagram/instagram-10.jpg',
      title: 'Визуал для студии интерьерного дизайна',
      images: ['./assets/images/portfolio/instagram/lightbox/10-01.jpg'],
    },
  ]);
</script>

<style lang="less" scoped>
  .grid {
    display: grid;
    gap: 35px;
  }

  @media @xlarge-min {
    .grid {
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      column-gap: 25px;
      row-gap: 50px;
    }
  }
</style>
