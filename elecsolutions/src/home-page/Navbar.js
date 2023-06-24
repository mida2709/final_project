import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { Person, QuestionAnswer, AccountCircleRounded } from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [serviceAnchorEl, setServiceAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleServiceMenuOpen = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  const handleServiceMenuClose = () => {
    setServiceAnchorEl(null);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleService1Click = () => {
    navigate('/service1');
  };

  const handleService2Click = () => {
    navigate('/service2');
  };

  const handleService3Click = () => {
    navigate('/service3');
  };

  const handleOrderHistoryClick = () => {
    navigate('/order-history');
  };

  const handleTechnicianListClick = () => {
    navigate('/technician-list');
  };

  const handleLogoutClick = () => {
    // Perform logout logic here
    navigate('/login'); // Assuming the login page is '/login'
  };

  const handleChatClick = () => {
    // Handle chat click logic here
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#2b63cf' }}>
      <Toolbar>
        <Avatar sx={{ bgcolor: 'primary.main', marginRight: '10px' }}>
          <Person />
        </Avatar>
        <Typography variant="h7" color="black" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none' }}>
          ELECSOLUTIONS
        </Typography>
        <QuestionAnswer sx={{ color: 'black', cursor: 'pointer' }} onClick={handleChatClick} />
        <span style={{ margin: '0 5px' }}></span>
        <div>
          <Typography variant="h7" color="black" onClick={handleServiceMenuOpen} sx={{ cursor: 'pointer', textDecoration: 'none' }}>
            Layanan
          </Typography>
          <Menu
            anchorEl={serviceAnchorEl}
            open={Boolean(serviceAnchorEl)}
            onClose={handleServiceMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleHomeClick}>Home</MenuItem>
            <MenuItem onClick={handleService1Click}>Service 1</MenuItem>
            <MenuItem onClick={handleService2Click}>Service 2</MenuItem>
            <MenuItem onClick={handleService3Click}>Service 3</MenuItem>
          </Menu>
        </div>
        <span style={{ margin: '0 15px' }}></span>
        <Link to="/order" className="navbar-link" style={{ textDecoration: 'none', color: 'black'}}>
          Buat Pesanan
        </Link>
        <span style={{ margin: '0 5px' }}></span>
        <div>
          <AccountCircleRounded sx={{ color: 'black', cursor: 'pointer' }} onClick={handleMenuOpen} />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleOrderHistoryClick}>Riwayat Pesanan</MenuItem>
            <MenuItem onClick={handleTechnicianListClick}>Daftar Teknisi</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
