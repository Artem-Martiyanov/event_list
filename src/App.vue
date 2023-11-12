<template>
  <section class="wrapper">

    <header class="main-header">
      <h1 class="main-title">Cекция A</h1>
      <p class="main-date">ПТ, 13:24</p>
    </header>

    <ul class="event-list">
      <li class="event-list__item event-list__item--active">

      </li>

      <li class="event-list__item event-list__item--simple">

      </li>
    </ul>


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
  font-size: min(calc(1vw / 10.8), 0.5px);
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
  padding: 0 60rem 255rem 100rem;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  color: var(--main-black);
  text-transform: uppercase;
  padding: 40rem 0;
}

.main-title {
  font-size: 100rem;
  margin: 0;
}

.main-date {
  font-size: 60rem;
  font-weight: 700;
}




ul {
  display: flex;
  flex-direction: column;
  gap: 30rem;
  margin: 0 auto;
  list-style: none;
  padding: 30rem;
  background-color: rgba(5, 80, 155, 0.5);
  font-size: 48rem;
}

li {
  background-color: rgba(211, 70, 70, 0.6);
  padding: 5rem;
}

li:nth-child(1) {
  height: 650rem;
}

li:nth-child(2) {
  height: 100rem;
}

li:nth-child(3) {
  height: 596rem;
}

li:nth-child(4) {
  height: 650rem;
}

li:nth-child(5) {
  height: 100rem;
}

li:nth-child(6) {
  height: 596rem;
}

</style>
