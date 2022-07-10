import React, {useState} from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function ScheduleEventForm() {
    const [fromValue, setFromValue] = useState(new Date());
    const [toValue, setToValue] = useState(new Date());

    const handleFromDateTimeChange = (newValue) => {
        setFromValue(newValue);
        if(newValue.getTime() > toValue.getTime()){ //this does not work...
            setToValue(newValue);
        }
    };

    const handleToDateTimeChange = (newValue) => {
        setToValue(newValue);
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
            <TextField id="description" label="Description" variant="outlined"/>
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
        </Box>
    );
}

export default ScheduleEventForm;