

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

  static JobForm(editable){
    if(!editable){
      editable = new Job({
        company: '',
        jobTitle: '',
        hours: 0,
        rate: 0,
        description: ''
      })
    }
    return `
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">List a Job!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form ${editable.id ? `onsubmit="app.jobsController.editJob('${editable.id}')"` : 'onsubmit="app.jobsController.createJob()"'}>
        <div class="modal-body">
          <div class="mb-3">
            <label for="company" class="form-label">company</label>
            <input required type="text" value="${editable.company}" class="form-control" id="company" placeholder="company..." name="company">
          </div>
          <div class="mb-3">
            <label for="job" class="form-label">job</label>
            <input required type="text" value="${editable.job}" class="form-control" id="job" placeholder="job..." name="job">
          </div>
          <div class="mb-3">
            <label for="hours" class="form-label">hours</label>
            <input required type="number" value="${editable.hours}" class="form-control" id="hours" placeholder="hours..." name="hours">
          </div>
          <div class="mb-3">
            <label for="rate" class="form-label">rate</label>
            <input required type="number" value="${editable.rate}" class="form-control" id="rate" placeholder="rate..." name="rate">
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
    <button onclick="app.jobsController.drawForm()" class="myBtn p-1 px-2 ms-3 mb-2 rounded" data-bs-toggle="modal"
    data-bs-target="#exampleModal">
    <i class="mdi mdi-plus"></i>
    </button>
    `
  }
}