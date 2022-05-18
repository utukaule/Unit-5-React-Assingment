import { useState } from "react"

export const Count = () => {
    const [count,setCount] = useState(0);

    return <>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <button onClick={()=> setCount(count-1)}>Subtract</button>
    </>
}