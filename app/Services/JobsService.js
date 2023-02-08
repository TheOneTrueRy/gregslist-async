import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { sandboxApi } from "./AxiosService.js"


class JobsService{
  async  editJob(formData, jobID) {
    const res = await sandboxApi.put(`/jobs/${jobID}`, formData)
    let oldJobIndex = appState.jobs.findIndex(j => j.id == jobID)
    appState.jobs.splice(oldJobIndex, 1, new Job(res.data))
    appState.emit('jobs')
  }
  async  removeJob(jobID) {
    const res = await sandboxApi.delete('/jobs' + jobID)
    appState.jobs = appState.jobs.filter(j => j.id != jobID)
  }
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