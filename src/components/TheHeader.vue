<template>
  <header class="header">
    <AppContainer class="header__container">
      <!-- Navigation -->
      <div :class="['header__nav', { _active: isMenuOpened }]">
        <nav class="nav">
          <a href="#portfolio" class="nav__link" @click="closeMenu">
            <span>Портфолио</span>
          </a>
          <a href="#services" class="nav__link" @click="closeMenu">
            <span>Услуги</span>
          </a>
          <a href="#about" class="nav__link" @click="closeMenu">
            <span>О нас</span>
          </a>
          <a href="#contacts" class="nav__link" @click="closeMenu">
            <span>Контакты</span>
          </a>
        </nav>

        <div class="contacts">
          <a
            href="https://instagram.com/natalia.semenova.studio"
            class="contact"
            target="_blank"
            @click="closeMenu">
            Instagram
          </a>
          <a
            href="tg://resolve?domain=n_smnv"
            class="contact"
            target="_blank"
            @click="closeMenu">
            Telegram
          </a>
          <a
            href="https://wa.me/79384097068"
            class="contact"
            target="_blank"
            @click="closeMenu">
            Whatsapp
          </a>
        </div>
      </div>

      <!-- Logo -->
      <div class="header__logo">
        <LogoIcon />
      </div>

      <!-- Burger menu switcher -->
      <button
        type="button"
        :class="['header__burger', { _active: isMenuOpened }]"
        @click="handleMenu">
        <span class="line line--top"></span>
        <span class="line line--bottom"></span>
      </button>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { lockBody, unlockBody } from '@/composables/useBodyLock';
  import LogoIcon from '@/components/icons/LogoIcon.vue';

  const isMenuOpened = ref(false);
  const handleMenu = () => {
    isMenuOpened.value = !isMenuOpened.value;

    if (isMenuOpened.value) {
      lockBody();
    } else {
      unlockBody();
    }
  };
  const closeMenu = () => {
    isMenuOpened.value = false;

    unlockBody();
  };
</script>

<style lang="less" scoped>
  .header {
    position: relative;
    padding: 21px 0;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__logo {
      width: 28px;
    }
    &__nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &._active {
        opacity: 1;
        transform: scale(1);
        z-index: 1;
      }
      .nav {
        display: flex;
        align-items: center;
        gap: 20px;
        &__link {
          font-size: 20px;
          text-transform: uppercase;
          color: @text-primary;
          transition: color 0.3s ease-in-out;
        }
      }
      .contacts {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 33px;
      }
      .contact {
        font-size: 14px;
        color: @text-primary;
        text-transform: uppercase;
        text-decoration: underline;
        transition: color @anim-slow;
      }
    }
    &__burger {
      position: relative;
      width: 28px;
      display: grid;
      gap: 10px;
      z-index: 10;

      .line {
        width: 100%;
        height: 2px;
        background-color: @bg-secondary;
        transform: translateY(0px);
        transition: transform @anim-slow;
      }
      &._active {
        .line--top {
          transform: translateY(6px) rotate(45deg);
        }
        .line--bottom {
          transform: translateY(-6px) rotate(-45deg);
        }
      }
    }
  }

  @media @xlarge-portrait {
    padding-top: 60px;
  }
  @media @xlarge-max {
    .header {
      &__nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        flex-direction: column;
        opacity: 0;
        padding: 160px 15px 30px;
        background-color: @bg-primary;
        transform: scale(0.9);
        transition: opacity @anim-fast, transform @anim-fast;
        overflow: auto;
        z-index: -1;

        .nav {
          flex-direction: column;
        }
        .contacts {
          margin-top: 30px;
        }
      }
    }
  }
  @media @xlarge-min {
    .header {
      padding: 39px 0;

      &__container {
        gap: 105px;
      }
      &__logo {
        width: 40px;
        position: absolute;
        top: calc(50% - 13px);
        right: calc(50% - 20px);
      }
      &__nav {
        flex-grow: 1;

        .nav {
          &__link {
            font-size: 15px;
            line-height: 117%;
          }
        }
        .contacts {
          gap: 20px;
        }
      }
      &__burger {
        display: none;
      }
    }
  }

  @media @hover {
    .header {
      &__nav {
        .nav {
          &__link {
            &:hover {
              color: @text-secondary;
            }
          }
        }
        .contact {
          &:hover {
            color: @text-secondary;
          }
        }
      }
    }
  }
</style>
