import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Student.css'

export default function Student(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then(res=>setData(res.data));
    }, [])

    function handleDelete(id){
        try{
            axios.delete('http://localhost:3000/data/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    }


    return <div className="container">
        <div className="container_table">
       <Link to="/create"><button className='add'>Add Student</button></Link>
       <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {data.map((i)=>{
                    return <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td><Link to={`/update/${i.id}`}><button className="btn primary">Update</button></Link>
                        <button className="btn delete"
                            onClick={e=>handleDelete(i.id)}
                        >Delete</button></td>
                    </tr>
                })}
            </tbody>
       </table>
       </div>
    </div>

}