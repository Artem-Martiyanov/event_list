<template>
  <li :class="`event-item ${isActive ? 'event-item--active' : ''}`" v-if="eventData.type === 'regular'">
    <div class="event-item__inner">
      <progress-bar v-if="isActive" :full-present='howTimeProgress()'/>
      <header class="event-item__header">
        <p class="event-item__time">{{ getTimeInterval() }}</p>
        <span class="event-item__countdown" v-if="isActive">осталось {{ timeLeft }} мин</span>
      </header>
      <speakers-slider :speaker-names="eventData.speakers" :speaker-photos="eventData.speakerPhotos"/>
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
  <li :class="`event-item event-item--simple ${isActive ? 'event-item--active' : ''}`"
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
import SpeakersSlider from "@/components/SpeakersSlider.vue";

export default {
  name: 'EventItem',
  components: {SpeakersSlider, ProgressBar},
  props: {
    eventData: {
      type: Object,
      required: true,
    },
    currentTime: {
      type: Object,
      required: true
    }
  },
  computed: {
    timeLeft() {
      return (this.currentTime.h * 60 + +this.currentTime.m - this.endMinutes) * -1
    },
    isActive() {
      return this.startMinutes <= this.currentTime.h * 60 + +this.currentTime.m && this.currentTime.h * 60 + +this.currentTime.m < this.endMinutes
    }
  },
  data() {
    return {
      startMinutes: +toMinutes(this.eventData.time),
      endMinutes: +toMinutes(this.eventData.time) + this.eventData.duration,
    }
  },
  watch: {
    isActive() {
      this.$emit('active', this)
    }
  },

  mounted() {
    if (this.isActive) {
      this.$emit('active', this)
    }
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    getTimeInterval() {
      return `${this.eventData.time} - ${toHours(this.endMinutes)}`
    },

    howTimeProgress() {
      return (1 - this.timeLeft / this.eventData.duration) * 100
    },

    onResize() {
      if (this.isActive) {
        this.$emit('active', this)
      }
    }
  },
  unmounted() {
    document.removeEventListener('resize', this.onResize)
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
    z-index: 1;
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
    z-index: 1;
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
        border: none;
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
