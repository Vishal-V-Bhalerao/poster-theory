import React from 'react'
import './navigation-bar.css'
import NavigationListElement from '../NavigationListElement/NavigationListElement'
const NavigationBar = () => {
    return (
        <nav>
             <div className="logo-div" ></div>
            <ul className="nav-ul" >
                <NavigationListElement elementName='Home' elementHyperLink='#'  ></NavigationListElement>
                <NavigationListElement elementName='Accessment Test' elementHyperLink='#'  ></NavigationListElement>
                <NavigationListElement elementName='Resourses' elementHyperLink='#'  ></NavigationListElement>
                <NavigationListElement elementName='About Us' elementHyperLink='#'  ></NavigationListElement>
                <NavigationListElement elementName='Contact' elementHyperLink='#'  ></NavigationListElement>
            </ul>
        </nav>
    )
}

export default NavigationBar;