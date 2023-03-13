import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header2 from "./Header2";
class Anime1 extends  React.Component{
    render(){
        return(
            <>
              <Header2/>
  

<div className="bg-image anime">
<div className="container text-center">
  <div className="row">
    <div className="col-4">
      
    </div>
    
    <div className="col-8">
        
      <p className="animewelcome">Welcome to the Anime World!!</p>
    </div>
    
  </div>
</div>
  </div>
  
  <Footer/>
            </>

        );
    }
}
export default Anime1;