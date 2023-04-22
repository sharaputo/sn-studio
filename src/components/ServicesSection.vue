<template>
  <section class="services">
    <AppContainer>
      <SectionTitle title="Услуги" />

      <ul class="services__list">
        <li class="services__item">
          <article class="service">
            <header class="service__header">
              <h3 class="service__title">Сайт на Таплинк</h3>

              <ServiceHint :list="hintsList.taplink" />
            </header>

            <p class="service__description">
              Таплинк – идеальное решение для любого бизнеса, чтобы
              продемонстрировать свои товары или услуги для продвижения в
              соцсетях при помощи таргета.
            </p>

            <footer class="service__footer">
              <ArrowLink
                href="https://docs.google.com/forms/d/e/1FAIpQLScY3RmA8G7SzkGXXl81uwL5LwaTPd5tX8G0m3nPZyXXTTjn8w/viewform?usp=sf_link"
                isNewWindow
                isWhite>
                Заполнить бриф
              </ArrowLink>

              <div class="service__days">(от 7 дней)</div>
            </footer>
          </article>
        </li>

        <li class="services__item">
          <article class="service">
            <header class="service__header">
              <h3 class="service__title">Сайт на Тильде</h3>

              <ServiceHint :list="hintsList.website" />
            </header>

            <p class="service__description">
              Тильда – отличное решение для любого вида бизнеса, чтобы
              продемонстрировать свои товары или услуги с последующим
              продвижением в соцсетях и поисковых системах при помощи таргета и
              SEO, с возможностью создания адаптивного дизайна под все виды
              устройств.
            </p>

            <footer class="service__footer">
              <ArrowLink href="tg://resolve?domain=n_smnv" isNewWindow isWhite>
                Оставить заявку
              </ArrowLink>

              <div class="service__days">
                <span>(от 14 дней)</span>
              </div>
            </footer>
          </article>
        </li>

        <li class="services__item">
          <article class="service">
            <header class="service__header">
              <h3 class="service__title">Упаковка Instagram</h3>

              <ServiceHint :list="hintsList.instagram" />
            </header>

            <p class="service__description">
              Уникальный и запоминающийся визуал для коммерческих и личных
              профилей в Instagram, который выделит вас среди конкурентов и
              повысит продажи.
            </p>

            <footer class="service__footer">
              <ArrowLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSe8nuapFHZ4ggu67t8T_-hjtXKU4l5Vcnxi-f1tnIZcwBeRpw/viewform?usp=sf_link"
                isNewWindow
                isWhite>
                Заполнить бриф
              </ArrowLink>

              <div class="service__days">
                <span>(от 4 дней)</span>
              </div>
            </footer>
          </article>
        </li>
      </ul>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import ArrowLink from '@/components/base/ArrowLink.vue';
  import ServiceHint from '@/components/base/ServiceHint.vue';

  const hintsList = ref({
    taplink: [
      'Анализ ниши и конкурентов',
      'Проработка структуры',
      'Подбор референсов, цветовой палитры, шрифтов, индивидуальных элементов оформления, формирование дизайн-концепции',
      '2 итерации бесплатных правок',
      'Верстка на Таплинк',
      'Настройка функционала',
      'Инструкция по редактированию Таплинк',
    ],
    website: [
      'Анализ ниши, конкурентов',
      'Проработка структуры, карта сайта',
      'Подбор референсов, цветовой палитры, шрифтов, индивидуальных элементов оформления',
      'Текстовый прототип',
      'Дизайн-концепция',
      'Адаптив под мобильные разрешения',
      '2 итерации бесплатных правок на каждом этапе работы',
      'Верстка на Тильда под все устройства',
      'Настройка функционала и анимации',
      'Базовое SEO для хорошей индексации',
      'Инструкция по пользованию сайтом',
    ],
    instagram: [
      'Анализ визуала аккаунта. Анализ вашей ниши, конкурентов',
      'Формирование новой концепции и стилистики аккаунта',
      'Подбор цветовой палитры, фирменных шрифтов, индивидуальных элементов оформления',
      'Составление ленты из ваших фотографий (желательно не менее 30 шт). Если ваших фото недостаточно или их нет совсем, я отправляю вам подбор референсов, по которым вы сможете сделать фотографии для своего профиля',
      'Составление визуала ленты на основе снимков, созданных по референсам',
      'Создание дизайна текстовых блоков (при необходимости)',
      'Оформление аватара профиля (при необходимости)',
      'Оформление обложек для актуальных сторис (при необходимости)',
      'Отправка визуальной концепции для дальнейшего использования с инструкцией cсылкой на Google Диск и Figma',
    ],
  });
</script>

<style lang="less" scoped>
  .services {
    color: @white;
    background-color: @black;
    padding: 80px 0;

    &__list {
      display: grid;
      gap: 50px;
      margin-top: 30px;
    }

    .service {
      color: @white;
      padding-top: 20px;
      border-top: 1px solid @silver-chalice;

      &__title {
        font-size: 20px;
        line-height: 95%;
        letter-spacing: -0.05em;
        text-transform: uppercase;
      }
      &__description {
        color: @silver-chalice;
      }
      &__days {
        font-size: 15px;
        line-height: 131%;
      }
    }
  }

  @media @xlarge-max {
    .services {
      .service {
        &__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        &__description {
          margin-top: 20px;
        }
        &__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 50px;
        }
      }
    }
  }
  @media @xlarge-min {
    .services {
      padding: 120px 0;

      .service {
        display: grid;
        grid-template-columns: 29.4vw 459px 1fr;
        gap: 20px;
        padding-top: 22px;

        &__header {
          display: grid;
          gap: 20px;
        }
        &__title {
          font-size: 30px;
        }
        &__description {
          font-size: 16px;
        }
        &__footer {
          display: grid;
          gap: 29px;
          text-align: right;
          margin-left: auto;
        }
        &__days {
          font-size: 16px;
        }
      }
    }
  }
</style>
