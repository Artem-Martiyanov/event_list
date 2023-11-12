<template>
  <section class="wrapper">

    <header class="main-header">
      <h1 class="main-title">Cекция A</h1>
      <p class="main-date">ПТ, 13:24</p>
    </header>

    <ul class="event-list" v-if="eventList.length > 0">
      <event-item v-for="data in eventList" :event-data="data"></event-item>
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
import EventItem from "@/components/EventItem.vue";
import {upload} from "@/api/api";
import {Endpoint} from "@/api/Endpoint";
import {getAdaptedData} from "@/api/adapter";

export default {
  name: 'App',
  components: {
    EventItem,
  },
  data() {
    return {
      eventList: [],
    }
  },


  methods: {
    async fetchEvents() {
      const eventsData = await upload(Endpoint.REPORT_1)
      this.eventList = eventsData.slice(1).map(item => getAdaptedData(item))
    }
  },
  mounted() {
    this.fetchEvents()

  },
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
