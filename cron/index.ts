import {CronJob} from "cron"
import fetchGithub from "./task/fetch-github"

const job = new CronJob('0 * * * *', function() {
  fetchGithub();
}, null, true, 'America/Los_Angeles');
job.start();