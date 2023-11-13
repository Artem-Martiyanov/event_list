<template>
  <event-section :event-list="eventList" :current-time="this.currentTime"/>
</template>

<script>
import EventItem from "@/components/EventItem.vue";
import {upload} from "@/api/api";
import {getAdaptedData} from "@/api/adapter";
import EventSection from "@/components/EventSection.vue";


export default {
  name: 'App',
  components: {
    EventSection,
    EventItem,
  },
  data() {
    return {
      eventList: [],
      fetchIntervalId: null,
      reloadIntervalId: null,
      currentTime: this.getCurrentTime()
    }
  },
  computed: {
    endpoint() {
      return this.$route.params.id
    },
  },
  watch: {
    endpoint() {
      this.fetchEvents()
    },
  },
  methods: {
    async fetchEvents() {
      if (this.endpoint) {
        const eventsData = await upload('/' + this.endpoint)
        if (eventsData) {
          this.eventList = eventsData.slice(1).map(item => getAdaptedData(item))
        }
      }
    },
    getCurrentTime() {
      const [h, m] = new Date().toLocaleTimeString().split(':')
      return {h, m}
    }
  },
  mounted() {
    this.fetchEvents()
    this.fetchIntervalId = setInterval(() => this.fetchEvents(), 1000 * 60 * 5)

   this.reloadIntervalId = setInterval(() => {
      this.currentTime = this.getCurrentTime()
    }, 5000)
  },

  unmounted() {
    clearInterval(this.fetchIntervalId)
    clearInterval(this.reloadIntervalId)
  }
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
  --gap: 180rem;

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
</style>
