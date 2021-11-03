import App from './app';
import { startConnection } from './database';

const app = new App();
startConnection();

app.start();
