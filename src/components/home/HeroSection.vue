<template>
  <section class="hero">
    <div class="hero__name">Студия Натальи Семёновой</div>

    <h1 class="hero__title letter-spacing">Bизуальная упаковка брендов</h1>

    <h2 class="hero__subtitle">
      Сайт и визуал, который увеличит ваши продажи за счет грамотной структуры и
      крутого дизайна
    </h2>

    <ArrowLink href="tg://resolve?domain=n_smnv" class="hero__link" isNewWindow>
      Обсудить проект
    </ArrowLink>

    <div class="hero__images mobile">
      <img src="/assets/images/hero/hero-02.jpg" alt="" />
      <img src="/assets/images/hero/hero-03.jpg" alt="" />
    </div>

    <div class="hero__images desktop">
      <HeroImage v-for="(image, i) in images" :key="i" :src="image.src" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import ArrowLink from '@/components/base/ArrowLink.vue';
  import HeroImage from '@/components/HeroImage.vue';

  const images = ref([
    {
      src: '/assets/images/hero/hero-01.jpg',
    },
    {
      src: '/assets/images/hero/hero-02.jpg',
    },
    {
      src: '/assets/images/hero/hero-03.jpg',
    },
  ]);
</script>

<style lang="less" scoped>
  .hero {
    text-align: center;
    padding-top: 39px;

    &__name {
      color: @text-secondary;
    }
    &__title {
      font-size: 21px;
      line-height: 135%;
      margin-top: 2px;
    }
    &__subtitle {
      max-width: 238px;
      font-size: 13px;
      color: @text-secondary;
      margin: 20px auto 0;
    }
    &__link {
      margin-top: 30px;
    }
    &__images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px;
      margin-top: 50px;
    }
  }

  @media @large-max {
    .hero {
      &__images.desktop {
        display: none;
      }
    }
  }
  @media @large-min {
    .hero {
      padding-top: 50px;

      &__title {
        font-size: 46px;
        margin-top: 0;
      }
      &__subtitle {
        max-width: 435px;
        font-size: 15px;
        margin-top: 25px;
      }
      &__images {
        grid-template-columns: repeat(3, 1fr);
        gap: 13px;
        margin-top: 88px;
        &.mobile {
          display: none;
        }
      }
    }
  }
</style>
