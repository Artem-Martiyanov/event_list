<template>

  <swiper
      :slides-per-view="2"
      :loop="true"
      class="authors-list"
      v-if="speakerNames.length > 2"
      @swiper="onSwiper"
      :autoplay="{delay: 5000}"
      :allow-touch-move="false"
  >
    <swiper-slide class="authors-list__item" v-for="(speaker, index) in speakerNames">
      <div class="authors-list__avatar">
        <img :src="speakerPhotos[index]" :alt="speaker.split('/')[0]">
      </div>
      <div class="authors-list__description">
        <p class="authors-list__name">{{ speaker.split('/')[0] }}</p>
        <p class="authors-list__job">{{ speaker.split('/')[1] }}</p>
      </div>
    </swiper-slide>
  </swiper>

  <ul class="authors-list" v-else>
    <li class="authors-list__item" v-for="(speaker, index) in speakerNames">
      <div class="authors-list__avatar">
        <img :src="speakerPhotos[index]" :alt="speaker.split('/')[0]">
      </div>
      <div class="authors-list__description">
        <p class="authors-list__name">{{ speaker.split('/')[0] }}</p>
        <p class="authors-list__job">{{ speaker.split('/')[1] }}</p>
      </div>
    </li>
  </ul>

</template>

<script>
import { Swiper, SwiperSlide} from 'swiper/vue';
export default {
  name: 'SpeakersSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    speakerNames: {
      type: Array,
      required: true
    },
    speakerPhotos: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      autoPlayId: null,
      swiper: null,
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper
    }
  },

  mounted() {
    this.autoPlayId = setInterval(() => {
      if (this.swiper) {
        this.swiper.slideNext()
      }
    }, 10000)
  },

  unmounted() {
    clearInterval(this.autoPlayId)
  }

}
</script>

<style lang="scss">

.event-item {
  .swiper-wrapper {
    display: flex;
  }
}

.authors-list {
  padding: 0;
  list-style: none;
  display: flex;
  gap: 20rem;
  margin: 0 0 30rem 0;
  overflow: hidden;

  &__item {
    display: flex;
    gap: 10rem;
    align-items: center;
    width: 50%;
  }

  &__avatar {
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

  &__name {
    font-size: 28rem;
    font-weight: 500;
    margin: 0 0 8rem 0;
  }

  &__job {
    font-size: 20rem;
    margin: 0;
  }
}
</style>
