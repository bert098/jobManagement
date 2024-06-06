const dotenv = require('dotenv');
dotenv.config()
import * as express from 'express';
dotenv.config();
import jobs from '../../jobs';

class putJobService {
  public path = '/jobs/:id';
  public type = "put"
  public service = async (request: express.Request, response: express.Response) => {
    const jobId = parseInt(request.params.id);
    const jobIndex = jobs.findIndex(job => job.id === jobId);
    if (jobIndex !== -1) {
      jobs[jobIndex] = { ...jobs[jobIndex], ...request.body };
      response.json(jobs[jobIndex]);
    } else {
      response.status(404).send('Job not found');
    }
  }

}

export default putJobService;