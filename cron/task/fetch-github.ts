import fetch from 'node-fetch';

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
    let pageCount = 0;
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
}
export default fetchGithubJobs;