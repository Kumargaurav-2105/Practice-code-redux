import { useState } from "react"


function useValue(initialValue) {
    const [value, setvalue]=useState(initialValue)
    const reset=()=>{
        setvalue(initialValue);
    }
    const bind={
        value: value,
        onChange: (e)=>setvalue(e.target.value)
    }  
    return [value, bind, reset]
}

export default useValue