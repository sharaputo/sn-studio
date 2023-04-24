<template>
  <section class="portfolio section-padding" id="portfolio">
    <AppContainer>
      <div class="portfolio__header">
        <SectionTitle title="Портфолио" />

        <div class="portfolio__tabs">
          <RouterLink :to="{ name: 'taplink' }" class="portfolio__link">
            Taplink
          </RouterLink>
          <RouterLink :to="{ name: 'tilda' }" class="portfolio__link">
            Tilda
          </RouterLink>
          <RouterLink :to="{ name: 'instagram' }" class="portfolio__link">
            Упаковка Instagram
          </RouterLink>
        </div>
      </div>

      <div class="portfolio__content">
        <RouterView />
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
  .portfolio {
    &__header {
      display: grid;
      gap: 25px;
    }
    &__tabs {
      display: grid;
      grid-template-columns: 103px 61px 151px;
      gap: 7px;
    }
    &__link {
      font-size: 12px;
      line-height: 117%;
      text-align: center;
      text-transform: uppercase;
      color: @text-secondary;
      padding: 5px 0;
      border-radius: 38px;
      border: 1px solid @black;
      transition: color @anim-slow, background-color @anim-slow;

      &.router-link-exact-active {
        color: @text-light;
        background-color: @bg-secondary;
      }
    }
    &__content {
      margin-top: 30px;
    }
  }

  @media @xlarge-min {
    .portfolio {
      &__header {
        grid-template-columns: 133px 1fr;
        gap: 57px;
      }
    }
  }
</style>
