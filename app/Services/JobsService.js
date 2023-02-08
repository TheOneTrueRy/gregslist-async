import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { sandboxApi } from "./AxiosService.js"


class JobsService{
  async  createJob(formData) {
    const res = await sandboxApi.post('/jobs', formData)
    let actualJob = new Job(res.data)
    appState.jobs.push(actualJob)
    appState.emit('jobs')
  }

  async getJobs(){
    const res = await sandboxApi.get('/jobs/')
    const apiJobs = res.data.map(j => new Job(j))
    appState.jobs = apiJobs
  }
}

export const jobsService = new JobsService()