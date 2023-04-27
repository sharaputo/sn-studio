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
      image: './assets/images/portfolio/taplink/taplink-01.jpg',
      title: 'Таплинк для психолога',
      url: 'https://taplink.cc/site/p/a138a1/',
    },
    {
      image: './assets/images/portfolio/taplink/taplink-02.jpg',
      title: 'Таплинк для женских курсов',
      url: 'https://taplink.cc/site/p/a156cb/',
    },
  ]);
  const centerColumn = ref([
    {
      image: './assets/images/portfolio/taplink/taplink-03.jpg',
      title: 'Таплинк для крипто эксперта',
      url: 'https://taplink.cc/site/p/a17687/',
    },
    {
      image: './assets/images/portfolio/taplink/taplink-04.jpg',
      title: 'Таплинк для дизайнера интерьера',
      url: 'https://taplink.cc/innaazorskaya',
    },
  ]);
  const rightColumn = ref([
    {
      image: './assets/images/portfolio/taplink/taplink-05.jpg',
      title: 'Таплинк для бренда одежды',
      url: 'https://taplink.cc/site/p/a234b9/',
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
