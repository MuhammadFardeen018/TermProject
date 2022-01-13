import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube} from 'react-icons/fi'
import {ImPinterest2} from 'react-icons/im'
import {BiCopyright} from 'react-icons/bi'
import {Footer,FooterContainer,FooterRow,FooterColumn,FooterHeading,FooterMenu,FooterItemR,FooterItemS,FooterItemSocial,WebsiteLogo,CopyrightH} from './FooterElements'
import logo from '../../images/logo1.png'
import styled from 'styled-components';
import {animateScroll as scroll} from 'react-scroll'
export const  FooterBar = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <Footer>
              <FooterContainer>
                  <FooterRow>
                      <FooterColumn>
                          <FooterHeading>
                            Menu
                          </FooterHeading>
                          <FooterMenu>
                              <FooterItemS  to="aboutus" 
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact='true'
                                 offset={-80}>About Us
                              </FooterItemS>
                              <FooterItemS to="products"
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}>Categories
                               </FooterItemS>
                              
                              <FooterItemS to="location" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Office Locations</FooterItemS>   
                          </FooterMenu>
                      </FooterColumn>

                     

                     

                      <FooterColumn>
                          <FooterHeading>
                           Social Links
                          </FooterHeading>
                          <FooterMenu>
                           <FooterItemSocial href="#" target="_blank"><FiFacebook/></FooterItemSocial>
                           <FooterItemSocial href="#" target="_blank"><FiInstagram/></FooterItemSocial>
                           <FooterItemSocial href="#" target="_blank"><FiLinkedin/></FooterItemSocial>
                           <FooterItemSocial href="#" target="_blank"><FiYoutube/></FooterItemSocial>
                           <FooterItemSocial href="#" target="_blank"><ImPinterest2/></FooterItemSocial>
                           </FooterMenu>
                      </FooterColumn>
                      <FooterColumn>
                          <WebsiteLogo to="/" onClick={toggleHome}>
                          <Img src={logo} alt="logo"  />
                          </WebsiteLogo>
                      </FooterColumn>  
                  </FooterRow>
                  <CopyrightH>Khareedlo<BiCopyright/> 2021 All right reserved</CopyrightH> 

              </FooterContainer>
          </Footer>  
        </>
    )
}

export default FooterBar

const Img = styled.img`
  height: 150px;
  @media  screen and (max-width : 610px){
    height: 120px;
    
}
`