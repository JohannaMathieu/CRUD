import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Delete, ModeEdit } from '@mui/icons-material';


function Applist() {
    const [applist, setApplist] = useState([]);

    useEffect(() => {
        axios.get('https://615adf5e4a360f0017a812ee.mockapi.io/api/App')
          .then(function (response) {
              setApplist(response.data);
              console.log(applist)
          })
          .catch(function (error) {
              console.log(error);
        });
    }, []);

    return (
        <div className='applist'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>App ID</TableCell>
                        <TableCell>App Name</TableCell>
                        <TableCell>Tag IDs</TableCell>
                        <TableCell align="right">edit</TableCell>
                        <TableCell align="right">delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {applist.map((app) => (
                        <TableRow
                        key={app.ID}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{app.ID}</TableCell>
                        <TableCell >{app.Name}</TableCell>
                        <TableCell >{app.Liste.map((tag)=> tag.ID +', ')}</TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="edit" color='info'>
                                <ModeEdit />
                            </IconButton>
                        </TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="delete" color='warning'>
                                <Delete />
                            </IconButton>
                        </TableCell>

                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Applist
