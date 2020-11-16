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
  background-color: var(--background-side);
  border-radius: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  padding-top: calc(500px / 2);

  @include for-mobile-only{
    border-radius: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .title {
    font-size: 40px;
    line-height: 48px;
    color: var(--main-text);
    margin-bottom: 24px;

    @include for-mobile-only{
      font-size: 24px;
      line-height: 28px;
    }
  }

  .message {
    font-size: 14px;
    line-height: 20px;
    color: var(--side-text);
    margin-bottom: 40px;
  }
}
</style>
