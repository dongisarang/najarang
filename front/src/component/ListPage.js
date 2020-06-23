import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, {  Component } from 'react';
import ListHeader from './ListHeader';
const ListPage = ({category}) =>{
    const list = ['취미','소확행','월급루팡','합격'];
    return(
        <ListLayout>
            <CategoryLayout>
                {
                    list.map(item =>(
                        <p>{item}</p>
                    ))
                }
            
            </CategoryLayout>
        </ListLayout>
    )
}
const ListLayout = styled.div`
    display:flex;
    flex-direction:column;
`;
const CategoryLayout = styled.div`
    display:flex;
    margin-left:100px;
    margin-right:100px;
    border: 1px solid black;
    p{
        flex:1;
        border: 1px solid black;
        justify-content:center;
        padding: 10px;
        align-items: center;
    }
`;
export default ListPage;

