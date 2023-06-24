import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Membuat async thunk untuk mengambil data carousel dari backend
export const fetchCarouselItems = createAsyncThunk('carousel/fetchCarouselItems', async () => {
  // Kode untuk mengambil data carousel dari backend
  const response = await fetch('https://example.com/api/carousel');
  const data = await response.json();
  return data;
});

const carouselSlice = createSlice({
  name: 'carousel',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarouselItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarouselItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCarouselItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCarouselItems = (state) => state.carousel.items;

export default carouselSlice.reducer;
