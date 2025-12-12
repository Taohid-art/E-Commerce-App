import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { ProductInCart } from "@/app/type";
import { string } from "zod";
import { it } from "node:test";

interface cardState  {
    items : ProductInCart[],
    totalQuantity: number,
    totalPrice: number
}

const initialState:cardState= {
    items: [],
    totalQuantity:0,
    totalPrice:0
}


const CardSlice = createSlice({
    name: 'card',
    initialState,
    reducers:{
        addToCard: (state , action:PayloadAction<ProductInCart>) => {
            const {id, name, price, selectedColor, selectedSize, quantity} = action.payload;
            const existingItem = state.items.find(item => item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);
            if (existingItem) {
                existingItem.quantity += quantity;
                
            } else {
                state.items.push(action.payload);
            }
            state.totalQuantity += quantity;
            state.totalPrice += price * quantity;
        },
        removeFormCard: (state, action :PayloadAction<{id:number, selectedColor:string | undefined, selectedSize:string |  undefined}>) => {
            const {id,selectedColor,selectedSize} = action.payload;
            const existingItem = state.items.find(item => item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);
            if (existingItem){
                state.items = state.items.filter(item => !(item.id === id && item.selectedColor === selectedColor && item.selectedSize === selectedSize));
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price* existingItem.quantity;
                
            } 
        }
    }

})
export const { addToCard , removeFormCard} = CardSlice.actions;

export default CardSlice.reducer;