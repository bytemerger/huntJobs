import React from 'react';
import './App.css';
import { JobType } from './Job';
import Jobs from './Jobs';

const fetchJobs = async (updateJobs: React.Dispatch<React.SetStateAction<JobType[]>>)=>{
  let res = await fetch("http://localhost:3001/api/jobs");
  let jobs = await res.json();
  updateJobs(jobs);
}
function App() {
  React.useEffect(()=>{
    fetchJobs(getjobs)
  },[])
  const[jobs,getjobs] = React.useState<Array<JobType>>([])
  return (
    <div>
        <Jobs jobs={jobs} ></Jobs>
    </div>
  );
}

export default App;
