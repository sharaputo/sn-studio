<template>
  <TheHeader />

  <main class="main">
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <ServicesSection />
    <TeamSection />
    <InstagramSection />
    <ContactsSection />
  </main>

  <TheFooter />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  // Components
  import TheHeader from '@/components/TheHeader.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import PortfolioSection from '@/components/PortfolioSection.vue';
  import ServicesSection from '@/components/ServicesSection.vue';
  import TeamSection from '@/components/TeamSection.vue';
  import InstagramSection from '@/components/InstagramSection.vue';
  import ContactsSection from '@/components/ContactsSection.vue';
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

  .letter-spacing {
    letter-spacing: -0.03em;
  }
  .section-padding {
    padding: 40px 0;
  }

  @media @xlarge-min {
    .section-padding {
      padding: 60px 0;
    }
  }
</style>
