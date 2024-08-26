import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Update.css"


export default function Update(){
    const [newId, setNewId] = useState("");
    const [newName, setNewName] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    
    function handleSubmit(e){
        e.preventDefault();
        axios.put(`\http://localhost:5173/update/${id}` ,{newName,newId})
        .then(res=>{
            console.log(res);
            navigate("/");
        }).catch(err=>console.log(err));
    }


    return<>
         <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          onChange={(e)=>{
            setNewId(e.target.value)
          }}
          placeholder="Enter your ID"
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={e=>{setNewName(e.target.value)}}
          placeholder="Enter your name"
          required
        />
      </div>
      <button type="submit">Update</button>
    </form>
    </>
}