import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"


function _drawHouses(){
  let template = ''
  appState.houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

export class HousesController{
  constructor(){
    this.getHouses()
    appState.on('houses', _drawHouses)
  }

  getHouses(){
    
  }

  show(){

  }
}