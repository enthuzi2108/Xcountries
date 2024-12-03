import logo from './logo.svg';
import './App.css';
import {useEffect,React, useState} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Grid2 } from '@mui/material';

 
function App() {
  const [data,setData] = useState([])
  const url = 'https://xcountries-backend.azurewebsites.net/all'
  useEffect(() => {
    try {
      const fetchedData =  axios.get(url).then(res => {
         setData(res.data);
        console.log(res.data,"fetchData...")
      })
    } catch (error) {
      console.error("Checking error...")
    }
  }, []);
  return (
   
     <Grid2 container spacing={3}>
      {data.map((item) => (
        <Grid2 item xs={12} sm={6} md={4} key={item.id}>
          <Card sx={{ width: 200 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.flag} 
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom sx={{fontSize:"1em"}}>
                {item.name} 
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default App;
