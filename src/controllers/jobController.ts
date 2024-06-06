import getJobService from '../services/Jobs/getJob';
import postJobService from '../services/Jobs/postJob';
import putJobService from '../services/Jobs/putJob';
import deleteJobService from '../services/Jobs/deleteJob';
import jobRouter from '../router/jobRouter';
 
class searchController {
  public routerService;

 
  constructor() {
    let services = [
      new getJobService(),
      new postJobService(), 
      new putJobService(), 
      new deleteJobService()
    ]
    this.routerService = new jobRouter(services)
  }
}

 
export default searchController;