

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
    if(!editable){
      editable = new House({
        bedrooms: 0,
        bathrooms: 0,
        levels: 0,
        imgUrl: '',
        year: 0,
        price: 0,
        description: ''
      })
    }
    return `
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">List a House!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form ${editable.id ? `onsubmit="app.housesController.editHouse('${editable.id}')"` : 'onsubmit="app.housesController.createHouse()"'}>
        <div class="modal-body">
          <div class="mb-3">
            <label for="bedrooms" class="form-label">bedrooms</label>
            <input required type="number" value="${editable.bedrooms}" class="form-control" id="bedrooms" placeholder="bedrooms..." name="bedrooms">
          </div>
          <div class="mb-3">
            <label for="bathrooms" class="form-label">bathrooms</label>
            <input required type="number" value="${editable.bathrooms}" class="form-control" id="bathrooms" placeholder="bathrooms..." name="bathrooms">
          </div>
          <div class="mb-3">
            <label for="year" class="form-label">year</label>
            <input required type="number" value="${editable.year}" class="form-control" id="year" placeholder="year..." name="year">
          </div>
          <div class="mb-3">
            <label for="levels" class="form-label">levels</label>
            <input required type="number" value="${editable.levels}" class="form-control" id="levels" placeholder="levels..." name="levels">
          </div>
          <div class="mb-3">
            <label for="img" class="form-label">img</label>
            <input required type="text" value="${editable.img}" class="form-control" id="img" placeholder="img..." name="imgUrl">
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">price</label>
            <input required type="number" value="${editable.price}" class="form-control" id="price" placeholder="price..." name="price">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">description</label>
            <textarea name="description" class="form-control" id="description" rows="3">
            ${editable.description}
            </textarea>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
      </form>
    </div>
    `
  }

  static FormButton(){
    return `
    <button onclick="app.housesController.drawForm()" class="myBtn p-1 px-2 ms-3 mb-2 rounded" data-bs-toggle="modal"
    data-bs-target="#exampleModal">
    <i class="mdi mdi-plus"></i>
    </button>
    `
  }
}