import React from 'react'
import './header-content.css'

const HeaderContent = () => {
return(
    <div className = "header-content-div">
        <div className = "header-main-pre-text">
            <span>Know what you love to Do,</span>
        </div>
        <div className = "header-main-content-div">
        <h1 className = "main-header-text">Are you a Leader type or Artistic ?, Know which Work Style you love With simple test </h1>
        </div>
      
        <p className="content-paragraph" >Knowing what you are best at, will help in your professional growth.
        find what you love to do and make your carieer desicion easy.
        accelerate your growth professionally and most important personaly.
        </p>
        <div>
            <a className="top-headercontent-a" href="#">Start Test</a>
            <a className="top-headercontent-a" href="#" >More Information</a>
        </div>
    </div>
)}
export default HeaderContent;