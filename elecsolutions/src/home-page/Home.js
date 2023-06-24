import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import useClient from './useClient';
import Navbar from './Navbar';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SearchIcon from '@mui/icons-material/Search';


const Home = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const client = useClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get('/tim4_product');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [client]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const handleDetailClick = (productId) => {
    console.log('View detail for product with ID:', productId);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const carouselItems = [
    //masih gambar contoh
    { imgSrc: require('../images/laptop.jpg'), altText: 'Image 1' },
    { imgSrc: require('../images/scanner.jpg'), altText: 'Image 2' },
    { imgSrc: require('../images/cctv.jpg'), altText: 'Image 3' },
  ];

  return (
    <div>
      <Navbar />
<div
  style={{
    position: 'relative',
    width: '800px',
    height: '500px',
    left: '10px',
    top: '80px',
    backgroundColor: '#D9D9D9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <div style={{ width: '100%' }}>
    <img
      src={carouselItems[activeIndex].imgSrc}
      alt={carouselItems[activeIndex].altText}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>

  <div
    style={{
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {carouselItems.map((_, index) => (
      <span
        key={index}
        style={{
          height: '10px',
          width: '10px',
          borderRadius: '50%',
          backgroundColor: index === activeIndex ? 'white' : '#c4c4c4',
          margin: '0 5px',
          cursor: 'pointer',
        }}
        onClick={() => setActiveIndex(index)}
      />
    ))}
  </div>

  <IconButton onClick={handlePrevious} style={{ position: 'absolute', left: '20px', top: '50%', color: 'black', transform: 'translateY(-50%)' }}>
    <ChevronLeft />
  </IconButton>
  <IconButton onClick={handleNext} style={{ position: 'absolute', right: '20px', top: '50%', color: 'black', transform: 'translateY(-50%)' }}>
    <ChevronRight />
  </IconButton>
</div>


      <div
        style={{
          position: 'absolute',
          width: '435px',
          height: '239px',
          left: '820px',
          top: '80px',
          backgroundColor: '#D9D9D9',
        }}
      >
        <img
          src={require('../images/voucher1.png')}
          alt="Deskripsi Gambar 2"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '435px',
          height: '230px',
          left: '820px',
          top: '339px',
          backgroundColor: '#D9D9D9',
        }}
      >
        <img
          src={require('../images/voucher1.png')}
          alt="Deskripsi Gambar 2"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '96%',
          height: '200px',
          top: '2500px',
          bottom: 0,
          backgroundColor: '#D9D9D9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: '0 20px',
          textAlign: 'right',
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
      <div
        style={{
          position: 'absolute',
          width: '1230px',
          height: '100px',
          left: '10px',
          top: '600px',
          backgroundColor: '#eaeaec',
          padding: '10px',
        }}
      >
        <div style={{ marginTop: '20px' }}>
          <TextField
            label="Cari Produk Layanan"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth
          />
        </div>
        <Grid container spacing={2} sx={{ padding: '20px', marginTop: '20px' }}>
          {filteredData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <img src={require(`../images/${item.image}`)} alt={item.name} style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
                  {item.harga && (
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      Biaya Layanan: {item.harga}
                    </Typography>
                  )}
                </CardContent>
                <Grid container justifyContent="center" sx={{ marginTop: 'auto' }}>
                  <Grid item>
                  <Button variant="contained" color="secondary" component={Link} to={`/service1/product/${item._id}`} sx={{ backgroundColor: '#fbbc05' }}>
                    Lihat Detail
                  </Button>

                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      
    </div>
  
  );
};

export default Home;
