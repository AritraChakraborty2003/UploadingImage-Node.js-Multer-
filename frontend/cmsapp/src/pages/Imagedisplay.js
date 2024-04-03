import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Imagedisplay = () =>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:2005/eventAPI").then(
            (res)=>{ setData((res.data).reverse())}
        ).catch((err) => {console.log(err)})
    },[])
    
    return (
        <div className="imgHolder">
            {
        
                data.map((val)=>(
                 <img src={'http://127.0.0.1:2005/images/'+val.image}></img>
           )) }
            </div>
    )
}

export default Imagedisplay;