<template>
  <section class="portfolio" id="portfolio">
    <AppContainer>
      <div class="portfolio__header">
        <SectionTitle title="Портфолио" />

        <div class="portfolio__tabs">
          <RouterLink :to="{ name: 'taplink' }">Taplink</RouterLink>
          <RouterLink :to="{ name: 'tilda' }">Tilda</RouterLink>
          <RouterLink :to="{ name: 'instagram' }">
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

<style lang="less" scoped></style>
