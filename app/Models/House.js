

export class House{
  constructor(data){
    this.id = data.id
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
  <div class="col-md-4 mb-3">
    <div class="card">
      <img src="${this.img}" class="card-img-top car-img"
        alt="car">
      <div class="card-body">
        <div class="card-title fs-5">${this.bedrooms} bed ${this.bathrooms} bath</div>
        <p>${this.description}</p>
        <div class="d-flex justify-content-between">
        <button class="btn ms-1 btn-danger" type="button" onclick="app.housesController.removeHouse('${this.id}')">Delete House!</button>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.housesController.drawForm('${this.id}')">Edit House!</button>
        </div>
        </div>
    </div>
  </div>
    `
  }

  static HouseForm(editable){
    
    return `

    `
  }

  static FormButton(){
    return `
    <button onclick="app.housesController.drawForm()" class="myBtn ms-3 mb-2 rounded" data-bs-toggle="modal"
    data-bs-target="#exampleModal">
    <i class="mdi mdi-plus"></i>
    </button>
    `
  }
}