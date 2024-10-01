
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'


//ek centralized store multiple slice se banta hai
export const store = configureStore({ //configureStore ek global store create karta hai jahan par sara centralized data pada hoga
  reducer: {
    counter: counterSlice      //reducer me ek slice define kar diya h   counter slice hai & counterSlice uska reducer
  },
})