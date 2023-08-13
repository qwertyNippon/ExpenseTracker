import React from "react";
import styled from 'styled-components'
import avatar from '../../img/avatar.png'

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
            <div className="menu-items">

            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav``;

export default Navigation