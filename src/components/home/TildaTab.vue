<template>
  <div class="masonry-grid">
    <div class="masonry-grid__column">
      <PortfolioCard
        v-for="(item, i) in leftColumn"
        :key="i"
        :image="item.image"
        :title="item.title"
        :url="item.url" />
    </div>

    <div class="masonry-grid__column">
      <PortfolioCard
        v-for="(item, i) in centerColumn"
        :key="i"
        :image="item.image"
        :title="item.title"
        :url="item.url" />
    </div>

    <div class="masonry-grid__column">
      <PortfolioCard
        v-for="(item, i) in rightColumn"
        :key="i"
        :image="item.image"
        :title="item.title"
        :url="item.url" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import PortfolioCard from '@/components/PortfolioCard.vue';

  const leftColumn = ref([
    {
      image: './assets/images/portfolio/tilda/tilda-01.jpg',
      title: 'Сайт для дизайнера интерьера',
      url: 'https://doronina-design.com/',
    },
    {
      image: './assets/images/portfolio/tilda/tilda-02.jpg',
      title: 'Сайт для мебельного цеха',
      url: 'https://madeideal.ru/',
    },
    {
      image: './assets/images/portfolio/tilda/tilda-03.jpg',
      title: 'Интернет-магазин уходовой косметики',
      url: 'https://www.behance.net/gallery/116699961/Safisa-organic-skincare-cosmetics-e-commerce',
    },
  ]);
  const centerColumn = ref([
    {
      image: './assets/images/portfolio/tilda/tilda-04.jpg',
      title: 'Сайт для бюро архитектуры и дизайна',
      url: 'https://azorskaya.ru/en',
    },
    {
      image: './assets/images/portfolio/tilda/tilda-05.jpg',
      title: 'Сайт для мастера перманентного макияжа',
      url: 'https://www.albeautybar.com/',
    },
    {
      image: './assets/images/portfolio/tilda/tilda-06.jpg',
      title: 'Сайт для студии нестандартных тортов',
      url: 'https://artandsweets.ru/',
    },
  ]);
  const rightColumn = ref([
    {
      image: './assets/images/portfolio/tilda/tilda-07.jpg',
      title: 'Сайт для астролога',
      url: 'https://alenabaklik.ru/',
    },
    {
      image: './assets/images/portfolio/tilda/tilda-08.jpg',
      title: 'Сайт для дизайнера интерьера',
      url: 'http://bellavitaa.tilda.ws/',
    },
  ]);
</script>

<style lang="less" scoped>
  .masonry-grid {
    display: grid;
    gap: 35px;

    &__column {
      display: grid;
      gap: 35px;
    }
  }

  @media @xlarge-min {
    .masonry-grid {
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      column-gap: 25px;
      row-gap: 50px;
    }
  }
</style>
