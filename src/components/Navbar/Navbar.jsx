import "./Navbar.css";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
export default function Navbar() {
    const [scroll,setScroll] = useState(false);
    const [menu,setMenu] = useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            setScroll(window.scrollY>40);
        }
        window.addEventListener("scroll",handleScroll);
        return()=>window.removeEventListener("scroll",handleScroll);
    },[]);
    return(
        <header className={scroll ? "navbar active" : "navbar"}>
            <div className="logo">
                NOVIN
                <span>ENGINEERING</span>
            </div>
            <nav className={menu ? "nav open" : "nav"}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Team</a>
                <a href="#">Contact</a>
            </nav>
            <button className="contact-btn">
                Get Started
            </button>
            <div
                className="menu-btn"
                onClick={()=>setMenu(!menu)}
            >
                {
                    menu ?
                    <FaTimes/>
                    :
                    <HiOutlineMenuAlt3/>
                }
            </div>
        </header>
    )
}