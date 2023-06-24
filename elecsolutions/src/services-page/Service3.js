import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {   Typography,  Grid, Card, CardContent, Button } from '@mui/material';
import { Box } from '@mui/system';
import useClient from './useClient';
import ProductDetail from './productDetail';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../home-page/Navbar';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Service3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState([]);
  const client = useClient();
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get("tim4_product1");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [client]);

  const handleItemClick = (itemId) => {
    navigate(`/service1/product/${itemId}`);
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          position: 'absolute',
          width: '280px',
          height: '2500px',
          left: '0px',
          top: '80px',
          backgroundColor: '#D9D9D9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '10px',
          marginLeft: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ position: 'relative' }}>
          <hr
            style={{
              position: 'absolute',
              width: '215px',
              height: '0px',
              left: '0px',
              top: '40px',
              borderTop: '1px solid black'
            }}
          />
        </div>
        <hr
          style={{
            position: 'absolute',
            width: '215px',
            height: '0px',
            left: '10px',
            top: '110px',
            borderTop: '1px solid black'
          }}
          
        />
              <div
        style={{
          position: 'absolute',
          width: '1230px',
          height: '195px',
          top: '2500px',
          bottom: 0,
          backgroundColor: '#EEEEEE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: '0 20px',
          textAlign: 'right',
          left: '0px'
        }}
      >
        <Typography variant="body1" color="text.secondary">
          ELECSOLUTIONS
        </Typography>
        <Typography variant="body1" color="text.secondary">
        <span style={{ display: 'flex', alignItems: 'flex-end' }}>
      
        <span
  style={{
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <CopyrightIcon />
  <span style={{ marginLeft: '5px' }}>2023 Elecsolutions</span>
</span>
  </span>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Elecsolutions
          <br />
          +1 897 6335 827
          <br />
          Jln. Jenderal Gatot Subroto Jakarta 10270
          <br />
          Gedung Nusantara III
        </Typography>
      </div>
        <Link to="/service1" className="navbar-link" style={{ marginBottom: '40px', color: 'Black', textDecoration: 'none' }}>
          Service 1
        </Link>
        <Link to="/service2" className="navbar-link" style={{ marginBottom: '40px', color: 'Black', textDecoration: 'none' }}>
          Service 2
        </Link>
        <Link to="/service3" className="navbar-link" style={{ color: 'Black', textDecoration: 'none' }}>
          Service 3
        </Link>
      </Box>
      <Grid container spacing={2} sx={{ padding: '20px', marginTop: '100px' }}>
        <Grid item xs={9} sx={{ marginLeft: 'auto' }}>
          <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>
            Service 3 / Semua Produk
          </Typography>
          <Grid container spacing={2}>
            {data.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <img src={require(`../images/${item.image}`)} alt={item.name} style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      Biaya Layanan: {item.harga}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleItemClick(item._id)}
                      sx={{
                        marginTop: '10px',
                        backgroundColor: '#fbbc05',
                        color: 'white',
                        fontSize: '12px',
                        height: '100%',
                      }}
                    >
                      Lihat Detail Produk
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};

export default Service3;
