import React, {useState} from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function ScheduleEventForm() {
    const [fromValue, setFromValue] = useState(new Date());
    const [toValue, setToValue] = useState(new Date());
    const [Location, setLocation] = useState("Budapest");

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
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="title" label="Title" variant="outlined"/>
            <TextField id="location" label="Location" variant="outlined" onChange={handleLocationChanged}/>
                <Box className='MuiTextField formElements'>
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
                <TextField id="description" label="Description" variant="outlined"/>
        </Box>
    );
}

export default ScheduleEventForm;