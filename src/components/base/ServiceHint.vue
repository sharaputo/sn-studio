<template>
  <div class="service-hint">
    <button type="button" class="service-hint__button" @click="toggleHint">
      Что входит
    </button>

    <ul class="service-hint__list" v-if="isHintShown">
      <li class="service-hint__item" v-for="(item, i) in list" :key="i">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  interface Props {
    list: string[];
  }
  defineProps<Props>();

  const isHintShown = ref(false);
  const toggleHint = () => {
    isHintShown.value = !isHintShown.value;
  };
</script>

<style lang="less" scoped>
  .service-hint {
    z-index: 10;

    &__button {
    }
    &__list {
      color: @black;
      background-color: @white;
      padding: 15px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    &__item {
    }
  }
  @media @medium-max {
    .service-hint {
      &__button {
        color: @white;
      }
      &__list {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      }
      &__item {
      }
    }
  }
</style>
