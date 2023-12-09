const { createSlice } = require("@reduxjs/toolkit");



const cartSlice = createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
    //function to add items into cart
    addToCart : (state,action)=>{
        state.push(action.payload)
    },
    //function to rmove items from the cart
    removefromcart :(state,action)=>{
    return state.filter(item=>item.id!=action.payload)
    },
    //function to remove all items from cart
    emptycart:(state)=>{
        return state=[]
     }

 }
}
)

export const {addToCart , removefromcart,emptycart} = cartSlice.actions

export default cartSlice.reducer