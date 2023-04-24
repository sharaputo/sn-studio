<template>
  <div class="tilda-grid">
    <div class="tilda-grid__column">
      <PortfolioCard
        image="assets/images/portfolio/tilda/tilda-01"
        title="PortfolioCard"
        url="https://doronina-design.com/" />
    </div>
    <div class="tilda-grid__column"></div>
    <div class="tilda-grid__column"></div>
  </div>
</template>

<script lang="ts" setup>
  import PortfolioCard from '@/components/PortfolioCard.vue';
</script>

<style lang="less" scoped>
  .tilda-grid {
    display: grid;
    gap: 35px;

    &__column {
    }
  }

  @media @xlarge-min {
    .tilda-grid {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 25px;
      row-gap: 50px;
    }
  }
</style>
