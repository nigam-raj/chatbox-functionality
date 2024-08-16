import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const HeaderBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: #e2e8fc;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    width: 40%;
`;

const Input = styled.input`
    border: none;
    outline: none;
    margin-left: 10px;
    width: 100%;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    margin-left: 20px;
    font-size: 1.5rem;
    cursor: pointer;
`;

const Header = () => {
    return (
        <HeaderBar>
            <Search>
                <FaSearch />
                <Input type="text" placeholder="Search" />
            </Search>
            <Icons>
                <Icon><FaBell /></Icon>
                <Icon><FaEnvelope /></Icon>
                <Icon><FaUserCircle /></Icon>
            </Icons>
        </HeaderBar>
    );
}

export default Header;
