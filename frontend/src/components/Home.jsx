import React, {useState} from 'react';
import { Box, Typography, Button } from '@mui/material';
import ScheduleEventDialog from './ScheduleEventDialog';

function Home() {
    const [scheduleEventDlgOpened, setScheduleEventDlgOpened] = useState(false);

    const scheduleEventButtonClicked = () => {
        setScheduleEventDlgOpened(true);
        console.log("edit btn cicked");
    }

    const closeScheduleEventDialog = () => {
        setScheduleEventDlgOpened(false);
        console.log("schedule dialog is closing");
    }

    // const saveCloseModifyDlg = () => {
    //     closeModifyDlg();
    //     // save
    //     console.log("save btn cicked");
    // }


  return (
    <Box>
        <Typography variant="h1">Welcome to Szilvi's event scheduler!</Typography>
        <Button
            size="medium" 
            variant="contained" 
            onClick={scheduleEventButtonClicked} 
            sx={{ minWidth: "80px", letterSpacing: "1.5px"}}
        >
            Let's start!
        </Button>
        <ScheduleEventDialog  open={scheduleEventDlgOpened} handleCloseFunction={closeScheduleEventDialog} /> 
    </Box>
  )
}

 // handleSaveCloseFunction={saveCloseModifyDlg}

export default Home