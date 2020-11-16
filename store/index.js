export const state = () => ({
  vehicles: [],
  filterOption:'whatever',
  formOpen:false
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
  },
  openForm(state){
    state.formOpen=true
  },
  closeForm(state){
    state.formOpen=false
  },
  addVehicle(state,vehicle){
    state.vehicles =[...state.vehicles,vehicle]
    console.log(state.vehicles)
  }
}
