<template>
  <div :class="$style.content">
    <p :class="$style.text">{{ vehicle.team_text  || ""}}</p>
    <div :class="$style.specialists">
      <h2 :class="$style.title">Qualified specialists:</h2>
      <ul>
        <li :class="$style.listItem">
          <div :class="$style.icon">
            <img src="@/assets/images/team1.png" alt='pilot'>
          </div>
          <div :class="$style.specialist">
            <h3 :class="$style.specialistName">Marvin McKinney</h3>
            <div :class="$style.specialistProfession">
              <p>Pilot assistant</p>
            </div>
          </div>
        </li>
        <li :class="$style.listItem">
          <div :class="$style.icon">
            <img src="@/assets/images/team2.png" alt='mechanic'>
          </div>
          <div :class="$style.specialist">
            <h3 :class="$style.specialistName">Savannah Nguyen</h3>
            <div :class="$style.specialistProfession">
              <p>Mechanic</p>
            </div>
          </div>
        </li>
        <li :class="$style.listItem">
          <div :class="$style.icon">
            <img src="@/assets/images/team3.png" alt='stewardess'>
          </div>
          <div :class="$style.specialist">
            <h3 :class="$style.specialistName">Courtney Henry</h3>
            <div :class="$style.specialistProfession">
              <p>Stewardess</p>
            </div>
          </div>
        </li>
      </ul>
      <div :class="$style.specialistsText">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
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

.specialists {
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
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 2rem;

    @include for-mobile-only{
      margin-bottom: 0;
    }
  }

  @media (max-width: 1400px) {
    ul {
      flex-direction: column;
    }
  }
}

.title {
  margin-bottom: 2rem;
  font-size: 24px;
  line-height: 20px;
  font-weight: 700;
  color: var(--main-text);

  @include for-mobile-only {
    margin-bottom: 1.25rem;
    font-size: 20px;
    line-height: 28px;
  }
}

.listItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0;
}

@media (max-width: 1400px) {
  .listItem {
    flex-direction: row;
    margin-bottom: 0.75rem;
  }
}

.icon {
  img {
    border-radius: 16px;
    margin-right: 1rem;

    @include for-mobile-only{
      transform: scale(0.82);
      margin: -0.5rem  0 0 -1rem;
    }

    @include for-tablet-landscape-up{
      margin-right: 1rem;
    }
  }
}

.specialist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.specialistName {
  margin-top: 1rem;
  font-size: 16px;
  line-height: 14px;
  font-weight: 700;
  color: var(--main-text);

  @include for-mobile-only {
    line-height: 24px;
    margin-top: 0;
  }
}

.specialistProfession {
  margin-top: 0.5rem;
  font-size: 12px;
  line-height: 18px;
  color: var(--side-text);

  @include for-mobile-only {
    margin-top: 0.25rem;
  }
}

.specialistsText {
  font-size: 14px;
  color: var(--side-text);
  line-height: 20px;
}
</style>
