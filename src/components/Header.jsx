import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slice/reduxSlice'

const Header = () => {
    let data = useSelector((state)=>state.counter.value)
   
    

      let dispatch = useDispatch()
    let handleIncrement = ()=>{
        dispatch(increment())
    }
    let handledecrement = ()=>{
        dispatch(decrement())
        
        
    }
  return (
    <>
 
 <button onClick={handleIncrement} >+</button>
    <div className="">
        {data}
    </div>
    <button onClick={handledecrement}>-</button>
 </>
    
  )
}

export default Header