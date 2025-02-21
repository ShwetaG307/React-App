
//jsx
import { useEffect, useRef, useState} from "react";

const Counter = ()=>{
    const prevCountRef = useRef(0)
    const[count,setCount] = useState(0) //
    const handInc =()=>{
        setCount(count+40)
    }
    return(
        <div>
            {/* //content along with tag = element */}
            <p> Count Value = {count}</p>  
            <button onClick={handInc}> Icrement </button>
            <p> Previous Counter Value = {prevCountRef.current}</p>
        </div> 
    )
}
export default Counter

//useref to store previous count