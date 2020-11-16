<template>
  <div v-if="!error" :class="$style.main">
    <div :class="$style.toolbar" class="us-none">
      <div :class="$style.toolbarLeft">
        <label for="select" :class="$style.selectBefore">Rent&nbsp;</label>
        <select
          :class="$style.select"
          v-model="option"
          id="select"
          @change="setFilterOption(option)"
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
        <p :class="$style.addNew" @click="openForm">Add new</p>
        <button class="button" @click="openForm">
          <img src="@/assets/images/add.png"/>
        </button>
      </div>
    </div>
    <VehiclesList/>
    <AddForm v-if="formOpen"/>
  </div>
  <Error v-else/>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import getUnique from '~/utils/getUnique'
import {getVehicles} from '@/assets/request'
import Error from '@/components/Error'
import VehiclesList from '@/components/VehiclesList'
import AddForm from '@/components/AddForm'

export default {
  data: () => ({
    error: false,
    options: [],
    option: 'whatever',
  }),
  computed: {
    ...mapState(['vehicles', 'formOpen'])
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
      if (!this.vehicles.length) {
        const vehicles = await getVehicles()
        this.$store.commit('setVehicles', vehicles)
      }
    } catch (e) {
      this.error = true
    }
  },
  methods: {
    ...mapMutations(['openForm', 'setVehicles', 'setFilterOption']),
    getOptions() {
      this.options = getUnique(this.vehicles, 'type')
    },
  },
  components: {
    AddForm,
    Error,
    VehiclesList
  }
}
</script>

<style module lang="scss">
@import './styles/variables';
@import './styles/mixins';

.main {
  width: 100%;
  height: 100%;
  padding-top: 3.5rem;

  @include for-mobile-only {
    padding-top: 1.75rem;
  }
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

      @include for-mobile-only {
        font-size: 24px;
        line-height: 28px;
      }
    }

    .selectBefore {
      color: var(--main-text)
    }

    .select {
      background: transparent;
      color: var(--secondary-mine);
    }
  }

  .toolbarRight {
    display: flex;
    align-items: center;

    .addNew {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      margin-right: 1.5rem;
      color: var(--secondary-mine);

      @include interactive(1.05, 0.95, 100ms);

      @include for-mobile-only {
        font-size: 16px;
        line-height: 22px;
        margin-right: 0.8rem;
      }
    }

    @media (max-width: 360px) {
      .addNew {
        font-size: 12px;
      }
    }

    button {
      width: 3rem;
      height: 3rem;
      font-size: 14px;
      border-radius: 16px;
      flex-direction: column;

      padding: 0;

      @include for-mobile-only {
        width: 2rem;
        height: 2rem;
        border-radius: 8px;
      }
    }
  }
}

</style>
