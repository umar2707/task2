import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Items = styled.div`
    width: 370px;
    height: 416px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    ${mobile({width:'329px'})};
    border: 3px solid transparent;
    &.active{
        border: 3px solid #4FE24A
    }
`
const Imagee = styled.img`
    width: 370px;
    height: 416px;
    object-fit: cover;
    ${mobile({width:'329px'})};
`
const InnerText = styled.div`
    position: absolute;
    left: 45px;
    bottom: 60px;
`
const Category = styled.span`
    background-color: #ffffff;
    border-radius: 7px;
    border: none;
    text-align: center;
    padding: 10px 15px ;
    cursor: pointer;
`
const Title = styled.h3`
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    margin-top: 2rem;
`

const Item = ({imgUrl,title,category,filterCat,returnedId,id}) => {
    const selectRef = useRef();

    const handleSelect = (id) =>{
        returnedId(id);
        selectRef.current.classList.toggle('active')
    }

  return (
    <Items 
        ref={selectRef}
        onClick={()=>handleSelect(id)}
    >
      <Imagee src={imgUrl} />
        <InnerText>
            <Category value={category} onClick={()=>filterCat(category)}>{category}</Category>
            <Title>{title}</Title>
        </InnerText>
    </Items>
  )
}

export default Item
