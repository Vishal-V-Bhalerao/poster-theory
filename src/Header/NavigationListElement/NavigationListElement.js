import React from 'react'
import './navigation-list-element.css'

const navigationListElement = ({elementName,elementHyperLink}) => {
    return (
        <li className="top-naviagation-li">
            <a className="top-navigation-a" href= {elementHyperLink} >{elementName}</a>
        </li>
    )
}

export default navigationListElement;