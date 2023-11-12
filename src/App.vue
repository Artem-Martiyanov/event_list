<template>
  <section class="wrapper">

    <header class="main-header">
      <h1 class="main-title">Cекция A</h1>
      <p class="main-date">ПТ, 13:24</p>
    </header>

    <ul class="event-list">
      <li class="event-list__item event-item event-list__item--active">
        <div class="event-list__item-inner">
          <div class="progress-bar">
            <span class="progress-bar__line"></span>
          </div>
          <header class="event-item__header">
            <p class="event-item__time">13:00-13:40</p>
            <span class="event-item__countdown">осталось 16 мин</span>
          </header>
          <ul class="event-item__authors-list">
            <li class="event-item__author">
              <div class="event-item__author-avatar">
                <img src="" alt="Анна Кипиани.">
              </div>
              <div class="event-item__author-description">
                <p class="event-item__author-name">Анна Кипиани</p>
                <p class="event-item__author-job">Systems Education</p>
              </div>
            </li>
            <li class="event-item__author">
              <div class="event-item__author-avatar">
                <img src="" alt="Иван Петровский-Разумовский.">
              </div>
              <div class="event-item__author-description">
                <p class="event-item__author-name">Иван Петровский-Разумовский</p>
                <p class="event-item__author-job">X5 Group</p>
              </div>
            </li>
          </ul>
          <h2 class="event-item__title">
            Достучаться до небес: как&nbsp;выстроить эффективное взаимодействие с «непростым» заказчиком
          </h2>
          <footer class="event-item__footer">
            <ul class="event-item__badge-list">
              <li class="event-item__badge event-item__badge--accent">
                секц. доклад
              </li>
              <li class="event-item__badge">
                рус
              </li>
              <li class="event-item__badge event-item__badge--fz-small">
                Hr, развитие карьеры и профессиональный рост
              </li>
            </ul>
          </footer>
        </div>
      </li>
      <li class="event-list__item event-item event-list__item--simple">
        <div class="event-list__item-inner">
          <header class="event-item__header">
            <p class="event-item__time">13:40-14:25</p>
            <h2 class="event-item__title">
              Обеденный перерыв
            </h2>
          </header>
        </div>
      </li>
      <li class="event-list__item event-item">
        <div class="event-list__item-inner">
          <header class="event-item__header">
            <p class="event-item__time">14:25-15:05</p>
          </header>
          <ul class="event-item__authors-list">
            <li class="event-item__author">1</li>
            <li class="event-item__author">1</li>
          </ul>
          <h2 class="event-item__title">
            Работа Аналитика при реализации zero code, low code, no code и DSL в примерах
          </h2>
          <footer class="event-item__footer">
            <ul class="event-item__badge-list">
              <li class="event-item__badge event-item__badge--accent">
                секц. доклад
              </li>
              <li class="event-item__badge">
                рус
              </li>
              <li class="event-item__badge event-item__badge--fz-small">
                Hr, развитие карьеры и профессиональный рост
              </li>
            </ul>
          </footer>
        </div>
      </li>
    </ul>


    <footer class="main-footer">
      <ul class="main-footer__list">
        <li class="main-footer__item">
          <img src="~@/assets/images/qr-1.jpg" srcset="~@/assets/images/qr-1@2x.jpg 2x" alt="QR-код.">
        </li>
        <li class="main-footer__item">
          <img src="~@/assets/images/qr-2.jpg" srcset="~@/assets/images/qr-2@2x.jpg 2x" alt="QR-код.">
          <p class="main-footer__item-text">отсканируйте qr-код, чтобы скачать полную программу конференции</p>
        </li>
        <li class="main-footer__item">
          <img src="~@/assets/images/logo.png" srcset="~@/assets/images/logo@2x.png 2x" alt="analyst days #17.">
        </li>
      </ul>
    </footer>

  </section>

</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('~@/assets/fonts/inter-400.woff2') format('woff2'),
  url('~@/assets/fonts/inter-400.woff') format('woff')
}

@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: url('~@/assets/fonts/inter-500.woff2') format('woff2'),
  url('~@/assets/fonts/inter-500.woff') format('woff')
}

@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url('~@/assets/fonts/inter-700.woff2') format('woff2'),
  url('~@/assets/fonts/inter-700.woff') format('woff')
}

