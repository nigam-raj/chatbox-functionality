import React from 'react';
import styled from 'styled-components';
import { FaHome, FaQuestionCircle, FaPhone, FaShieldAlt, FaCog, FaFlag, FaSignOutAlt } from 'react-icons/fa';

const Nav = styled.nav`
    width: 200px;
    height: 100vh;
    background: #e2e8fc;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
`;

const NavItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 1.2rem;
`;

const NavIcon = styled.span`
    margin-right: 10px;
`;

const SideNav = () => {
    return (
        <Nav>
            <div>
                <NavList>
                    <NavItem><NavIcon><FaHome /></NavIcon> Overview</NavItem>
                    <NavItem><NavIcon><FaQuestionCircle /></NavIcon> Help</NavItem>
                    <NavItem><NavIcon><FaPhone /></NavIcon> Contact Us</NavItem>
                    <NavItem><NavIcon><FaShieldAlt /></NavIcon> Privacy Policy</NavItem>
                    <NavItem><NavIcon><FaCog /></NavIcon> Settings</NavItem>
                    <NavItem><NavIcon><FaFlag /></NavIcon> Report</NavItem>
                </NavList>
            </div>
            <div>
                <NavList>
                    <NavItem><NavIcon><FaSignOutAlt /></NavIcon> Logout</NavItem>
                </NavList>
            </div>
        </Nav>
    );
}

export default SideNav;
