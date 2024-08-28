import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    value: JSON.parse(localStorage.getItem("count")) ? JSON.parse(localStorage.getItem("count")) : 0,
}

export const reduxSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
    let ami=  state.value += 1
      localStorage.setItem("count", JSON.stringify(ami))
    },
    decrement: (state) => {
        if(state.value > 0){
         let tmi =  state.value -= 1
            localStorage.setItem("count", JSON.stringify(tmi))
        }
      
    },
 
 
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = reduxSlice.actions

export default reduxSlice.reducer