import { configureStore } from '@reduxjs/toolkit'
import reduxSlice from './components/slice/reduxSlice'

export const store = configureStore({
  reducer: {
    counter:reduxSlice
  },
})