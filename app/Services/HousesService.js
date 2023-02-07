import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { sandboxApi } from "./AxiosService.js"


class HousesService{

  async getHouses(){
    const res = await sandboxApi.get('/houses/')
    const apiHouses = res.data.map(h => new House(h))
    appState.houses = apiHouses
  }
}

export const housesService = new HousesService()