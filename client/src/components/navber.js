import React from 'react'
import './navbar.css';
export default function navber() {

    function open() {
        document.getElementById("navbar__list_mobile").style.display = "block";
        document.getElementById("hemberger").style.display = "none";
        document.getElementById("xmark").style.display = "block";
    }
    function close(){
        document.getElementById("navbar__list_mobile").style.display = "none";
        document.getElementById("hemberger").style.display = "block";
        document.getElementById("xmark").style.display = "none";
    }
    return (
        <div className='navbar_container'>
            <nav className="navbar">
                <div className="navbar__logo">
                <i class="fa-solid fa-people-arrows"></i>
                </div>
                <div className="navbar__search nav_mobile">
                    <form>
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <ul className="navbar__list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul className="navbar__icons">
                    <li><a href="#"><i onClick={open} id='hemberger' class="fa-solid fa-bars"></i></a></li>
                    <li><a href="#"><i onClick={close} id='xmark' className="fa-solid fa-xmark"></i></a></li>
                    <li><a href="#"><i className="fa fa-message"></i></a></li>
                    <li><a href="#"><i className="fa fa-gear"></i></a></li>
                    <li><a href="#"><i className="fa fa-bell"></i></a></li>
                    <li><a href="#"><i className="fa fa-user"></i></a></li>
                </ul>
            </nav>
            <ul id='navbar__list_mobile' className="navbar__list">
            <div className="navbar__search">
                    <form>
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

    )
}
