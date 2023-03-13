import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header1 from "./Header1";
class Register extends React.Component{
  state={
    "email":"",
    "mobile":"",
    "username":"",
    "password":""
  }
  Register_list(){
    if(this.state.email===" ")
    {
        alert("please enter email");
    }
        
else if(this.state.password===" ")
  {
alert("please enter password");
    }
    else
    {
    let props={
      "email":this.state.email,
      "mobile":this.state.mobile,
      "username":this.state.username,
      "password":this.state.password,
    }
    fetch("http://localhost:8051/Register",
    {
      headers:{"content-type":"application/json"},
      method:"post",body:JSON.stringify(props)
    })
    .then(serverRes=>serverRes.json())
    .then(res=>{
      console.log(res);
    })
  }

  }
    render(){
    return(
        <>
         <Header1/>
          <div className="bg-image register"> 
    <div className="container register">
        <div className="row">
          <div className="col-2">
            
          </div>
          <div className="col-5">
            
          </div>
          <div className="col-5">
            <h1>Create an account</h1>
            <div className="form-floating mb-3 register">
                <input type="email" className="form-control" id="floatingInput"placeholder="name@example.com" onChange={(e)=>this.setState({"email":e.target.value})} />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mobile">
                <input type="text" className="form-control" id="floatingPassword"placeholder="+00 0000000000"onChange={(e)=>this.setState({"mobile":e.target.value})} />
                <label for="floatingPassword">mobile number</label>
              </div>
          
               
              <div className="form-floating mb-3 register">
                <input type="text" className="form-control" id="floatingInput"placeholder="name@example.com"onChange={(e)=>this.setState({"username":e.target.value})} />
                <label for="floatingInput">User name</label>
              </div>
              <div className="form-floating password">
                <input type="Password" className="form-control" id="floatingPassword" placeholder="password"onChange={(e)=>this.setState({"password":e.target.value})}/>
                <label for="floatingPassword">password</label>
              </div>
              
              <br/>
    
              <div>
              <button type="button" className="btn btn-outline-primary size" onClick={()=>this.Register_list()}>Register</button> 
              
    <NavLink className={"btn btn-outline-primary size login"} to="/Anime">Go to Login</NavLink>

              
              </div>
          </div>
        </div>
      </div>
   </div>

   <Footer/> 
        </>
    );           
        
    }
}
export default Register;