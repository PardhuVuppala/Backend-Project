import React, { useState } from 'react'
//import Navbar from './Navbar'
// import { Navigate } from "react-router-dom";
import './Nav.css';
import axios from 'axios'
function Delete() {
    const [msg, setMessage] = useState("");
    const [eemail, setEmpEmail] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //console.log(`Form submitted:`);
        //console.log(`EMAIL ID: ${eemail}`);

        axios.delete('http://localhost:4500/reg/remove/' + eemail)
            .then(res => {
                console.log(res.data)
                setMessage('USER SUCCESSFULLY DELETED')
            })
            .catch(err => {
                console.log(err)
                setMessage('INVALID EMAIL ID')
            })

        setEmpEmail('')
    }

    

        return (
            <>
               
                <br />
                <h3 style={{ color: 'brown' ,textAlign:"center"}} className='text-secondary'>ENTER EMAIL ID FOR DELETE</h3>
                <b style={{ color: "red", display:"flex",justifyContent:"center"}}>{msg}</b>
                <form onSubmit={handleSubmit}>
                    <input type="email" className='Pardhu'  value={eemail}
                        onChange={(e) => setEmpEmail(e.target.value)}
                        placeholder="EMAIL ID"
                        required />
                    <br />
                    <input type="submit"  id='Pardhu'  value=" Remove User" className="btn btn-danger" />
                </form>
            </>)
    }

export default Delete;