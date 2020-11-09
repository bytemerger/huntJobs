import React from "react";
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,DialogContentText,Chip} from "@material-ui/core"
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { JobType } from "./Job";
interface prop {
    job: JobType
    open: boolean
    handleClose:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const JobModal: React.FC<prop> = ({job,open,handleClose})=> {
  
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
    if (!job.title) {
        return <div />
    }

    return(
    <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {job.title} - 
            {job.company}
            <img className={'detail-logo'} src={job.company_logo} alt="logo" />
          </DialogTitle>
          <DialogContent>
            <DialogContentText 
                id="alert-dialog-slide-description"
            >
              <Chip size="small" label={`from ${job.source}`} />
            </DialogContentText>
            <DialogContentText 
                id="alert-dialog-slide-description"
                dangerouslySetInnerHTML={{__html: job.description}}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <a href={job.url} target="_blank" rel="noreferrer">
                <Button color="primary">
                Apply
                </Button>
            </a>
          </DialogActions>
        </Dialog>
      </div>
    )
}
export default JobModal