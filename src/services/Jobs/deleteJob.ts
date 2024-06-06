const dotenv = require('dotenv');
dotenv.config()
import * as express from 'express';
dotenv.config();
import jobs from '../../jobs';

class deleteJobService {
  public path = '/jobs/:id';
  public type = "delete"
  public service = async (request: express.Request, response: express.Response) => {
    const jobId = parseInt(request.params.id);
    const jobIndex = jobs.findIndex(job => job.id === jobId);
    if (jobIndex !== -1) {
      const deletedJob = jobs.splice(jobIndex, 1);
      response.json(deletedJob);
    } else {
      response.status(404).send('Job not found');
    }
  }

}

export default deleteJobService;