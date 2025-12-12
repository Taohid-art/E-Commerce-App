import { Product } from '@/app/type';
import axios from 'axios';
import{ createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface  Productstate {
    items: Product[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: Productstate = {
    items:[],
    status:'idle'
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get<Product[]>('sajfdhf');
    return response.data;
}

)

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId: string) => {
    const response = await axios.get<Product>(`/api/products/${productId}`);
    return response.data;
})


const ProductSlice = createSlice({
 name : 'products',
 initialState,
 reducers:{},
 extraReducers(builder) {
     builder.addCase(fetchProducts.pending, (state) => {
        state.status= 'loading';
     }).addCase(fetchProducts.fulfilled, (state, action) =>{
        state.status= 'succeeded';
        state.items = action.payload;
     }).addCase(fetchProductById.rejected, (state) => {
        state.status= 'failed'
     }).addCase(fetchProductById.fulfilled, (state , action ) => {
        state.items.push(action.payload);
     })
 },
})

export default ProductSlice.reducer;