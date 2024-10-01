
import {createSlice} from "@reduxjs/toolkit"
//slie k andar object send karni padegi, uss object k andar humko 3 values send karni hai

const initialState={
    value: 0,
}

const CountSlice=createSlice({
    name: "counter",
    initialState,
    reducers: {  //we will define functionality here like increment or decrement

        increment : (state)=>{
            state.value+=1;
        },
        decrement : (state)=>{
            state.value-=1;
        }
    }
})

//agar slice k andar se increment or decrement (functions) ki implementation  nikalni hai then we have to take values from their actions
export const {increment, decrement} = CountSlice.actions;
export default CountSlice.reducer;