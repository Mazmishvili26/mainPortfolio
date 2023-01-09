import React, { useState } from 'react'
import './Header.css'

// import assets

import portfolio from '../../assets/portfolio.png'

// import icons
import {FiFacebook} from 'react-icons/fi'
import {RiInstagramLine} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx'
import {RiCloseFill} from 'react-icons/ri'

function Header() {

    const [openBurgerMenu,setOpenBurgerMenu] = useState(false);
    const [activeLink,setActiveLink] = useState("#home");

  return (
    <section className='header-section'>
        <div className='header-container'>
            <div className='container'>
                <header className='main-header'>

                    <div className='header-left-block'>
                        <img src={portfolio}></img>
                    </div>
                    
                    <div className='header-burger-container'>
                        <div className='header-burger-box'>
                            {openBurgerMenu ? <RiCloseFill size={30} color={'white'} onClick={() => setOpenBurgerMenu(false)}/> : <RxHamburgerMenu size={30} color={'white'} onClick={() => setOpenBurgerMenu(true)}/>}
                        </div>

                        <div className={openBurgerMenu ? 'burger-menu show-burger' : 'burger-menu'}>
                            <ul className='burger-ul'>

                                <a href='#home' className={activeLink === "#home" ? 'active' : null} onClick={() => setOpenBurgerMenu(false)}>
                                    <li onClick={() => setActiveLink("#home")}>Home</li>
                                </a>

                                <a href='#skills' className={activeLink === "#skills" ? 'active' : null} onClick={() => setOpenBurgerMenu(false)}>
                                    <li onClick={() => setActiveLink("#skills")}>Skills</li>
                                </a>

                                <a href='#about' className={activeLink === "#about" ? 'active' : null} onClick={() => setOpenBurgerMenu(false)}> 
                                    <li onClick={() => setActiveLink("#about")}>About</li>
                                </a>

                                <a href='#portfolio' className={activeLink === "#portfolio" ? 'active' : null} onClick={() => setOpenBurgerMenu(false)}>
                                    <li onClick={() => setActiveLink("#portfolio")}>Portfolio</li>
                                </a>
                                    
                                <a href='#contact' className={activeLink === "#contact" ? 'active' : null} onClick={() => setOpenBurgerMenu(false)}>
                                    <li onClick={() => setActiveLink("#contact")}>Contact</li>
                                </a>
                                
                            </ul>
                        </div>
                    </div>
                    
                    
                    <div className='header-right-block'>
                        
                        <div className='header-nav-box'>
                            <nav className='header-nav'>
                                <ul className='header-ul'>
                                    <a href='#home' className={activeLink === "#home" ? 'active' : null}>
                                        <li onClick={() => setActiveLink("#home")}>Home</li>
                                    </a>

                                    <a href='#skills' className={activeLink === "#skills" ? 'active' : null}>
                                        <li onClick={() => setActiveLink("#skills")}>Skills</li>
                                    </a>

                                    <a href='#about' className={activeLink === "#about" ? 'active' : null}>
                                        <li onClick={() => setActiveLink("#about")}>About</li>
                                    </a>

                                    <a href='#portfolio' className={activeLink === "#portfolio" ? 'active' : null}>
                                        <li onClick={() => setActiveLink("#portfolio")}>Portfolio</li>
                                    </a>
                                    
                                    <a href='#contact' className={activeLink === "#contact" ? 'active' : null}>
                                        <li onClick={() => setActiveLink("#contact")}>Contact</li>
                                    </a>
                                </ul>
                            </nav>
                        </div>

                        <div className='header-socials'>
                            <ul className='social-ul'>
                                <li>
                                    <FiFacebook size={18} color={'white'}/>
                                </li>
                                <li>
                                    <RiInstagramLine size={18} color={'white'}/>
                                </li>
                                <li>
                                    <AiOutlineMail size={18} color={'white'}/>
                                </li>
                            </ul>
                        </div>
                    </div>

                </header>
            </div>
        </div>

    </section>
    )
}

export default Header