import * as express from 'express';
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
 
 
class jobRouter {
  public services;
  public router = express.Router();

 
  constructor(services: Array<any>) {
    this.services = services
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    for(let i = 0; i < this.services.length; i++){
      if(this.services[i].type == "get"){
        this.router.get(this.services[i].path, this.services[i].service);
      }else if(this.services[i].type == "post"){
        this.router.post(this.services[i].path, jsonParser, this.services[i].service);
      }
      else if(this.services[i].type == "put"){
        console.log('doing put')
        this.router.put(this.services[i].path,jsonParser, this.services[i].service);
      }
      else if(this.services[i].type == "delete"){
        this.router.delete(this.services[i].path, this.services[i].service);
      }
    }
  }
}

 
export default jobRouter;