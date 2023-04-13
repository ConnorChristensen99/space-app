import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
  
const Navbar = () => {
  return (
    <>

        <NavMenu>
        <NavLink to="" activeStyle>
            
          </NavLink>
          <NavLink to="/earth" activeStyle>
            Earth
          </NavLink>
          <NavLink to="/mars" activeStyle>
            Mars
          </NavLink>
          <NavLink to="/nasa" activeStyle>
           NASA
          </NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
        </NavMenu>

    </>
  );
};
  
export default Navbar;