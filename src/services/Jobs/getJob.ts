const dotenv = require('dotenv');
dotenv.config()
import * as express from 'express';
dotenv.config();
import jobs from '../../jobs';

class getJobService {
    public path = '/jobs';
    public type = "get"
    public service = async (request: express.Request, response: express.Response) => {

        let names: any = jobs
        if (request.query.id!) {
            const filterJobById = names.find((job: { id: any }) => job.id === Number(request.query.id));
            response.status(200).send(filterJobById);
        } else {
            const getJobTypes = names.map(({ id, jobType }: { id: number; jobType: string }) => ({ id, jobType }));
            response.status(200).send(getJobTypes);
        }
    }

}

export default getJobService;