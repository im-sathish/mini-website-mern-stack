import { NavLink } from "react-router-dom";

function Header4(){
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary head">
  <div className="container-fluid">
    
    <NavLink className={"navbar-brand home"} to="/anime"> ANIME WORLD</NavLink>
        {/* <form class="d-flex" role="search"> */}
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>x */}
        {/* <NavLink className={"btn btn-outline-primary admin "} to="/admin" target="_blank">Admin</NavLink> */}
        
        {/* <NavLink className={"btn btn-outline-primary size register"} to="/Register">Register</NavLink> */}

      {/* </form> */}
    </div>
  <div/>
</nav>
        </>
    );
}
export default Header4;