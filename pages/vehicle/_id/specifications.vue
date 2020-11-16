<template>
  <div :class="$style.content">
    <p :class="$style.text">{{ vehicle.specifications_text }}</p>
    <div :class="$style.features">
      <h2 :class="$style.title">Features</h2>
      <ul>
        <li :class="$style.listItem">
          <div :class="$style.icon">
            <img src="@/assets/images/challenge.png" alt='challenge'>
          </div>
          <div :class="$style.feature">
            <h3 :class="$style.featureTitle">A challenge for a true champion</h3>
            <div :class="$style.featureText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
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
            <div :class="$style.featureText">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
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
}

.text {
  font-size: 14px;
  line-height: 20px;
  color: $base300;
}

.features {
  margin-top: 2rem;

  ul {
    list-style: none;
  }
}

.title {
  color: $base500;
  font-size: 24px;
  line-height: 20px;
  font-weight: 700;

}

.listItem {
  display: flex;
  align-items: center;
  margin-top: 1rem;

}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 5rem;
  padding: 2rem ;
  background-color: $base50;
  border-radius: 16px;
  margin-right: 1.5rem;
}

.feature {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.featureTitle {
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: $base500;
}

.featureText {
  font-size: 14px;
  line-height: 20px;
  color: $base300;
}
</style>
