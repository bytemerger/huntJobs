import fetch from 'node-fetch';
import * as redis from 'redis'

const client = redis.createClient();
import { promisify } from "util";
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

interface JobType {
    id: string
    title: string
    company: string
    company_logo?: string
    description: string
    source?:string
    jobsource?:string
    url:string
}

const baseUrl = "https://jobs.github.com/positions.json"

async function fetchGithubJobs(){

    let resultCount = 1
    let pageCount = 1;
    let jobsList:Array<JobType> = []
    while(resultCount > 0){
        try{
            const res = await fetch(`${baseUrl}?page=${pageCount}`);
            const jobs = await res.json();
            resultCount = jobs.length
            jobsList.push(...jobs)
            pageCount ++
        }catch(e){
            console.log(e.message)
        }
       
        console.log(jobsList)
    }
    let success = await setAsync('github',JSON.stringify(jobsList))
    console.log({success})
}
export default fetchGithubJobs;