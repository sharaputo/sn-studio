<template>
  <section class="instagram section-padding">
    <AppContainer>
      <SectionTitle title="Мы в Instagram" />
    </AppContainer>

    <div class="instagram__content">
      <a
        href="https://www.instagram.com/p/CYgmTuXgqQD/"
        class="instagram__link"
        target="_blank">
        <img
          src="@/assets/images/instagram/instagram-01.jpg"
          alt="пост из инстаграмм" />
      </a>
      <a
        href="https://www.instagram.com/p/CgBu05hjsnC/"
        class="instagram__link"
        target="_blank">
        <img
          src="@/assets/images/instagram/instagram-02.jpg"
          alt="пост из инстаграмм" />
      </a>
      <a
        href="https://www.instagram.com/p/Ckpry_NjMFX/"
        class="instagram__link"
        target="_blank">
        <img
          src="@/assets/images/instagram/instagram-03.jpg"
          alt="пост из инстаграмм" />
      </a>
      <a
        href="https://www.instagram.com/p/CmV8uUrjy1S/"
        class="instagram__link"
        target="_blank">
        <img
          src="@/assets/images/instagram/instagram-04.jpg"
          alt="пост из инстаграмм" />
      </a>
    </div>
  </section>
</template>

<style lang="less" scoped>
  .instagram {
    padding-bottom: 0;

    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 25px;
    }
    &__link {
      display: block;
    }
  }

  @media @large-max {
    .instagram {
      &__link {
        &:nth-child(even) {
          display: none;
        }
      }
    }
  }
  @media @large-min {
    .instagram {
      &__content {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
</style>
