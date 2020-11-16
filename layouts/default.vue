<template>
  <div
    :class="$style.layout"
    :style="`overflow-y:${formOpen ? 'hidden' : 'auto'}`"
  >
    <Navbar/>
    <main :class="$style.main">
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['formOpen'])
  },
  async mounted() {
    const theme = await localStorage.getItem('theme')
    if (theme && (theme === 'light-theme' || theme === 'dark-theme')) {
      document.body.classList.add(theme)
    } else {
      localStorage.setItem('theme','light-theme')
      document.body.classList.add('light-theme')
    }
  },
  components: {
    Navbar
  }
}
</script>

<style module lang="scss">
@import './styles/variables';
@import './styles/mixins';

.layout {
  width: 100%;
  height: 100%;
  background-color: var(--background-main);
}

.main {
  display: block;
  height: auto;
  width: 90%;
  min-height: 700px;
  max-width: 1750px;
  border-radius: 3rem;
  margin: 0 auto;
  background-color: var(--background-side);

  @include for-mobile-only {
    width: 100%;
    border-radius: 1.5rem;
  }
}
</style>
