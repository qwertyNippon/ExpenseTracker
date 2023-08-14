import React from "react";
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from "../../Utils/menuItems";
import { signout } from "../../Utils/Icons";


function Navigation() {
    return (
        <NavStyled>
            <div className="user-con">
                <img src = {avatar} alt = '' />
                <div className="text">
                    <h2>Yuri</h2>
                    <p>Our Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav``;

export default Navigation