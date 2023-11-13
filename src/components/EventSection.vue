<template>
  <section class="wrapper">
    <header class="main-header">
      <h1 class="main-title">Cекция {{ sectionName }}</h1>
      <p class="main-date">{{ currentDate }}</p>
    </header>
    <ul class="event-list" v-if="eventList.length > 0"
        :style="{transform: `translateY(calc(${-listOffset}px + var(--gap)))`}">
      <event-item v-for="data in eventList" :event-data="data" @active="onActiveEventItem"
                  :currentTime="this.currentTime"></event-item>
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
import {Endpoint} from "@/api/Endpoint";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {toMinutes} from "@/tools/tools";

export default {
  name: 'EventSection',
  props: {
    eventList: {
      type: Array,
      required: true
    },
    currentTime: {
      type: Object,
      required: true
    }
  },
  components: {
    EventItem,
  },
  data() {
    return {
      currentDate: this.getCurrentDate(),
      dateIntervalId: null,
      listOffset: 0
    }
  },
  methods: {
    getCurrentDate: () => {
      const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
      const date = new Date()
      const [h, m] = date.toLocaleTimeString().split(':')
      return `${days[date.getDay()]}, ${h}:${m}`
    },

    onActiveEventItem(event) {
      setTimeout(() => { // Без таймаута рендерится по-разному каждый раз
        this.listOffset = event.$el.offsetTop
      })
    },
  },
  computed: {
    sectionName() {
      if (this.$route.params.sectionId) {
        return Endpoint[this.$route.params.sectionId]
      }
    }
  },
  mounted() {
    this.dateIntervalId = setInterval(() => this.currentDate = this.getCurrentDate(), 1000 * 30)
  },
  unmounted() {
    clearInterval(this.dateIntervalId)
  }
}
</script>

<style lang="scss">
.wrapper {
  overflow: hidden;
  margin: 0 auto;
  max-height: 100dvh;
  max-width: 1080rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 4rem;
    left: 38rem;
    top: 0;
    height: 240rem;
    background-color: var(--border-green);
  }
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
  padding: 200rem 60rem 255rem 100rem;
  list-style: none;
  font-size: 50rem;
  margin: 0;
  gap: 60rem;

  &::before {
    content: '';
    position: absolute;
    width: 4rem;
    left: 38rem;
    background-color: var(--border-gray);
    top: 62rem;
    bottom: 0;
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
    transition: transform 0.2s ease;
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
