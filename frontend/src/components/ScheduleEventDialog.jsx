import React from 'react';
import { Dialog, Grid, DialogActions, Stack, Button, Typography } from '@mui/material';

function ScheduleEventDialog({ open, onClose, onSave}) {
  return (
    <Dialog open={open} onClose={onClose}
        PaperProps={{ sx:{
            minWidth: 900
        } }}>
        <Typography variant="h2">Schedule an event</Typography>
        {/* <Grid container sx={{
            minWidth: 700,
            height: 500,
            alignItems: "center",
        }}>
            <Grid item xs={6} md={8}>
                <ModifyAssetForm />
            </Grid>
        </Grid> */}
        <DialogActions sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 3}}>
            <Stack direction="row" spacing={10} >
                <Button size="small" variant='outlined' onClick={onClose} sx={{ minWidth: "120px", letterSpacing: "1.5px"}}>Cancel</Button>
                <Button size="small" variant='contained' onClick={onSave} sx={{ minWidth: "120px", letterSpacing: "1.5px"}}>Save</Button>
            </Stack>
        </DialogActions>
    </Dialog>
  )
}

export default ScheduleEventDialog;