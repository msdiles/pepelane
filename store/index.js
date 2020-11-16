export const state = () => ({
  vehicles: [],
  filterOption:'whatever'
})

export const mutations = {
  setVehicles(state, vehicles) {
    state.vehicles = vehicles
  },
  clearVehicles(state) {
    state.vehicles = []
  },
  setFilterOption(state,option){
    state.filterOption =option
  }
}
