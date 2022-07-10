import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function LocationCard({city}) {
  return (
    <Box className='city-infos'>
        <Typography variant='h3'>{city} today</Typography>
    </Box>
  )
}

export default LocationCard;