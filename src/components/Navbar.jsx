import React from 'react'
import styled from 'styled-components'
import LogoImage from '../img/logo.png'
import {mobile} from "../responsive"

const Container = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({width:'100%'})};
`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    ${mobile({wdth:'100%'})};
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    ${mobile({display:'none'})};
`
const Center = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    ${mobile({display:'none'})};
`
const Logo = styled.img`
    width: 140px;
`
const Button = styled.button`
    outline: none;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius:7px;
    background-color: transparent;
    padding: 20px 40px;
    color: #fff;
    transition: all .3s ease;
    cursor: pointer;
    &:hover{
        border: 1px solid rgba(255,255,255,0.7);
    }
`
const Menu = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`
const MenuItem = styled.li`
    margin: 0 13px;
`
const Link = styled.a`
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    &:hover{
        cursor: pointer;
    }
`


const Navbar = () => {
  return (
    <div className="navbar">

    <Container>
      <Left>
        <Link href='#'>
            <Logo src={LogoImage}/>
        </Link>
      </Left>
      <Center>
        <Menu>
            <MenuItem>
                <Link href='#'>About</Link>
            </MenuItem>
            <MenuItem>
                <Link href='#'>Services</Link>
            </MenuItem>
            <MenuItem>
                <Link href='#'>Pricing</Link>
            </MenuItem>
            <MenuItem>
                <Link href='#'>Blog</Link>
            </MenuItem>
        </Menu>
      </Center>
      <Right>
        <Button>Contact</Button>
      </Right>
    </Container>
    </div>
  )
}

export default Navbar
