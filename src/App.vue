<template>
  <TheHeader />

  <main class="main">
    <RouterView />
  </main>

  <TheFooter />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  // Components
  import TheHeader from '@/components/TheHeader.vue';
  import TheFooter from '@/components/TheFooter.vue';

  const setWindowHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  onMounted(() => {
    setWindowHeight();
  });
</script>

<style lang="less">
  body {
    width: 100%;
    min-width: 320px;
    height: calc(var(--vh, 1vh) * 100);
    font-family: @font-primary;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
    overflow-wrap: break-word;
    color: @black;
    background-color: @white;
    overflow-x: hidden;

    @media screen and (min-width: 1200px) {
      font-size: 15px;
    }
  }

  body.locked {
    position: fixed;
    top: var(--scroll-y);
    right: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }

  .letter-spacing {
    letter-spacing: -0.02em;
  }
  .section-padding {
    padding: 40px 0;
  }

  @media @xlarge-max {
    .vel-btns-wrapper {
      position: absolute !important;
      bottom: 10px;
      right: 10px;
      left: 10px;
      display: grid;
      grid-template-columns: 37px 37px;
      justify-content: end;
      gap: 10px;
    }
    .btn__close {
      display: none !important;
    }
    .vel-toolbar {
      display: none !important;
    }
  }
  @media @xlarge-min {
    .section-padding {
      padding: 60px 0;
    }
    .lightbox-arrow {
      position: absolute;
      top: calc(50% - 17px);
    }
    .lightbox-arrow--prev {
      left: 20px;
    }
    .lightbox-arrow--next {
      right: 20px;
    }
  }
</style>