:root {
  --main-black: #000000;
  --main-gray: #5e5e5e;
  --main-white: #ffffff;
  --main-blue: #214b77;
  --bg-gray: #eeeeee;

  --badge-green: #bff158;
  --badge-gray: #848484;

  --border-green: #a6d447;
  --border-gray: #c1c1c1;

  --progress-gradient: linear-gradient(270deg, #74d447 34.67%, #c6ff52 100%);
  --progress-dark: #47525a;

  --border-radius: 32rem;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-size: min(calc(1vw / 10.8), 0.4px);
}

body {
  margin: 0;
  font-family: "Inter", "Arial", sans-serif;
}

.wrapper {
  overflow: hidden;
  margin: 0 auto;
  max-height: 100vh;
  max-width: 1080rem;
  position: relative;
}

.main-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  z-index: 15;
  color: var(--main-black);
  text-transform: uppercase;
  padding: 40rem 60rem 40rem 100rem;
  background: linear-gradient(#ffffff 60%, transparent 80%);

}

.main-title {
  font-size: 100rem;
  margin: 0;
}

.main-date {
  font-size: 60rem;
  font-weight: 700;
  margin: 0;
}


.event-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 60rem;
  padding: 200rem 60rem 255rem 100rem;
  list-style: none;
  font-size: 50rem;
  margin: 0;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 4rem;
    left: 38rem;
  }

  &::before {
    background-color: var(--border-gray);
    top: 62rem;
    bottom: 0;
  }

  &::after {
    top: 0;
    height: 200rem;
    background-color: var(--border-green);
  }


  &__item {
    color: var(--main-gray);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: min(4rem, 2px);
      width: 62rem;
      background-color: var(--border-gray);
      top: 62rem;
      right: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      background-color: var(--main-white);
      border: 6rem solid var(--border-gray);
      top: 54rem;
      right: calc(100% + 50rem);
    }

    &--simple {
      .event-list__item-inner {
        padding: 14rem 30rem;
        background-color: transparent;
        border: min(4rem, 2px) solid var(--border-gray);
      }

      header.event-item__header {
        margin: 0;
        align-items: center;
      }

      h2.event-item__title {
        font-size: 46rem;
        font-weight: 400;
        margin: 0;
        line-height: 60rem;
      }

      &::before {
        top: 50%;
        transform: translateY(-50%);
      }

      &::after {
        top: 50%;
        transform: translateY(-50%);
        right: calc(100% + 52rem);
      }
    }

    &--active {
      color: var(--main-white);

      .event-list__item-inner {
        background: linear-gradient(180deg, transparent 20rem, var(--main-blue) 20rem);
      }

      li.event-item__badge {
        border: 1rem solid var(--border-green);

        &--accent {
          background-color: var(--badge-green);
          color: var(--main-blue);
        }
      }

      &::before {
        background-color: var(--border-green);
      }

      &::after {
        border-color: var(--border-green);
      }
    }
  }


  &__item-inner {
    border-radius: var(--border-radius);
    background-color: var(--bg-gray);
    padding: 36rem 30rem 30rem;
    position: relative;
    overflow: hidden;
  }

  .progress-bar {
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    height: 20rem;
    overflow: hidden;

    &__line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 50%;
      background: var(--progress-gradient);
      box-shadow: 0 0 0 9999rem var(--progress-dark);
    }
  }


  .event-item {
    &__header {
      display: flex;
      justify-content: space-between;
      gap: 10rem;
      margin-bottom: 30rem;
    }

    &__time {
      font-size: 60rem;
      font-weight: 700;
      margin: 0;
    }

    &__countdown {
      font-size: 24rem;
      margin: 0;
    }

    &__authors-list {
      padding: 0;
      list-style: none;
      display: flex;
      gap: 20rem;
      margin: 0 0 30rem 0;
    }

    &__author {
      display: flex;
      gap: 10rem;
      align-items: center;
      max-width: 420rem;
    }

    &__author-avatar {
      border-radius: 50%;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__author-name {
      font-size: 28rem;
      font-weight: 500;
      margin: 0 0 8rem 0;
    }

    &__author-job {
      font-size: 20rem;
      margin: 0;
    }

    &__title {
      font-size: 48rem;
      margin: 0 0 30rem 0;
    }

    &__badge-list {
      display: flex;
      justify-content: space-between;
      gap: 10rem;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    &__badge {
      font-size: 20rem;
      text-transform: uppercase;
      border-radius: 8rem;
      border: 1rem solid var(--border-gray);
      padding: 0 20rem;
      min-height: 48rem;
      display: flex;
      align-items: center;

      &--fz-small {
        font-size: 17rem;
      }

      &--accent {
        background-color: var(--badge-gray);
        color: var(--bg-gray);
      }
    }
  }
}

.main-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80rem 60rem 40rem 100rem;
  background: linear-gradient(180deg, transparent 0, var(--main-white) 20%);

  &__list {
    padding: 0;
    margin: 0;
    height: 130rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 40rem;
  }

  &__item {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20rem;

    img {
      height: 100%;
      display: block;
      object-position: center;
      object-fit: contain;
    }
  }

  &__item-text {
    margin: 0;
    font-size: 20rem;
    text-transform: uppercase;
  }
}


</style>
