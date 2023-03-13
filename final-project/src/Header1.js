import { NavLink } from "react-router-dom";

function Header1(){
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary head">
  <div className="container-fluid">
    
    <NavLink className={"navbar-brand home"} to="/anime"> ANIME WORLD</NavLink>
        
        <NavLink className={"btn btn-outline-primary admin "} to="/admin" target="_blank">Admin</NavLink>
        
        <NavLink className={"btn btn-outline-primary size register"} to="/Register">Register</NavLink>

     
    </div>
</nav>
        </>
    );
}
export default Header1;