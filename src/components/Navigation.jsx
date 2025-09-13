import { NavLink } from "react-router";

export default function Navigation() {
    return(
<nav className="navigation">
  <NavLink to="/" end> HOME</NavLink>
  <NavLink to="/projects">PROJECTS</NavLink>
  <NavLink to="/about">ABOUT</NavLink>
  <NavLink to="/contact">CONTACT</NavLink>
</nav>
    );
} 


