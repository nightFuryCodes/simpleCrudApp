import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'

export default function Create(){

    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:3000/create",{id, name})
        .then(res=>{
            console.log(res);
            navigate('/');
        })
    }

    return<div className='container'>
        <div className="container_form">
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className="fields">
                    <label for="userid">User Id:</label>
                    <input id = "User Id" className="form-control"
                      onChange={e=>setId(e.target.value)}  
                    />
                </div>
                <div className="fields">
                    <label for="Name">Name:</label>
                    <input id = "Name" className="form-control"
                      onChange={(e)=>setName(e.target.value)}  
                    />
                </div>
                <button>Add Student</button>
            </form>
        </div>

    </div>
}