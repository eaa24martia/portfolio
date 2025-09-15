import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
             <section className="footer-contact">
                    <img src="/public/img/tvebak-green.png" alt="Logo Image" />
                    <p>tvebakmartin@gmail.com</p>
                    <p>+45 71 83 01 15</p>

                    <section className="social-icons-a">
                    <i className="fa-brands fa-linkedin" style={{color: "#4b694e"}}></i>
                    <i className="fa-brands fa-square-instagram" style={{color: "#4b694e"}}></i>
                    <i className="fa-brands fa-square-facebook" style={{color: "#4b694e"}}></i>
                </section>

                <section>
                    <p>© 2025 Martin Andersen. All rights reserved.</p>
                </section>
            </section>

                    

            <section className="footer-navigation">
                    
                    
                    <section className="nav-section-footer">
                        <h2>Navigation</h2>
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/"> HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" >PROJECTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" >ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" >CONTACT</NavLink>
                            </li>
                        </ul>

                    </section>     
            </section>
    </footer>
  );
}
