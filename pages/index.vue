<template>
  <div v-if="!error" :class="$style.main">
    <div :class="$style.toolbar">
      <div :class="$style.toolbarLeft">
        <p :class="$style.selectBefore">Rent&nbsp;</p>
        <select
          :class="$style.select"
          v-model="option"
          @change="setFilterOption"
        >
          <option value="whatever">whatever</option>
          <option
            v-for="option in options"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <div :class="$style.toolbarRight">
        <p :class="$style.addNew">Add new</p>
        <button class="button"><img src="@/assets/images/add.png"/></button>
      </div>
    </div>
    <VehiclesList/>
  </div>
  <Error v-else/>
</template>

<script>
import {getVehicles} from '@/assets/request'
import Error from '@/components/Error'
import {mapState} from 'vuex'
import VehiclesList from '@/components/VehiclesList'
import getUnique from '~/utils/getUnique'

export default {
  data: () => ({
    error: false,
    options: [],
    option: 'whatever'
  }),
  computed: {
    ...mapState(['vehicles'])
  },
  watch: {
    vehicles() {
      this.getOptions()
    }
  },
  mounted() {
    this.getOptions()
  },
  async fetch() {
    try {
      const vehicles = await getVehicles()
      this.$store.commit('setVehicles', vehicles)
    } catch (e) {
      this.error = true
    }
  },
  methods: {
    getOptions() {
      this.options = getUnique(this.vehicles, 'type')
    },
    setFilterOption() {
      this.$store.commit('setFilterOption', this.option)
    },
  },
  components: {
    Error, VehiclesList
  }
}
</script>

<style module lang="scss">
@import './styles/variables';
@import './styles/mixins';

.main {
  width: 100%;
  height: 100%;
  padding-top: 56px;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  .toolbarLeft {
    display: flex;
    align-items: center;


    .selectBefore, .select {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
    }

    .select {
      background: transparent;
      color: $main400;
    }
  }

  .toolbarRight {
    display: flex;
    align-items: center;


    .addNew {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: $main400;
      margin-right: 1.5rem;
    }

    button {
      font-size: 14px;
      padding: 1rem;
    }

  }

}


</style>
