<template>
  <div class="progress-bar">
    <span class="progress-bar__line" :style="{width: `${this.fullPresent}%`}"></span>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    fullPresent: {
      type: Number,
      required: true
    },
  },
}
</script>

<style lang="scss">
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
</style>
