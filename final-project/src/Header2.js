import { NavLink } from "react-router-dom";

function Header2(){
    return(
        <> 
        <nav className="navbar navbar-expand-lg bg-body-tertiary home">
        <div className="container-fluid">
    <NavLink className={"navbar-brand home"} to="/anime1"> ANIME WORLD</NavLink>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>  
          <ul className="nav nav-pills nav-fill header">
              <li className="nav-item header">
                <NavLink className={"nav-link "} to="/home"> Home</NavLink>
              </li>
              <li class="nav-item">
            
                <NavLink className={"nav-link"} to="/contact"> Contact</NavLink>

              </li>
              <li class="nav-item">
              <NavLink className={"nav-link"} to="/about"> About</NavLink>
                
              </li>
            </ul>
              
              <NavLink className={"btn btn-outline-primary size register"} to="/anime"> Logout</NavLink>

          
          </div>
        <div/>
      </nav>
        </>
    );
}
export default Header2;