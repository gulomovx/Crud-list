import { createSlice } from "@reduxjs/toolkit";
import  {storeData} from '../../../Data'
const initialState = {
    products: storeData,
    amount: 0,
    total:0
     
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        incrementBasket: (state, action) => {
            state.products.map((product) => {
                if (product.name === action.payload) {
                    return {...product, amount :product.amount+=1}
                } else {
                    return product
                }
            })
     },
        decrementBasket: (state, action) => {
            state.products.map((product) => {
                if (product.name === action.payload) {
                    return {...product, amount :product.amount-=1}
                } else {
                    return product
                }
            })
        },
        removeItem: (state, {payload}) => {
           state.products= state.products.filter((item) => {
               return item.name !== payload;
            })
        },
        updateTotal: (state) => {
            let amount = 0
            let total = 0
            
            state.products.forEach((item) => {
                amount += item.amount
              total+=item.price*item.amount  
            })
            state.amount = amount
            state.total=total
        }
    }
    
})
    
    
 export const {incrementBasket, decrementBasket, removeItem, updateTotal}=basketSlice.actions
export default basketSlice.reducer





