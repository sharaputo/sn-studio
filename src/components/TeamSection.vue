<template>
  <section class="team section-padding">
    <AppContainer>
      <SectionTitle title="Команда" />

      <ul class="team__list">
        <li class="team__item">
          <article class="team-member">
            <div class="team-member__photo">
              <img src="@/assets/images/team/team-01.jpg" alt="" />
            </div>

            <div class="team-member__caption">
              <div class="team-member__name">Наталья Семёнова</div>
              <div class="team-member__occupation">Арт-директор</div>
            </div>
          </article>
        </li>

        <li class="team__item">
          <article class="team-member team-member--reversed">
            <div class="team-member__photo">
              <img src="@/assets/images/team/team-02.jpg" alt="" />
            </div>

            <div class="team-member__caption">
              <div class="team-member__name">Надежда Евкина</div>
              <div class="team-member__occupation">Веб-дизайнер</div>
            </div>
          </article>
        </li>
      </ul>
    </AppContainer>
  </section>
</template>

<style lang="less" scoped>
  .team {
    &__list {
      display: grid;
      gap: 50px;
      margin-top: 30px;
    }

    .team-member {
      display: flex;
      align-items: flex-end;
      gap: 15px;

      &__photo {
        flex: 0 0 43.9vw;
      }
      &__caption {
        letter-spacing: -0.02em;
        line-height: 95%;
        flex: 1 1 auto;
        padding-bottom: 11px;
        border-bottom: 1px solid @black;
      }
      &__occupation {
        color: @dove-gray;
        margin-top: 8px;
      }
    }
  }

  @media @xlarge-max {
    .team {
      .team-member--reversed {
        flex-direction: row-reverse;
      }
    }
  }
  @media @xlarge-min {
    .team {
      &__list {
        grid-template-columns: 1fr 1fr;
        margin-top: 50px;
      }

      .team-member {
        gap: 23px;

        &__photo {
          flex: 0 0 320px;
        }
        &__caption {
          padding-bottom: 15px;
        }
        &__name {
          font-size: 16px;
        }
        &__occupation {
          font-size: 16px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
