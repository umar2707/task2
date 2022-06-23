import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import {mobile} from "../responsive"
const Container = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ${mobile({width:'100%', padding:'0'})};
`;
const Text1 = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 72px;
    font-weight: 600;
    margin-top: 4rem;
    ${mobile({fontSize:'56px'})};
`
const Text2 = styled.h4`
    color: #fff;
    font-size: 16px;
    text-align: center;
    opacity: 64%;
    font-weight: 400;
    margin-top: 3rem;
    width: 570px;
    letter-spacing: 1.2px;
    ${mobile({width:'85%', lineHeight:'32px'})};
`

const Banner = () => {
    return (
        <div className="banner">
            <Container >
                <Navbar />
                <Text1>Portfolio</Text1>
                <Text2>Agency provides a full service range including technical skills, design, business understanding.</Text2>
            </Container>
        </div>

    )
}

export default Banner
