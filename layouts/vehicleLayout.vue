<template>
  <div :class="$style.layout">
    <Navbar/>
    <main :class="$style.main">
      <div v-if="!error" :class="$style.vehicleLayout">
        <div :class="$style.vehicleImage">
          <img :src="vehicle.preview" :alt="vehicle.name"/>
        </div>
        <div :class="$style.content">
          <div :class="$style.title"><p>{{ vehicle.name | lowercase | capitalize }}</p></div>
          <div :class="$style.info">
            <div :class="$style.links">
              <NuxtLink
                :to="`/vehicle/${vehicle.id}/specifications`"
                :active-class="$style.activeLink">
                Specification</NuxtLink>
              <NuxtLink
                :to="`/vehicle/${vehicle.id}/team`"
                :active-class="$style.activelLink"
              >Team</NuxtLink>
              <NuxtLink
                :to="`/vehicle/${vehicle.id}/rent`"
                :active-class="$style.activelLink"
              >Rent terms </NuxtLink>
            </div>
            <Nuxt/>
          </div>
          <div :class="$style.rentInfo">
            <p>Rent for <span>{{ vehicle.rent | price }}</span></p>
            <button class="button">Rent now</button>
          </div>
        </div>
      </div>
      <Error v-else/>
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import {getVehicles} from 'assets/request'
import Error from '~/components/Error'

export default {
  data: () => ({
    error: false,
  }),
  computed: {
    vehicle() {
      return this.$store.state.vehicles.find(v => v.id === this.$route.params.id)
    }
  },
  async fetch() {
    try {
      const vehicles = await getVehicles()
      this.$store.commit('setVehicles', vehicles)
    } catch (e) {
      this.error = true
    }
  },
  components: {
    Error,
    Navbar
  }
}
</script>

<style module lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.layout {
  width: 100%;
  height: 100%;
}

.main {
  display: block;
  border-radius: 48px;
  margin: 0 auto;
  min-height: 700px;
  height: 77%;
  width: 90%
}

.vehicleLayout {
  width: 100%;
  height: 100%;
  display: flex;

}

.vehicleImage {
  width: 50%;
  max-width: 700px;
  height: 100%;

  img {
    object-fit: contain;
    width: 100%;
    border-radius: 24px;
  }
}

.content {
  width: 40%;
  margin: 0 5% 0 10%;
}

.links {
  display: flex;
  a{
    margin-right: 2rem;
    text-decoration: none;
    color: $base300;
    font-weight: 700;
  }

  .activeLink{
    color:$main400;
  }
}

.title {
  margin-top: 10%;
  font-size: 40px;
  font-weight: 700;
}

.info {
  margin-top: 2rem;
}

.rentInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  border-radius: 16px;
  background: $base50;
  margin-top: 3rem;
  padding: 0 2rem;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;

  p {
    color: $base500;
  }

  span {
    color: $secondary400;
  }

}
</style>
