<template>
  <div :class="$style.content">
    <p :class="$style.text">{{ vehicle.term_text || "" }}</p>
    <div :class="$style.conditions">
      <h2 :class="$style.title">Additional conditions:</h2>
      <ul>
        <li :class="$style.listItem">
          <div :class="$style.condition">
            <p :class="$style.conditionText">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </li>
        <li :class="$style.listItem">
          <div :class="$style.condition">
            <p :class="$style.conditionText">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </li>
        <li :class="$style.listItem">
          <div :class="$style.condition">
            <p :class="$style.conditionText">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'vehicleLayout',
  computed: {
    vehicle() {
      return this.$store.state.vehicles.find(v => v.id === this.$route.params.id)
    }
  },
}
</script>

<style module lang="scss">
@import '../../../styles/variables';
@import '../../../styles/mixins';

.content {
  padding-top: 2rem;

  @include for-mobile-only {
    padding-top: 1.4rem;
  }
}

.text {
  font-size: 14px;
  line-height: 20px;
  color: var(--side-text);
}

.conditions {
  margin-top: 1.6rem;
  margin-bottom: 8rem;

  @include for-mobile-only {
    margin-top: 1rem;
  }

  @include for-mobile-up {
    margin-bottom: 10rem;
  }

  @include for-tablet-landscape-up {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
  }
}

.title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 1.6rem;
  color: var(--main-text);

  @include for-mobile-only {
    margin-bottom: 1rem;
  }
}

.listItem {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  position: relative;

  &:before {
    content: "";
    width: 4px;
    height: 4px;
    display: inline-block;
    position: absolute;
    top: 7px;
    margin-left: -1.5rem;
    background-color: var(--secondary-mine);
  }

  @include for-mobile-up {
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @include for-mobile-only {
    margin-bottom: 0.5rem;
  }
}

.conditionText {
  font-size: 14px;
  line-height: 20px;
  color: var(--side-text);
}
</style>
