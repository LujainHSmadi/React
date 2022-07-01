import React from 'react';
import { useState,useEffect } from 'react';
import './nav.css'
function Navbar() {
    const [show, handelShow] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handelShow(true);
        }
            else {
            
                handelShow(false);
            } 
        }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        
    
        return () => {
            window.removeEventListener('scroll', transitionNavbar)
        }
    }, []);
    
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__content">
                <img className='nav__logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            </div>
        </div>
    );
}
export default Navbar;