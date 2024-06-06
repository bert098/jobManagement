import express = require('express');
var cors = require('cors')
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers:any, port:any) {
    this.app = express();
    this.port = port;
    this.app.use(cors());
 
    this.initializeControllers(controllers);
  }
 
  private initializeControllers(controllers:any) {
    controllers.forEach((controller:any) => {
        this.app.use('/', controller.routerService.router);
    
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;