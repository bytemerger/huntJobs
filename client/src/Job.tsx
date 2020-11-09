import { Paper} from "@material-ui/core";
import React from "react";

export interface JobType {
    title: string
    company: string
    company_logo?: string
    description: string
    source?:string
    jobsource?:string
    url:string
    handleOnClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const Job: React.FC<JobType> = ({title,company,handleOnClick})=>{
    return(
        <Paper onClick={handleOnClick}>
            <h1>title</h1>
            <div>
                <h5>location</h5>
                <small>company</small>
            </div>
        </Paper>
    )
}