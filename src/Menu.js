import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'

function Menu(props) {
    return (
        <div className="menu">
         <NavLink to="/" name="#home-btn" className="home-btn"><FontAwesomeIcon className="fahome"style={{fontSize:"20px"}} icon={faHome} /></NavLink>
         <NavLink to="/card" name="#cart-btn" className="cart-btn"><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShoppingCart}/></NavLink>
         <NavLink to="/offers" name="#shopping-btn" className="shopping-btn"><FontAwesomeIcon style={{fontSize:"20px"}} icon={faShoppingBag}/></NavLink>
          <NavLink to="/contacts" className="contact-btn"> <FontAwesomeIcon style={{fontSize:"20px"}} icon={faComments}/> </NavLink>
        </div>
    )
}

export default Menu
