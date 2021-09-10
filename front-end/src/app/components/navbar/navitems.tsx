import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro';
import { slide as Menu} from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles'
import { Link } from 'react-router-dom';

const ListContainer = styled.ul`    
    ${tw`
        flex
        list-none  
    `};
`;

const NavItem = styled.li<{ menu?: any}>`
    ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `};

    ${({ menu }) =>
        menu &&
        css`
            ${tw`
                text-white
                text-xl
                mb-3
                focus:text-white
            `};
    `};
`;
export function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm})

    if (isMobile) 
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li>Home</li>
                        </Link>
                    </NavItem>
                    <NavItem menu>
                        <Link to="/about-me" style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <li>About Me</li>
                        </Link>
                    </NavItem>
                </ListContainer>
            </Menu>
        );

    return (
        <ListContainer>
            <NavItem>
                <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
                    <li>Home</li>
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/about-me" style={{color: 'inherit', textDecoration: 'inherit'}}>
                    <li>About Me</li>
                </Link>
            </NavItem>
        </ListContainer>
    );
}