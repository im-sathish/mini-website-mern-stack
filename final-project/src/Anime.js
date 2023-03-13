import React, { useState } from "react";
import Footer from "./Footer";
import Header1 from "./Header1";
import { NavLink, useNavigate} from "react-router-dom";


function Anime(){
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

let props={
    "email":email,
    "password":password,

}

fetch("http://localhost:8051/Login",{
headers:{ "content-Type":"application/json"},
    method:"POST",body:JSON.stringify(props)
})
    .then(serverRes=>serverRes.json())
.then(res=>{
console.log(res);
if(res['message'].includes('SUCCESS')){
  Navigate("/anime1")
  }
})

}
   
        return(
            <>
              
   <Header1/>

<div className="bg-image index">
<div className="container home ">
    <div className="row ">
      <div className="col">
      </div>
      <div className="col">
    </div>
      <div className="col">
        <h2 className="welcome">Watch Anime Online</h2>

        <div className="form-floating mb-3">

            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setemail(e.target.value)}/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"onChange={(e)=>setpassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
          </div><br/>

          <div>
          <button type="button" className="btn btn-outline-primary size" onClick={login} >Login</button>
          
          </div>
          <br/>
          <div className="signup"><p>Don't have an account?<NavLink className={"signup1"} to="/Register"> Sign up</NavLink>
</p></div>
      <div/>
      </div>
    </div>
    </div>

  </div>
  
  <Footer/>
            </>

        );
    }

export default Anime;