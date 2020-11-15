# huntJobs
A web app for job search

## Summary
The client is a react app, it access the jobs by calling a node express endpoint which serves the job already stored in the redis.
There is a cron job running every hour to update the redis store with jobs from different sources( github jobs is already implemented).

## Stack
REACT, TYPESCRIPT, NODE(EXPRESS), REDIS

## Deployment
To deploy bundle the code to js and purchase a server to run the app.
1. Install ngnix to serve the app to the internet( remember to foward the internal port the app will run on (probably port 5000 when using serve) to port 80)
2. Install node , npm and redis on the server
3. Install pm2 globally - a process runner to run the different components of the app it could also help with load balancing.
4. Install serve to run the client on pm2

it will also be nice if you can foward all api request to the local api server
by 
1. change the api url to`/api/jobs`
2. create a proxy `proxy /api{
  proxy_pass http://localhost:3001;
}` in the site-enabled ngnix config


