import App from './index';
import searchController from './controllers/jobController';
 
const app = new App(
  [
    new searchController(),
  ],
  3001,
);
 
app.listen();