import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardMedia, CardActions,Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { margin } from '@mui/system';

const sectionStyle = {
  height: "100vh",

  backgroundImage:
    "url('/3.jpg') ",

  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};



function App() {
  
  return (
    <Box style={sectionStyle}>
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" sx={{ bgcolor: 'common.black' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.02, color: '#c7c3c3a9', fontFamily: 'Open Sans', fontSize: 20}}>
              Главная⠀⠀|
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.02, color: '#c7c3c3a9', fontFamily: 'Open Sans', fontSize: 20}}>
              Новости⠀⠀|
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.02, color: '#c7c3c3a9', fontFamily: 'Open Sans', fontSize: 20}}>
              Альбомы⠀⠀|
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#c7c3c3a9', fontFamily: 'Open Sans', fontSize: 20}}>
              Мерч
            </Typography>
            <Button sx={{color: '#c7c3c3a9', fontSize: '30'}}>Войти</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <Typography component="div" align='center' sx={{bgcolor: '#0000001c', mt: 1}}>
          <h1>Альбомы</h1>
        </Typography>
      </Box>
      <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '70px',
            ml: 5,
            mt: 3,
            bgcolor: '#0000001c'
				}}>
        <Card sx={{ maxWidth: 400, bgcolor: '#0000001c', mt: 3}}>
          <CardMedia
            component="img"
            alt="Альбом 7"
            height="400"
            image="7.jpg"
          />
          <CardContent sx={{ textAlign: 'center', bgcolor: '#0000001c'}}>
            <Typography gutterBottom variant="h5" component="div">
            <h2 >7</h2>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, bgcolor: '#0000001c', mt: 3}}>
          <CardMedia
            component="img"
            alt="Альбом Костёр"
            height="400"
            image="8.jpg"
          />
          <CardContent sx={{ textAlign: 'center', bgcolor: '#0000001c'}}>
            <Typography gutterBottom variant="h5" component="div">
            <h2>Костёр</h2>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400, bgcolor: '#0000001c', mt: 3 }}>
          <CardMedia
            component="img"
            alt="Альбом Слэм"
            height="400"
            image="9.jpg"
          />
          <CardContent sx={{ textAlign: 'center', bgcolor: '#0000001c'}}>
            <Typography>
            <h2>Слэм</h2>
            </Typography>
          </CardContent>  
        </Card>
      </Box>
    </Box>
  );
}

export default App;
