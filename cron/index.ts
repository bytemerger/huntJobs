import {CronJob} from "cron"
import fetchGithub from "./task/fetch-github"

const job = new CronJob('* * * * * *', function() {
  fetchGithub();
}, null, true, 'America/Los_Angeles');
job.start();