<template>
  <div :class="$style.list" v-if="vehicles">
    <div
      v-for="vehicle in vehicles"
      :key="vehicle.id"
      :class="$style.listElement"
      v-if="filterOption==='whatever' || filterOption === vehicle.type"
    >
      <div :class="$style.elementContent" @click="goToVehiclePage(vehicle.id)" class="us-none">
        <div :class="$style.elementImage"><img :src="vehicle.preview" alt="vehicle.name"/></div>
        <div :class="$style.elementInfo" >
          <h2 :class="$style.elementTitle">{{ vehicle.name | lowercase | capitalize }}</h2>
          <p :class="$style.elementDescription">{{ vehicle.description | capitalize }}</p>
          <p :class="$style.rentPrice">{{ vehicle.rent | price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['vehicles', 'filterOption'])
  },
  methods: {
    goToVehiclePage(id) {
      this.$router.push(`/vehicle/${id}/specifications`)
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

.list {
  width: 92.5%;
  margin: 2.5rem 5% 2.5rem calc(5% - 32px);
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  @include for-mobile-only {
    margin: 1.6rem 1rem 1.6rem 1rem;
    width: calc(100% - 2rem)
  }
}

.listElement {
  width: 33.3%;
  min-width: 370px;
  margin-bottom: 2rem;
  padding-left: 2rem;


  @include for-mobile-only {
    padding-left: 0;
    min-width: 200px;
  }
}

@media (max-width: 1350px) {
  .listElement {
    width: 50%;
  }
}

@media (max-width: 900px) {
  .listElement {
    width: 100%;
  }
}


.elementContent {
  display: flex;
  align-items: flex-start;
  background: var(--background-main);
  width: 100%;
  height: 100%;
  border-radius: 32px;
  padding: 1.5rem 2rem;

  @include interactive(1.05,0.95,100ms);

  @include for-mobile-only {
    padding: 1.25rem 1.25rem;
  }
}

.elementImage {
  img {
    width: 88px;
    height: 88px;
    border-radius: 24px;

    @include for-mobile-only {
      border-radius: 16px;
    }
  }

}

.elementInfo {
  padding-left: 1.5rem;
  padding-top: 1rem;

  @include for-mobile-only {
    padding-left: 1.25rem;
    padding-top: 0.75rem;
  }
}

.elementTitle {
  color: var(--main-text);
  font-size: 16px;
  margin-bottom: .75rem;

}

.elementDescription {
  color: var(--side-text);
  font-size: 12px;
  margin-bottom: 1rem;


}

.rentPrice {
  color: var(--secondary-mine);
  font-size: 14px;
  font-weight: 700;
  line-height: 20.5px;
}
</style>
