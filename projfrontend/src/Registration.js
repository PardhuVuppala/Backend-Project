import React, { useState } from 'react'
import axios from 'axios';
import './Registration.css';
// import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom';
function Registration()
 {
    const [ename,setEmpName] = useState("");
    const [eemail,setEmpEmail] = useState("");
    const [emobile,setEmpmobile] = useState("");
    const [ecountry,setEmpCountry] = useState("");
    const [elanguage,setEmpLanguage] = useState("");
    const [egender,setEmpGender] = useState("");
    const [edob,setEmpDOB] = useState("");
    const [epass,setEmpPass] = useState("");
    const [eaddress,setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`Form submitted:`);
      console.log(`NAME: ${ename}`);
      console.log(`EMAIL: ${eemail}`);
      console.log(`PASSWORD: ${epass}`);



      const empsecondary = {
        empname: ename,
        empemail: eemail,
        empmobile: emobile,
        empcountry: ecountry,
        empLanguage:elanguage,
        empgender: egender,
        empdob: edob,
        emppass: epass,
        empaddress: eaddress
    }
  axios.post('http://localhost:4500/reg/register', empsecondary)
 .then(res => {
        console.log(res.data);
        setMessage('REGISTRATION SUCCESSFUL');
        navigate('/');
    });

setEmpName('')
setEmpEmail('')
setEmpmobile('')
setEmpDOB('')
setEmpPass('')
setEmpGender('')
setEmpCountry('')
setEmpAddress('')

    }



    
    return (
     <>
      <h3>{msg}</h3>
      <div onSubmit={handleSubmit} >
       
        <div>
        <br/>
        <br/>
        
         <div className="row" id ="App5">
          <div>
            <div className="card">
              <div className="card-body" id="App4">
                                                            
               <div className="text-center">
                 <h3 className='fw-bold text-secondary'>CREATE ACCOUNT </h3>
               </div>
                      
               <div className="text-left">
                         
                <form>
                 <div className="mb-2">
                   <label className="fw-bold text-secondary" >NAME *</label>
                   <input type="text" name="fullname" value={ename} 
                   onChange={(e)=>setEmpName(e.target.value)} className="form-control" placeholder="Enter Your Full Name" />
                 </div>
                                
                 <div className="mb-2">
                   <label className="fw-bold text-secondary">EMAIL *</label>
                   <input type="email" name="email" value={eemail} 
                   onChange={(e) => setEmpEmail(e.target.value)} className="form-control" placeholder="Enter Your Email"/>
                 </div>
                                
                 <div className="mb-2">
                   <label className="fw-bold text-secondary">MOBILE NO *</label>
                   <input type="tel" id ="mobileno" name="mobileno" value={emobile} 
                   onChange={(e) => setEmpmobile(e.target.value)} className="form-control" placeholder="Enter Your Mobile No"/>
                 </div>
                                
                 <div className="mb-2"> 
                   <label className="fw-bold text-secondary">COUNTRY</label> &nbsp;&nbsp;&nbsp;
                   <select className="form-select" name="country" value={ecountry} 
                   onChange={(e) => setEmpCountry(e.target.value)}>
                    <option value="INDIA">INDIA</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                   </select>
                 </div>
                                
                 <div className="mb-2">
                    <label className="fw-bold text-secondary form-check-label">LANGUAGE KNOWN</label> &nbsp;&nbsp;
                    <input type="checkbox" className="form-check-input" name="english"  value="English" checked={elanguage === 'English'}
                    onChange={(e) => setEmpLanguage(e.target.value)}/>
                       <span className="text-secondary">English</span> &nbsp;&nbsp;
                    <input type="checkbox" className="form-check-input" name="bengali" value="Bengali" checked={elanguage === 'Bengali'}
                    onChange={(e) => setEmpLanguage(e.target.value)}/>
                       <span className="text-secondary">Bengali</span> &nbsp;&nbsp;
                    <input type="checkbox" className="form-check-input" name="hindi" value="Hindi" checked={elanguage === 'Hindi'}
                    onChange={(e) => setEmpLanguage(e.target.value)}/>
                       <span className="text-secondary">Hindi</span>
                 </div>
                                
                 <div className="mb-2">
                    <label className="fw-bold text-secondary form-check-label">GENDER</label> &nbsp;&nbsp;&nbsp;
                    <input type="radio" className="form-check-input" name="gender" value="MALE" checked={egender === 'MALE'}
                    onChange={(e) => setEmpGender(e.target.value)} />
                        <span className="text-secondary">MALE</span> &nbsp;&nbsp;
                    <input type="radio" className="form-check-input" name="gender" value="FEMALE" checked={egender === 'FEMALE'}
                    onChange={(e) => setEmpGender(e.target.value)} />
                        <span className="text-secondary">FEMALE</span>
                 </div>
                                
                 <div className="mb-2">
                    <label className="fw-bold text-secondary">DATE OF BIRTH</label>
                    <input type="date" name="dob" value={edob} 
                    onChange={(e) => setEmpDOB(e.target.value)} className="form-control" max="2012-12-31"/>
                 </div>
                                
                 <div className="mb-2">
                    <label className="fw-bold text-secondary">PASSWORD</label>
                    <input type="password" name="password" value={epass} 
                    onChange={(e) => setEmpPass(e.target.value)} className="form-control" placeholder="Enter password" required/>
                 </div>
        
                 <div className="mb-2">
                    <label className="fw-bold text-secondary">ADDRESS</label> 
                    <br/>
                    <textarea name="address" value={eaddress}
                    onChange={(e) => setEmpAddress(e.target.value)} placeholder="Write your Address Here" rows="2" cols="70" ></textarea>
                 </div>
                 
                 <div className="d-grid">		 
                   <input type="submit" className="btn btn-secondary" value="CREATE ACOUNT"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 </div>
                </form>
               </div> 
              </div> 
            </div> 
           </div> 
          </div> 
        </div> 
      </div>
        </>
        )
}
export default Registration;