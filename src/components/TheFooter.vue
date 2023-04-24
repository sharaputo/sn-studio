<template>
  <footer class="footer">
    <AppContainer>
      <div class="footer__body">
        <div class="footer__name">&copy; Natalia Semenova {{ year }}</div>
        <a href="#top" class="footer__top">
          <span>Наверх</span>
          <ArrowUpIcon />
        </a>
      </div>
    </AppContainer>
  </footer>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // Components
  import ArrowUpIcon from '@/components/icons/ArrowUpIcon.vue';

  const year = ref(new Date().getFullYear());
</script>

<style lang="less" scoped>
  .footer {
    background: @bg-secondary;

    &__body {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding-top: 15px;
      padding-bottom: 30px;
      border-top: 1px solid @white;
    }
    &__name {
      font-size: 15px;
      color: @text-light;
    }
    &__top {
      display: grid;
      grid-template-columns: 1fr 10px;
      align-items: center;
      gap: 10px;
      font-size: 15px;
      color: @text-light;
      transition: color @anim-slow;

      svg {
        fill: @white;
        transition: fill @anim-slow;
      }
    }
  }

  @media @xlarge-max {
    .footer {
      &__name {
        flex-basis: 125px;
      }
    }
  }
  @media @xlarge-min {
    .footer {
      &__body {
        padding-top: 20px;
        padding-bottom: 43px;
      }
      &__name {
        font-size: 16px;
      }
      &__top {
        font-size: 16px;
      }
    }
  }
</style>
