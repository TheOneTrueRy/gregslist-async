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
    appState.on('jobs', _drawJobs)
  }

  async  getJobs(){
    try {
      await jobsService.getJobs()
    } catch (error) {
      Pop.error(error)
    }
  }

  show(){

  }
}