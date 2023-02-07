

export class House{
  constructor(data){
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.img = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'This sure is a house!'
  }

  get HouseCard(){
    return `
    
    `
  }
}