<template>
  <div class="masonry-grid">
    <div class="masonry-grid__column">
      <PortfolioCard
        v-for="(item, i) in leftColumn"
        :key="i"
        :src="item.src"
        :title="item.title"
        :url="item.url" />
    </div>

    <div class="masonry-grid__column">
      <PortfolioCard
        v-for="(item, i) in centerColumn"
        :key="i"
        :src="item.src"
        :title="item.title"
        :url="item.url" />
    </div>

    <div class="masonry-grid__column">
      <PortfolioCard
        v-for="(item, i) in rightColumn"
        :key="i"
        :src="item.src"
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
      src: '/assets/images/portfolio/tilda/tilda-01.jpg',
      title: 'Сайт для дизайнера интерьера',
      url: 'https://doronina-design.com/',
    },
    {
      src: '/assets/images/portfolio/tilda/tilda-02.jpg',
      title: 'Сайт для мебельного цеха',
      url: 'https://madeideal.ru/',
    },
    {
      src: '/assets/images/portfolio/tilda/tilda-03.jpg',
      title: 'Интернет-магазин уходовой косметики',
      url: 'https://www.behance.net/gallery/116699961/Safisa-organic-skincare-cosmetics-e-commerce',
    },
  ]);
  const centerColumn = ref([
    {
      src: '/assets/images/portfolio/tilda/tilda-04.jpg',
      title: 'Сайт для бюро архитектуры и дизайна',
      url: 'https://azorskaya.ru/en',
    },
    {
      src: '/assets/images/portfolio/tilda/tilda-05.jpg',
      title: 'Сайт для мастера перманентного макияжа',
      url: 'https://www.albeautybar.com/',
    },
    {
      src: '/assets/images/portfolio/tilda/tilda-06.jpg',
      title: 'Сайт для студии нестандартных тортов',
      url: 'https://artandsweets.ru/',
    },
  ]);
  const rightColumn = ref([
    {
      src: '/assets/images/portfolio/tilda/tilda-07.jpg',
      title: 'Сайт для астролога',
      url: 'https://alenabaklik.ru/',
    },
    {
      src: '/assets/images/portfolio/tilda/tilda-08.jpg',
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
