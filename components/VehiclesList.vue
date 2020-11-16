<template>
  <div :class="$style.list" v-if="vehicles">
    <div
      v-for="vehicle in vehicles"
      :key="vehicle.id"
      :class="$style.listElement"
      v-if="filterOption==='whatever' || filterOption === vehicle.type"
      @click="goToVehiclePage(vehicle.id)"
    >
      <div :class="$style.elementContent">
        <div :class="$style.elementImage"><img :src="vehicle.preview" alt="vehicle.name"/></div>
        <div :class="$style.elementInfo">
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
  margin: 40px 5% 40px calc(5% - 32px);
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.listElement {
  width: 33.3%;
  min-width: 370px;
  margin-bottom: 32px;
  padding-left: 32px;
  cursor: pointer;
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
  background: $base0;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  padding: 24px 32px;
}

.elementImage {
  img {
    width: 88px;
    height: 88px;
    border-radius: 24px;
  }

}

.elementInfo {
  padding-left: 24px;
  padding-top: 16px;
}

.elementTitle {
  color: $base500;
  font-size: 16px;
  margin-bottom: 12px;

}

.elementDescription {
  color: $base300;
  font-size: 12px;
  margin-bottom: 16px;


}

.rentPrice {
  color: $secondary400;
  font-size: 14px;
  font-weight: 700;
  line-height: 20.5px;
}
</style>
