import React from 'react';
import { Dialog, DialogTitle, Typography } from '@mui/material';

function ScheduleEventDialog({onClose, open}) {
  return (
    <Dialog onClose={onClose} open={open}>
        <DialogTitle>Schedule an event</DialogTitle>
        <Typography variant="p">Happy to be here!</Typography>
    </Dialog>
  )
}

export default ScheduleEventDialog;