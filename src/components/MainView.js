import React from 'react'
import { Typography, Stack, Button, TextField } from '@mui/material';
import Applist from './Applist';


function MainView() {
    return (
        <div className="mainContent">
            <Typography variant="h2" py={3}>
                Manage ethinking Apps
            </Typography>
            <div className='actionBar'>
                <div></div>
                <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} >
                    <TextField id="search" label="search" variant="outlined" size='small'/>
                    <Button variant='contained' color='primary'>Add App</Button>
                </Stack>
            </div>
            <Applist></Applist>
        </div>
    )
}

export default MainView
