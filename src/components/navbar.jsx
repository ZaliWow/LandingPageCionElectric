import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { grey } from '@mui/material/colors';
import  JavascriptIcon  from '@mui/icons-material/Javascript';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';




const pages = ['Sobre Nosotros', 'Servicios', 'Contacto', 'Item4', ];  
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function Navbar({}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


 
  const handleGithub = () => {
    window.open("https://github.com/ZaliWow", '_blank');
  }
  const handleLinkedin = () => {

    window.open("https://www.linkedin.com/in/william-david-morales-pineda-551589249/", '_blank');
     
  }
 
  return (
  <AppBar position="static" elevation={0} sx={{backgroundColor: 'transparent', color: 'white'}}>
  <Container maxWidth="xl"  >
    <Toolbar disableGutters>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        CIONELECTRIC
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
        <IconButton
          variant="dark"
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
         
          <MenuIcon sx={{color:'white'}} />
          
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
            color: 'white',
          }}
        >
          {pages.map((page) => (
             <Button
             key={page}
             href={'#' + page }
             onClick={handleCloseNavMenu}
             sx={{ my: 2, color: 'black', display: 'block' }}
           >
             {page}
           </Button>
          ))}
        </Menu>
        
      </Box>

      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        
      </Typography>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      
      </Box>

      <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
      
          <Button
          variant="dark"
            key={page}
            href={'#' + page }
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
     
       <Tooltip  >
      
       <Button variant='dark' sx={{backgroundColor:'yellow', color:'black'}}>Call action</Button>
         
          
        </Tooltip>
    </Toolbar>
  </Container>
</AppBar>

  );
}