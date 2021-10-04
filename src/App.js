import './App.css';
import { Typography, Stack, Button, TextField } from '@mui/material';
import Applist from './components/Applist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <Typography variant="h2" py={3}>
          Manage ethinking Apps
        </Typography>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} >
          <TextField id="search" label="search" variant="outlined" />
          <Button variant='contained' color='primary'>Add App</Button>
        </Stack>
        <Applist></Applist>

      </div>

    </div>
  );
}

export default App;
