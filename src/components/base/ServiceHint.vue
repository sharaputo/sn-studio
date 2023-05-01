<template>
  <div :class="['service-hint', isActive]">
    <button
      type="button"
      class="service-hint__button"
      @click.prevent="onHintClick"
      @mouseenter="onHintHover"
      @mouseleave="onHintHover">
      Что входит
    </button>

    <Transition name="slide-up">
      <ul class="service-hint__list" v-if="isHintShown">
        <li class="service-hint__item" v-for="(item, i) in list" :key="i">
          {{ item }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  interface Props {
    list: string[];
  }
  defineProps<Props>();

  const isHintShown = ref(false);
  const toggleHint = () => {
    isHintShown.value = !isHintShown.value;
  };

  const desktopRes = window.matchMedia('(min-width: 1200px)');
  const mousePointer = window.matchMedia('(pointer: fine)');
  const touchPointer = window.matchMedia('(pointer: coarse)');
  const scrolledFromTop = ref(0);
  const onHintClick = () => {
    if (!desktopRes.matches && touchPointer.matches) {
      scrolledFromTop.value = window.scrollY;
      toggleHint();
    }
  };
  const onHintHover = () => {
    if (desktopRes.matches && mousePointer.matches) {
      toggleHint();
    }
  };
  const closeHint = () => {
    if (!desktopRes.matches && touchPointer.matches) {
      const positionFromTop = window.scrollY;

      if (positionFromTop - scrolledFromTop.value > 50)
        isHintShown.value = false;
      if (positionFromTop < scrolledFromTop.value) {
        isHintShown.value = false;
      }

      isHintShown.value = false;
    }
  };

  const isActive = computed(() => ({
    'service-hint--active': isHintShown.value,
  }));

  onMounted(() => {
    window.addEventListener('scroll', closeHint);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', closeHint);
  });
</script>

<style lang="less" scoped>
  .service-hint {
    position: relative;
    z-index: 10;

    &__button {
      position: relative;
      font-size: 14px;
      text-decoration: underline;
      color: @text-light;
      z-index: 1;
    }
    &__list {
      color: @text-primary;
      background-color: @bg-primary;
      padding: 15px;
      z-index: 20;
    }
    &__item {
      font-size: 15px;
      &:before {
        content: '–';
        padding-right: 5px;
      }
    }

    &--active {
      z-index: 20;
    }
  }

  @media @large-max {
    .service-hint {
      &__list {
        position: fixed;
        right: 0;
        bottom: 0;
        padding-top: 50px;
        padding-bottom: 30px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;

        &::before {
          content: '';
          position: absolute;
          top: 20px;
          left: calc(50% - 50px);
          width: 100px;
          height: 3px;
          background-color: @dove-gray;
          opacity: 0.5;
          border-radius: 10px;
          z-index: 10;
        }
      }
    }
    .service-hint--active .service-hint__list::before {
      animation: pop-down @anim-long 0.5s;
    }

    .slide-up-enter-active {
      animation: slide-up @anim-slow;
    }
    .slide-up-leave-active {
      animation: slide-up @anim-slow reverse;
    }
    @keyframes slide-up {
      0% {
        max-height: 0;
      }
      100% {
        max-height: 100%;
      }
    }
  }
  @media @large-min {
    .service-hint {
      filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.25));

      &__button {
        font-size: 16px;
      }
      &__list {
        position: absolute;
        top: 30px;
        left: 0;
        width: 390px;
        padding: 30px;
        border-radius: 10px;
      }
    }

    .slide-up-enter-active {
      animation: appear @anim-slow;
    }
    .slide-up-leave-active {
      animation: appear @anim-slow reverse;
    }
    @keyframes appear {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
</style>
<style>
  @keyframes pop-down {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(2px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
