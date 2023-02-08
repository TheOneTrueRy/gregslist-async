

export class Job{
  constructor(data){
    this.id = data.id
    this.company = data.company
    this.job = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || "Yep that there's a job alright!"
  }

  get JobCard(){
    return `
    <div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-flex text-center flex-column">
            <p class="fs-3">${this.company}</p>
            <p class="fs-4">${this.job}</p>
          </div>
          <p class="text-center fs-5">${this.description}</p>
          <div class="d-flex justify-content-between">
          <button class="btn ms-1 btn-danger" type="button" onclick="app.jobsController.removeJob('${this.id}')">Delete Job!</button>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button" onclick="app.jobsController.drawForm('${this.id}')">Edit Job!</button>
          </div>
          </div>
      </div>
    </div>
    `
  }

  static JobForm(){

  }

  static FormButton(){
    
  }
}