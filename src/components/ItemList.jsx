import React, { useEffect, useRef, useState } from 'react'
import { items, category } from '../data'
import Item from './Item'
import styled from 'styled-components'
import { mobile } from "../responsive"

const ItemListt = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    ${mobile({ gridTemplateColumns: 'repeat(1,1fr)' })};
`
const Container = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`;
const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    border-radius: 5px;
    ${mobile({ flexDirection: 'column', backgroundColor: '#fff', width: '92%', marginTop: '90px', padding: '5px 0', position: 'absolute', zIndex: '300', display:'none'})};
    &.active_nav{
        display: flex;
    }
`
const MenuItem = styled.li`
    color: #391400;
    padding: 10px 20px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        color: #16CD53;
    }
    &.active{
        color: #16CD53;
    }
`
const LeadMore = styled.button`
    background-color: #fff;
    padding: 15px 35px;
    color: #391400;
    border: none;
    border-radius: 5px ;
    box-shadow: 0 0 10px #eee;
    margin: 5rem;
    cursor: pointer;
    font-size: 15px;
    ${mobile({ margin: '30px' })};
`
const Dropdown = styled.input`
    display: none;
    ${mobile({ display: 'block' })};
    width: 100%;
    padding: 15px 20px;
    margin: 2rem 0;
    border: 1px solid #F3D1BF;
    border-radius: 7px;
    outline: none;
    position: relative;
    cursor: pointer;
`
const Arrow = styled.div`
    position: absolute;
    right: 34px;
    top: 450px;
    z-index: 10000;
    width: 8px;
    height: 8px;
    border: 2px solid #000;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(-45deg);
    display: none;
    ${mobile({ display:'block' })};
`
function useKey (key,cb){
    const callbackRef = useRef(cb);
    useEffect(()=>{
        callbackRef.current = cb
    })
    useEffect(()=>{
        function handle(event){
            if(event.code === key){
                callbackRef.current(event)
            }
        }
        document.addEventListener('keypress',handle);
        return ()=> document.removeEventListener("keypress",handle)
    },[key])
}
    

const ItemList = () => {
    const [categ, setCateg] = useState('Show All')
    const [item, setItem] = useState([]);
    const [select, setSelected] = useState(null)
    const navRef = useRef();

    const showNav = ()=>{
        navRef.current.classList.toggle('active_nav')
    }
    
    const returnedId = (it,e)=>{
        setSelected(it)
    }
    
    //for delete item usekey delete
    function handleKeyDelete () {
        const id = select
        if(typeof id === 'number'){
            setItem(item.filter((item)=>item.id !== id));
            console.log('delete button working');
        }
    }
    useKey('KeyD',handleKeyDelete);
    useEffect(() => {
        setItem(items);
    }, [])

    const filterCat = (a) => {
        setItem(items.filter((item) => item.category === `${a}`))
    }

    const handleCat2 = (a, i) => {
        if (a[i] === 'Show All') {
            setItem(items);
        } else {
            const b = a[i];
            setItem(items.filter((item) => item.category === `${b}`))
        }
        setCateg(a[i]);
    }
    const handleAdd = () => {
        let b = [...item]
        let c = [...item]
        let d = b.concat(c);
        setItem(d);
    }
    console.log(select);
    return (
        <Container>
            <Dropdown 
                value={categ} 
                readOnly 
                onClick={showNav}
            />
            <Arrow />
            <Menu 
                className='menu'
                ref={navRef}
            >
                {category.map((cat, i) => (
                    <MenuItem 
                        key={i} 
                        onClick={() => handleCat2(category, i)}>{cat}
                    </MenuItem>
                ))}
            </Menu>
            <ItemListt>
                {item?.map((item, i) => (
                    <Item  id={item.id} imgUrl={item.imgUrl} title={item.title} category={item.category} key={i} filterCat={filterCat} returnedId={returnedId}/>
                ))}
            </ItemListt>
            <LeadMore onClick={handleAdd}>LOAD MORE</LeadMore>
        </Container>
    )
}

export default ItemList
