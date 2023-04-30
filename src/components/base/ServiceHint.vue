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
      <ul class="service-hint__list" v-if="isHintShown" @click="toggleHint">
        <li class="service-hint__item" v-for="(item, i) in list" :key="i">
          {{ item }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';

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
  const onHintClick = () => {
    if (!desktopRes.matches && touchPointer.matches) {
      toggleHint();
    }
  };
  const onHintHover = () => {
    if (desktopRes.matches && mousePointer.matches) {
      toggleHint();
    }
  };

  const isActive = computed(() => ({
    'service-hint--active': isHintShown.value,
  }));
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
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }
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
