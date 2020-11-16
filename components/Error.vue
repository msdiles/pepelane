<template>
  <div :class="$style.errorOuter">
    <h1 :class="$style.title">An error has occured</h1>
    <p :class="$style.message">Please refresh the page</p>
    <button class="button" @click="reloadPage">Reload page</button>
  </div>
</template>

<script>

export default {
  methods: {
    reloadPage() {
      console.log('reload')
      window.location.reload()
    }
  },
}
</script>

<style module lang="scss">
@import './styles/variables';
@import './styles/mixins';

.errorOuter {
  width: 100%;
  min-height: 700px;
  height: 100%;
  background-color: $base50;
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 40px;
    line-height: 48px;
    color: $base500;
    margin-bottom: 24px;
  }

  .message {
    font-size: 14px;
    line-height: 20px;
    color: $base300;
    margin-bottom: 40px;
  }
}
</style>
