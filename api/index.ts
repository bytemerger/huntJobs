import * as redis from 'redis'
import * as express from 'express';
import { promisify } from "util";

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

const app = express()
const port = 3001

app.get('/api/jobs', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  let jobs = await getAsync("github")
  return res.send(JSON.parse(jobs))
})

app.listen(port, () => {
  console.log(`Jobs app listening at http://localhost:${port}`)
})