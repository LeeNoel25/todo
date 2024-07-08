import app from './app';
import config from './config';

const port = config.master.port;

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
