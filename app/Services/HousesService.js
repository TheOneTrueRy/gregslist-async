import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"


class HousesService{
  async  editHouse(formData, houseID) {
    const res = await sandboxApi.put(`/houses/${houseID}`, formData)
    let oldHouseIndex = appState.houses.findIndex(h => h.id == houseID)
    appState.houses.splice(oldHouseIndex, 1, new House(res.data))
    appState.emit('houses')
  }
  async  removeHouse(houseID) {
    const res = await sandboxApi.delete('/houses/' + houseID)  
    appState.houses = appState.houses.filter(h => h.id != houseID)
  }
  async  createHouse(formData) {
    const res = await sandboxApi.post('/houses/', formData)
    let actualHouse = new House(res.data)
    appState.houses.push(actualHouse)
    appState.emit('houses')
  }

  async getHouses(){
    const res = await sandboxApi.get('/houses/')
    const apiHouses = res.data.map(h => new House(h))
    appState.houses = apiHouses
  }
}

export const housesService = new HousesService()