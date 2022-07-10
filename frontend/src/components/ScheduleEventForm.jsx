import React, {useState} from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import cities from "../city.list.json";
import LocationCard from './LocationCard';


function ScheduleEventForm() {
    const [fromValue, setFromValue] = useState(new Date());
    const [toValue, setToValue] = useState(new Date());
    const [location, setLocation] = useState("Budapest");

    const handleFromDateTimeChange = (newValue) => {
        setFromValue(newValue);
        if(newValue.getTime() > toValue.getTime()){ //this does not work...
            setToValue(newValue);
        }
    };

    const handleToDateTimeChange = (newValue) => {
        setToValue(newValue);
    };

    const handleLocationChanged = (event) => {
        setLocation(event.target.value);
        console.log(event.target.value);
    };

    return (
        <Box container sx={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: 700,
            height: 500,
            alignItems: "center",
        }
        
        }>
            <Box className='MuiTextField formElements'>
                <TextField id="title" label="Title" variant="outlined"/>
                <TextField id="location" label="Location" variant="outlined" onChange={handleLocationChanged}/>
                <Box>
                    <DateTimePicker
                        label="From"
                        value={fromValue}
                        onChange={handleFromDateTimeChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DateTimePicker
                        label="To"
                        value={toValue}
                        onChange={handleToDateTimeChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
                <TextField
                    id="description"
                    label="Description"
                    variant='outlined'
                    multiline
                    rows={4}
                />
                <LocationCard city={location} />
            </Box>
        </Box>
    );
}

export default ScheduleEventForm;