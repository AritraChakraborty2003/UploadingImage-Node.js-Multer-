import { useState } from "react";
import axios from "axios";
const Fileupload = () =>{
    const [file,setFile]=useState();
    const handleChange = (e) =>{
        
        setFile(e.target.files[0])
    }
    function handleUpload(){
        const formData=new FormData();
        formData.append("image",file);
        axios.post("http://127.0.0.1:2005/eventAPI",formData).then(
            res=>{
                if(res.data.status==="success")
                    {
                        console.log("Successful");
                    }
                else{
                     console.log("Not successful");
                }
            }
        ).catch ((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="form">
            <input type="file" name="files" onChange={handleChange}></input>
            <button onClick={handleUpload} type="submit">Submit</button>
        </div>
    )
}

export default Fileupload;