import React from "react";
import {Grid} from "@material-ui/core"
import {JobType} from "./Job"
import {Job} from "./Job"
import JobModal from "./JobModal"
interface props<T> {
    jobs: T[]
  }
 const Jobs: React.FC<props<JobType>> = ({jobs})=> {
  const [open,setOpen] = React.useState(false)
  const starter: JobType = {
	  title:"",
	  company:"",
	  description:"",
	  url:""
  }
  const [selectedJob,selectJob] = React.useState<JobType>(starter)
    return (
     <div>
		<JobModal open={open} job={selectedJob} handleClose={e=>{
			e.preventDefault();
			setOpen(false);
			selectJob(starter);
		}} />
        <div className="dez-bnr-inr dez-bnr-inr-md">
            <div className="container">
                <div className="dez-bnr-inr-entry align-m ">
					<div className="find-job-bx">
						<p className="site-button button-sm">Find Jobs, Employment & Career Opportunities</p>
						<h4>Search Based on Personal preferences from <br/> <span className="text-primary">50,000</span> Open Jobs.</h4>
						<form className="dezPlaceAni">
							<Grid container spacing={4}>
								<Grid item className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Job Title, Keywords, or Phrase</label>
										<div className="input-group">
											<input type="text" className="form-control" placeholder=""/>
											<div className="input-group-append">
											  <span className="input-group-text"><i className="fa fa-search"></i></span>
											</div>
										</div>
									</div>
								</Grid>
								<Grid item   alignItems="center" className="col-lg-3 col-md-6">
									<div className="form-group">
										<select>
											<option>All</option>
											<option>Remote</option>
										</select>
									</div>
								</Grid>
								<Grid item xs={12} className="col-lg-2 col-md-6">
									<button type="submit" className="site-button btn-block">Find Job</button>
								</Grid>
							</Grid>
						</form>
					</div>
				</div>
            </div>
        </div>
        {
          jobs.map((job: JobType,i:number)=>(
            <Job key={i} {...job} handleOnClick={e => {
              e.preventDefault();
              setOpen(true)
              selectJob(job);
			}}>i</Job>
			))
        }
      </div> 
    );
  }
export default Jobs;