/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { getData } from "./app/db.repository";

const app = express();

app.get('/api', (req, res) => {
  return res.send(getData());
});

const port = process.env.port || 4201;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
