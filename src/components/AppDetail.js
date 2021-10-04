import React, {useState, useEffect} from 'react'
import { Typography, Stack, Button, Card, CardContent } from '@mui/material';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

function AppDetail() {
    let { id } = useParams();
    let history = useHistory();
    const [appDetail, setAppDetail] = useState([]);

    useEffect(() => {
        axios.get(`https://615adf5e4a360f0017a812ee.mockapi.io/api/App/${id}`)
          .then(function (response) {
              setAppDetail(response.data);
              console.log(appDetail)
          })
          .catch(function (error) {
              console.log(error);
        });
    }, []);

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div>
            <Typography variant="h2" py={3}>
                Details for app with ID: {id}
            </Typography>
            <div className='actionBar'>
                <Button variant='contained' color='primary' onClick= {handleClick}>Back to List</Button>
                <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} >
                    <Button variant='contained' color='info'>Edit App</Button>
                    <Button variant='contained' color='warning'>Delete App</Button>
                </Stack>
            </div>
            <Card sx={{ minWidth: 275, my: 3 }}>
                <CardContent textAlign='left'>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {`App ID ${appDetail.ID}`}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {appDetail.Name}
                    </Typography>
                    <Typography variant="body1" my={1}>
                    Tags
                    {appDetail.Liste && <div className='taglist'>
                        {appDetail.Liste.map((tag)=>(
                            <div className='tag'>
                                <Typography variant="body2">ID: {tag.ID}</Typography>
                                <Typography variant="body2">Name: {tag.Name}</Typography>
                            </div>
                        ))}
                    </div>}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}

export default AppDetail
