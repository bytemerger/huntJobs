import { Paper} from "@material-ui/core";
import React from "react";

export interface JobType {
    id: String
    title: String
    company: String
    location: String
    handleOnClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const Job: React.FC<JobType> = ({title,company,location,handleOnClick})=>{
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