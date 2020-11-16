<template>
  <div :class="$style.layout">
    <Navbar/>
    <main :class="$style.main">
      <div v-if="!error && vehicle" :class="$style.vehicleLayout" >
        <div :class="$style.vehicleImage" >
          <img :src="vehicle.preview" :alt="vehicle.name"/>
        </div>
        <div :class="$style.content">
          <div :class="$style.title">
            <p>{{ vehicle.name | lowercase | capitalize }}</p>
          </div>
          <div :class="$style.info">
            <div :class="$style.links" class="us-none">
              <NuxtLink
                :to="`/vehicle/${vehicle.id}/specifications`"
                :active-class="$style.activeLink">
                Specification
              </NuxtLink>
              <NuxtLink
                :to="`/vehicle/${vehicle.id}/team`"
                :active-class="$style.activeLink"
              >Team
              </NuxtLink>
              <NuxtLink
                :to="`/vehicle/${vehicle.id}/rent`"
                :active-class="$style.activeLink"
              >Rent terms
              </NuxtLink>
            </div>
            <Nuxt/>
          </div>
          <div :class="$style.rentInfoBefore" class="hide-on-tablet-landscape-up"/>
          <div :class="$style.rentInfo">
            <p>Rent for <span>{{ vehicle.rent | price }}</span></p>
            <button class="button">Rent now</button>
          </div>
          <div :class="$style.rentInfoAfter" class="hide-on-tablet-landscape-up"/>
        </div>
      </div>
      <Error v-else/>
    </main>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Navbar from '~/components/Navbar'
import Error from '~/components/Error'
import {getVehicles} from 'assets/request'

export default {
  data: () => ({
    error: false,
  }),
  computed: {
    ...mapState(['vehicles']),
    vehicle() {
      return this.vehicles.find(v => v.id === this.$route.params.id)
    }
  },
  async fetch() {
    try {
      if (!this.vehicles.length) {
        const vehicles = await getVehicles()
        this.$store.commit('setVehicles', vehicles)
      }
    } catch (e) {
      this.error = true
    }
  },
  async mounted() {
    const theme = await localStorage.getItem('theme')
    if (theme && (theme === 'light-theme' || theme === 'dark-theme')) {
      document.body.classList.add(theme)
    } else {
      localStorage.setItem('theme', 'light-theme')
      document.body.classList.add('light-theme')
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
  height: auto;
  min-height: 100%;
  width: 100%;
  background-color: var(--background-main);
}

.main {
  display: block;
  width: 100%;
  min-height: 700px;
  border-radius: 48px;
  margin: 0;
  background-color: var(--background-main);

  @include for-tablet-landscape-up {
    width: 90%;
    margin: 0 5%;
  }
}

.vehicleLayout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1730px;
  height: 100%;
  margin: 0 auto;

  @include for-tablet-landscape-up {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.vehicleImage {
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 700px;
  height: 100%;

  @include for-mobile-only {
    width: calc(100% - 2rem);
    margin: 0 1rem;
  }

  @include for-tablet-landscape-up {
    width: 50%;
    min-height: 800px;
  }

  img {
    width: 90%;
    object-fit: contain;
    margin: 0 auto;
    border-radius: 24px;

    @include for-mobile-only {
      width: 100%;
    }

    @include for-tablet-landscape-up {
      width: 100%;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin-left: 0;

  @include for-mobile-only {
    width: calc(100% - 2rem);
    margin: 0 1rem;
  }

  @include for-tablet-landscape-up {
    width: 40%;
    margin-left: 3rem;
  }
}

.links {
  display: flex;

  a {
    margin-right: 2rem;
    text-decoration: none;
    font-weight: 700;
    color: var(--side-text);
    transition: color 200ms;

    &:hover {
      text-decoration: underline;
      color: lighten(#677B8F, 10);
    }

    &:active {
      color: darken(#677B8F, 10);
    }

    @include for-mobile-only {
      margin-right: 1.25rem;
    }
  }


  .activeLink {
    color: $main400;
    transition: color 200ms;

    &:hover {
      text-decoration: underline;
      color: lighten($main400, 10);
    }

    &:active {
      color: darken($main400, 10);
    }
  }
}

.title {
  margin-top: 10%;
  font-size: 40px;
  font-weight: 700;
  color: var(--main-text);

  @include for-mobile-only {
    margin-top: 1.5rem;
    font-size: 24px;
    line-height: 28px;
  }
}

.info {
  margin-top: 2rem;
  @include for-mobile-only {
    margin-top: 1rem;
  }
}

.rentInfoBefore {
  width: 100%;
  height: 2rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 5rem;
  background: linear-gradient(180deg, var(--background-main-opactiy) 0%, var(--background-main) 100%);
}

.rentInfoAfter {
  width: 100%;
  height: 5.8rem;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: var(--background-main);

  @include for-mobile-up {
    height: 6.3rem;
  }
}

.rentInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 5rem;
  min-height: 4rem;
  max-width: 600px;

  border-radius: 16px;
  background: $base50;
  padding: 0 2rem;
  margin: 3rem auto 0;

  font-size: 20px;
  font-weight: 700;
  line-height: 28px;

  position: fixed;
  z-index: 10;
  bottom: 2rem;
  left: 50%;

  transform: translateX(-50%);


  background: var(--background-side);

  p {
    color: var(--main-text);
  }

  span {
    color: var(--secondary-mine);
  }

  @include for-mobile-only {
    height: 4.25rem;
    font-size: 16px;
    line-height: 24px;
    margin-top: 2rem;
    width: calc(100% - 2rem);
  }

  @include for-mobile-up {
    margin-bottom: 1rem;
  }

  @include for-tablet-landscape-up {
    width: 100%;
    max-width: none;
    position: relative;
    bottom: auto;
  }
}
</style>
