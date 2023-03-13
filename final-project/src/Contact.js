import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";
class Contact extends React.Component{
  state={
    "email":"",
    "username":"",
    "feed":""
  }
  Feedback(){
    
    let props={
      "email":this.state.email,
      "username":this.state.username,
      "feed":this.state.feed,
    }
    fetch("http://localhost:8051/Feedback",
    {
      headers:{"content-type":"application/json"},
      method:"post",body:JSON.stringify(props)
    })
    .then(serverRes=>serverRes.json())
    .then(res=>{
      console.log(res);
    })
  }

  
    render(){
        return(
            
            <>
            <Header2/>
            <div className="contact">
   
     <div className="container ">
        <div className="row">
        <div className="bg-image contact1">
          <div className="col-2">
            
          </div>
          </div>
          <div className="bg-image contact2">
          <div className="col-8 contacts">
            <div className="input-group mb-4">
                <span className="input-group-text user" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"onChange={(e)=>this.setState({"username":e.target.value})}/>
              </div>
              <div className="mb-4">
                <label for="exampleFormControlInput1" className="form-label"><b>Email address</b></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"onChange={(e)=>this.setState({"email":e.target.value})}/>
              </div>
              <div className="mb-4">
                <label for="exampleFormControlTextarea1" className="form-label"><b>feedback</b></label>
                <input className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>this.setState({"feed":e.target.value})}/> 
              </div>
              <button type="button" className="btn btn-primary" onClick={()=>this.Feedback()}>Submit</button>
          </div>
          </div>
          <div className="bg-image contact3">
          <div className="col-2">
            
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
export default Contact;