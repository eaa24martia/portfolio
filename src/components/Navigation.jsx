import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return(
<nav className={styles.navigation}>
  <NavLink to="/" end> Home</NavLink>
  <NavLink to="/projects">Projects</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>
</nav>
    );
} 


