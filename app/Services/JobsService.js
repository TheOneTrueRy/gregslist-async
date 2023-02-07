import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { sandboxApi } from "./AxiosService.js"


class JobsService{

  async getJobs(){
    const res = sandboxApi.get('/jobs/')
    const apiJobs = res.data.map(j => new Job(j))
    appState.jobs = apiJobs
  }
}

export const jobsService = new JobsService()