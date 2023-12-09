import { createSlice } from "@reduxjs/toolkit";



const wishlistslice = createSlice({
    name:'wishlist',
    initialState:[],//to store more than one value
    reducers:{
        //action
        //function to add items to the state
        addToWishlist :(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist :(state,action)=>{
            //filter = returns a new array satisfying the condition
           return state.filter(item=>item.id!=action.payload)

        }
    }

})

export const {addToWishlist,removeFromWishlist} = wishlistslice.actions

export default wishlistslice.reducer