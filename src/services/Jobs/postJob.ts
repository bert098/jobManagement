const dotenv = require('dotenv');
dotenv.config()
import * as express from 'express';
dotenv.config();
import jobs from '../../jobs';

class postJobService {
  public path = '/jobs';
  public type = "post"
  public service = async (request: express.Request, response: express.Response) => {
    const newJob = request.body;
    const maxId = jobs.reduce((max, job) => job.id > max ? job.id : max, 0);
    newJob.id = maxId + 1;
    jobs.push(newJob);
    console.log(jobs)
    response.status(201).json(newJob);
  }

}

export default postJobService;