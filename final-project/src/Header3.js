import { NavLink } from "react-router-dom";

function Header3(){
    return(
        <> 
        <nav className="navbar navbar-expand-lg bg-body-tertiary home">
        <div className="container-fluid">
    <NavLink className={"navbar-brand home"} to="/admin1"> ANIME WORLD</NavLink>
         
         
              
              <NavLink className={"btn btn-outline-primary size register"} to="/anime"> Logout</NavLink>

          
          </div>
        <div/>
      </nav>
        </>
    );
}
export default Header3;