import React from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import logo from '../images/logo1.png'
import { Nav,Navh4 ,NavbarContainer, NavLogo ,MobileIcon,NavMenu,NavItem,NavLinks,NavLinkR,NavBtn,NavBtnLink} from './NavbarElements'
import { useState } from 'react'
import { useEffect } from 'react'
import {animateScroll as scroll} from 'react-scroll'
export const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        
        else{
            setScrollNav(false)           
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []) ;

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav= {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                    <Navh4>Khareed lo</Navh4>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="aboutus" 
                            >About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinkR to="/shop"
                            >Our Shop</NavLinkR>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="storelocations"
                            >Store Locations</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                    <NavBtnLink to="/contactus">
                    Contact Us
                    </NavBtnLink>
                       
                    </NavBtn>

                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar


const Img = styled.img`
  height: 70px;
`