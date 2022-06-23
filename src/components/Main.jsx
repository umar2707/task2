import React from 'react'
import styled from 'styled-components'
import ItemList from './ItemList'
import {mobile} from "../responsive"

const Mainn = styled.div`
    background-color: #FDF0E9;
`
const Container = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding: 80px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({width:'100%', padding:'0'})};
`;

const Main = () => {
  return (
    <Mainn>
        <Container>
            <ItemList />
        </Container>
    </Mainn>
  )
}

export default Main
