import { appState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawHouses(){
  let template = ''
  appState.houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

export class HousesController{
  constructor(){
    this.getHouses()
  }

  async  getHouses(){
    try {
      await housesService.getHouses()
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  show(){
    _drawHouses()
    

  }
}