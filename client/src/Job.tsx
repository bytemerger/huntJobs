import { Paper, Typography} from "@material-ui/core";
import React from "react";

export interface JobType {
    title: string
    company: string
    location?: string
    company_logo?: string
    description: string
    source?:string
    jobsource?:string
    created_at?:string
    url:string
    handleOnClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
// todo factor these into constants file
const ONE_DAY_MS = 24*3600*1000;

// returns a date like Fri Jun 14
function getMDY(ts:Date) {
    return ts.toDateString().split(' ').slice(0,3).join(' ')
}

// makeDate takes a TS and returns a date like Fri Jun 14
// if it's today or yesterday, it returns that instead
function makeDate(timestamp:string) {
    const date = new Date(timestamp);
    const dateStr =  getMDY(date);
    const todayStr = getMDY(new Date());
    const yesterdayStr = getMDY(new Date(Date.now() - ONE_DAY_MS));
    if (dateStr === todayStr) {
        return 'today';
    } else if (dateStr === yesterdayStr) {
        return 'yesterday';
    } else {
        return dateStr;
    }
}
export const Job: React.FC<JobType> = ({title,company,location,created_at,handleOnClick})=>{
    return(
        <Paper onClick={handleOnClick} className="job">
             <div className="flex-align-mid">
                <div className="job-title-location">
                    <Typography variant='h6'>{title}</Typography>
                    <Typography variant='h5'>{company}</Typography>
                    <Typography>{location}</Typography>
                </div>
            </div>
            <div className="flex-align-mid">
                <Typography>{makeDate(created_at!)}</Typography>
            </div>
        </Paper>
    )
}