import axios from 'axios';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/tim4_product');
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message });
    }
  };
};
