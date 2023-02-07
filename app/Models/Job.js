

export class Job{
  constructor(data){
    this.company = data.company
    this.job = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || "Yep that there's a job alright!"
  }

  get JobCard(){
    return `
    
    `
  }
}