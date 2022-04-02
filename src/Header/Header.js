import React from 'react'
import './header.css'
import NavigationBar from './NavigationBar//NavigationBar'
import HeaderImageDiv from './HeaderImageDiv/HeaderImagediv'
import HeaderContent from './HeaderContent/HeaderContent'

const Header = () => {
    return (
        <header>
            <div className = "header-parent-div">
            <HeaderImageDiv></HeaderImageDiv>
             <NavigationBar></NavigationBar>
             <HeaderContent></HeaderContent>
            </div>
             
        </header>
    )
}

export default Header;