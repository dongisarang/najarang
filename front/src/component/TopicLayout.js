import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, {  Component } from 'react';

const TopicLayout=()=>{
    return(
        <div>
            <Layout>
            
                <li>
                    토픽 리스트
                </li>
            </Layout>
            
        </div>
        
    )
};
const Layout = styled.div`
    display:flex;
    flex-direction:column;
  
    li{
       
        margin: 0px auto 0;
        display:flex;
        margin-left:50px;
        align-items:center;
        justify-content:center;
        height:50px;
        width:500px;
        border: 1px solid lightgrey;
    }
`
export default TopicLayout;