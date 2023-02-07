import { appState } from "../AppState.js"
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

  getJobs(){

  }

  show(){

  }
}