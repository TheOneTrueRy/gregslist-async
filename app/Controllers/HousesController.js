import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js"
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
    appState.on('houses', this.show)
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
    setHTML('modal-content', House.HouseForm({}))
    setHTML('form-button', House.FormButton())
  }

  drawForm(houseID){
    try {
      if(houseID){
        let house = appState.houses.find(h => h.id == houseID)
        setHTML('modal-content', House.HouseForm(house))
      }else{
        setHTML('modal-content', House.HouseForm())
      }
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  async createHouse(){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await housesService.createHouse(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }

  async removeHouse(houseID){
    try {
      await housesService.removeHouse(houseID)
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  async editHouse(houseID){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await housesService.editHouse(formData, houseID)
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }
}