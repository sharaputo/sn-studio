<template>
  <section class="about section-padding">
    <AppContainer>
      <div class="about__content">
        <SectionTitle title="О нас" />

        <div class="about__text">
          <p>
            Помогаем раскрыть личный бренд через дорого упакованный продукт в
            виде сайта на Taplink и Tilda и упаковку Instagram. Упаковываем
            профиль Instagram так, что на него хотят подписаться и купить.
          </p>
          <p>
            Мы уверены, что дизайн и визуал – это не только внешний вид, но и
            удобство, узнаваемость бренда, функциональность. Это возможность
            представить свой бизнес в лучшем свете и донести до своих клиентов
            его смысловое ядро.
          </p>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="less" scoped>
  .about {
    &__content {
      display: grid;
      gap: 25px;
    }
    &__text {
      display: grid;
      gap: 20px;
      color: @dove-gray;
    }
  }

  @media @xlarge-min {
    .about {
      &__content {
        grid-template-columns: 29.4vw 459px;
      }
    }
  }
</style>
