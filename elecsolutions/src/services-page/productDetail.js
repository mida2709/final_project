import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem(''); 
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get(`https://msib-feb3-objectstorage.productzillaacademy.com/collections/tim4_product/${id}`, { headers });
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <img src={require(`../images/${product.image}`).default} alt={product.name} style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Biaya Layanan: {product.harga}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
