
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

const Counter=()=>{

    //agar kisi slice ki particular value find karni h then we we have to use useSelector hook
    const count = useSelector((state)=>state.counter.value);

    const dispatch = useDispatch(); //increment decrement ki value action creator me fetch kar liye the uss values ko call karne k liye useDispatch()  hook use hoga
    return (
        <div>
            <button onClick={()=>dispatch(increment())}> 
                Incrementt
            </button>

            <br></br>
            <div>
                {count}
            </div>
            <br></br>

            <button onClick={()=>dispatch(decrement())}>
                Decrementt
            </button>
        </div>
    )
}
export default Counter;