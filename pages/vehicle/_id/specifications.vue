<template>
  <div :class="$style.content">
    <p :class="$style.text">{{ vehicle.specifications_text || '' }}</p>
    <div :class="$style.features">
      <h2 :class="$style.title">Features:</h2>
      <ul>
        <li :class="$style.listItem">
          <div :class="$style.icon">
            <div>
              <div>
                <img src="@/assets/images/challenge.png" alt='challenge'>
              </div>
            </div>
          </div>
          <div :class="$style.feature">
            <h3 :class="$style.featureTitle">A challenge for a true champion</h3>
            <div :class="$style.featureText">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </div>
          </div>
        </li>
        <li :class="$style.listItem">
          <div :class="$style.icon">
            <img src="@/assets/images/pilot.png" alt='challenge'>
          </div>
          <div :class="$style.feature">
            <h3 :class="$style.featureTitle">Pilot's sweaty hands</h3>
            <div :class="$style.featureText">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </div>
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

.features {
  margin-top: 2rem;
  margin-bottom: 8rem;

  @include for-mobile-only {
    margin-top: 1.4rem;
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
  margin-bottom: 2rem;
  font-size: 24px;
  line-height: 20px;
  font-weight: 700;
  color: var(--secondary-side);

  @include for-mobile-only {
    margin-bottom: 1.25rem;
    font-size: 20px;
    line-height: 28px;
  }
}

.listItem {
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 6rem;
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 16px;
  margin-right: 1.5rem;
  background-color: var(--background-side);

  @include for-mobile-only {
    width: 4rem;
    height: 5rem;
    margin-right: 1rem;
    img {
      transform: scale(0.7);
    }
  }
}

.feature {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0.5rem;

  @include for-mobile-only {
    margin-top: 0;
  }
}

.featureTitle {
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: var(--main-text);

  @include for-mobile-only {
    margin-bottom: 0.25rem;
  }
}

.featureText {
  font-size: 14px;
  line-height: 20px;
  white-space: pre-line;
  color: var(--side-text);
}
</style>
