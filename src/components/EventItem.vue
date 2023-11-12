<template>
  <li :class="`event-item ${isActive && 'event-item--active'}`" v-if="eventData.type === 'regular'">
    <div class="event-item__inner">
      <progress-bar v-if="isActive" :full-present='howTimeProgress()'/>
      <header class="event-item__header">
        <p class="event-item__time">{{ getTimeInterval() }}</p>
        <span class="event-item__countdown" v-if="isActive">осталось {{ howTimeLeft() }} мин</span>
      </header>
      <ul class="event-item__authors-list">
        <li class="event-item__author" v-for="(speaker, index) in eventData.speakers">
          <div class="event-item__author-avatar">
            <img :src="eventData.speakerPhotos[index]" :alt="speaker.split('/')[0]">
          </div>
          <div class="event-item__author-description">
            <p class="event-item__author-name">{{ speaker.split('/')[0] }}</p>
            <p class="event-item__author-job">{{ speaker.split('/')[1] }}</p>
          </div>
        </li>
      </ul>
      <h2 class="event-item__title">{{ eventData.title }}</h2>
      <footer class="event-item__footer">
        <ul class="event-item__badge-list">
          <li class="event-item__badge event-item__badge--accent">{{ eventData.badgeType }}</li>
          <li class="event-item__badge">{{ eventData.badgeLang }}</li>
          <li class="event-item__badge event-item__badge--fz-small">{{ eventData.badgeTheme }}</li>
        </ul>
      </footer>
    </div>
  </li>
  <li :class="`event-item event-item--simple ${isActive && 'event-item--active'}`"
      v-else-if="eventData.type === 'simple'">
    <div class="event-item__inner">
      <progress-bar v-if="isActive" :full-present="this.howTimeProgress()"/>
      <header class="event-item__header">
        <p class="event-item__time">{{ getTimeInterval() }}</p>
        <h2 class="event-item__title">{{ eventData.title }}</h2>
      </header>
    </div>
  </li>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import {toHours, toMinutes} from "@/tools/tools";

export default {
  name: 'EventItem',
  props: {
    eventData: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      startMinutes: +toMinutes(this.eventData.time),
      endMinutes: +toMinutes(this.eventData.time) + this.eventData.duration,
      isActive: false,
    }
  },
  mounted() {
    this.isActive = this.howTimeLeft() <= this.eventData.duration

  },
  components: {ProgressBar},
  methods: {
    getTimeInterval() {
      return `${this.eventData.time} - ${toHours(this.endMinutes)}`
    },
    howTimeLeft() {
      // const [h, m, s] = new Date().toLocaleTimeString().split(':')
      const h = 11
      const m = 0

      return (h * 60 + +m - this.endMinutes) * -1
    },
    howTimeProgress() {
      return (1 - this.howTimeLeft() / this.eventData.duration) * 100
    }
  }
}
</script>

<style lang="scss">

.event-item {
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

  &__inner {
    border-radius: var(--border-radius);
    background-color: var(--bg-gray);
    padding: 36rem 30rem 30rem;
    position: relative;
    overflow: hidden;
  }

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
    white-space: nowrap;
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
    width: 140rem;
    height: 140rem;
    overflow: hidden;

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
    gap: 30rem;
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

  &--simple {
    &.event-item--active {
      .event-item__inner {
        padding-top: 35rem;
        border-top: none;
      }
    }

    .event-item__inner {
      padding: 14rem 30rem;
      background-color: transparent;
      border: min(4rem, 2px) solid var(--border-gray);
    }

    header.event-item__header {
      margin: 0;
      align-items: center;
      justify-content: flex-start;
      gap: 20rem;
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

    .event-item__inner {
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
</style>
