<template>
  <section class="contacts section-padding" id="contacts">
    <AppContainer>
      <SectionTitle title="Контакты" color="white" />

      <div class="contacts__body">
        <ul class="contacts__links">
          <li>
            <ContactLink href="tg://resolve?domain=n_smnv" isNewWindow>
              Telegram
            </ContactLink>
          </li>
          <li>
            <ContactLink
              href="https://www.instagram.com/natalia.semenova.studio/?hl=ru"
              isNewWindow>
              Instagram
            </ContactLink>
          </li>
          <li>
            <ContactLink href="mailto: smnvn97@gmail.com" isNewWindow>
              Email
            </ContactLink>
          </li>
          <li>
            <ContactLink href="https://wa.me/79384097068" isNewWindow>
              Whatsapp
            </ContactLink>
          </li>
        </ul>

        <a
          href="https://www.instagram.com/websmnv/?hl=ru"
          class="contacts__btn"
          target="_blank">
          <span>Связаться</span>
        </a>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
  import ContactLink from '@/components/base/ContactLink.vue';
</script>

<style lang="less" scoped>
  .contacts {
    background-color: @bg-secondary;
    padding: 75px 0;

    &__body {
      display: flex;
      align-items: center;
      margin-top: 50px;
    }
    &__links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 25px;
    }
    &__btn {
      display: block;
      width: 100%;
      font-size: 18px;
      text-align: center;
      text-transform: uppercase;
      color: @text-light;
      background: @bg-secondary;
      padding: 32px 0;
      border: 1px solid @white;
      border-radius: 78px;
      transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
  }

  @media @xlarge-max {
    .contacts {
      &__body {
        flex-direction: column;
      }
      &__links {
        width: 100%;
      }
      &__btn {
        margin-top: 40px;
      }
    }
  }
  @media @xlarge-min {
    .contacts {
      padding: 120px 0;
      &__body {
        justify-content: space-between;
        margin-top: 80px;
      }
      &__links {
        column-gap: 261px;
        row-gap: 50px;
      }
      &__btn {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 423px;
        font-size: 20px;
        padding: 50px 0;
      }
    }
  }

  @media @hover {
    .contacts {
      &__btn:hover {
        color: @black;
        background-color: @text-light;
      }
    }
  }
</style>
