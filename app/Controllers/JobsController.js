import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawJobs(){
  let template = ''
  appState.jobs.forEach(j => template += j.JobCard)
  setHTML('listings', template)
}

export class JobsController{
  constructor(){
    this.getJobs()
  }

  async  getJobs(){
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  show(){
    _drawJobs()

  }

  drawForm(jobID){
    try {
      if(jobID){
        let job = appState.jobs.find(j => j.id == jobID)
        
      }
      
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }
}