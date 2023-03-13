import { NavLink } from "react-router-dom";

function Header4(){
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary head">
  <div className="container-fluid">
    
    <NavLink className={"navbar-brand home"} to="/anime"> ANIME WORLD</NavLink>

  </div>
</nav>
        </>
    );
}
export default Header4;