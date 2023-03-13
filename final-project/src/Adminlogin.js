import React, { useState } from "react";
import Footer from "./Footer";
import Header4 from "./Header4";
import { useNavigate} from "react-router-dom";


function Adminlogin(){
  const[email,setemail] = useState();
  const[password,setpassword] = useState();
  let Navigate= useNavigate(); 

 const login=()=>{  
  if(email == ""){
    alert("Email should nt empty")
    return;
}else if(password == ""){
    alert("Email should nt empty")
    return;
}
let props = {
    "email":email,
    "password":password
    }

fetch("http://localhost:8051/adminlogin",{
headers:{ "content-Type":"application/json"},
    method:"POST",body:JSON.stringify(props)
})
    .then(serverRes=>serverRes.json())
.then(res=>{

if(res['message'].includes('SUCCESS')){
Navigate("/admin1");
console.log(res);
alert("Welcome Back Admin")
  
  }
})
}
    
        return(
            <>
              
   <Header4/>

<div className="bg-image index">
<div className="container home ">
    <div className="row ">
      <div className="col">
      </div>
      <div className="col">
    </div>
      <div className="col">
        <h2 className="welcome">Admin Login</h2>

        <div className="form-floating mb-3">

            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"   onChange={(e=>setemail(e.target.value))}/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"onChange={(e=>setpassword(e.target.value))}/>
            <label for="floatingPassword">Password</label>
          </div><br/>

          <div>
          <button type="button" className="btn btn-outline-primary size" onClick={login} >Login</button>
          
          </div>
      
      </div>
    </div>
    </div>
        
  </div>
  
  <Footer/>
            </>

        );
    }

export default Adminlogin;