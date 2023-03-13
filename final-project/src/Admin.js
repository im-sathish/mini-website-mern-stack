import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";
import Header3 from "./Header3";
class Admin extends React.Component{
    state={
        "id":" ",
        "email":"",
    "mobile":"",
    "username":"",
    "password":"",
        "serverUserList":[],
    }
    getuser(){
    
        fetch("http://localhost:8051/getuser",{method:"Get"})
        .then(serverRes=>serverRes.json())
        .then(res=>{
         console.log(res);
         this.setState({serverUserList:res});
        })
     }
 
  
    
         deleteuser(){
            let props={
                "id":this.state.id,
            }
                                
         fetch("http://localhost:8051/deleteuser",{
            
           headers:{ "content-Type":"application/json"},
                method:"POST",body:JSON.stringify(props)
            })
           .then(serverRes=>serverRes.json())
           .then(res=>{
            console.log(res);
                })
       
        }
 
render(){
    return(
        <>
     <Header3/>
     <div className="bg-image admin">
     <h3 className="adminhead">
            Welcome Back Admin !!

            </h3>
          <div className="box">
          
          <div>
         
          {/* <NavLink className={"btn btn-outline-primary size register"} to="/Register">Register</NavLink> */}
         
        <button className={"btn btn-outline-primary size userlist"} onClick={()=>this.getuser()}>User list</button>
            </div> 
            <>
            <ul>{this.state.serverUserList.map((obj,index)=>{
                    return  <li>{obj._id}--{obj.email}--{obj.mobile}--{obj.username}--{obj.password}</li>
                })}
                </ul></> 
        
       
        <>
        <div className="form-floating mb-1 delete">

<input type="text" className="form-control delete" id="floatingInput" placeholder="name@example.com" onChange={(e)=>this.setState({"id":e.target.value})}/>
<label for="floatingInput">User_id</label>
</div>

        <button className={"btn btn-outline-primary  delete"} onClick={()=>this.deleteuser()} >Deleteuser</button>
          </>
          </div >

          </div>
          <Footer/>
        </>
    )
}

}
export default Admin;