<template>
  <div :class="$style.layout">
    <Navbar/>
    <main :class="$style.main">
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
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
}

.main {
  display: block;
  background-color: $base50;
  border-radius: 48px;
  margin:0 auto ;
  min-height: 700px;
  height: auto;
  width: 90%
}
</style>
