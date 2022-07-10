import React, {useState} from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function ScheduleEventForm() {
    const [fromValue, setFromValue] = useState(new Date());

    const handleChange = (newValue) => {
        setFromValue(newValue);
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
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>
        </Box>
    );
}

export default ScheduleEventForm;