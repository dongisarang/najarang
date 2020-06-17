import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, {  Component } from 'react';

const NewTopicLayout=()=>{
    return(
        <Layout>
            <li>
                최신 토픽 리스트
            </li>
        </Layout>
    );
}
const Layout = styled.div`
    display:flex;
    flex-direction:column;
    flex:3;
    
    li{
       
        margin: 0px auto 0;
        display:flex;
        margin-left:50px;
        align-items:center;
        justify-content:center;
        border: 1px solid lightgrey;
        padding: 20px;
        height:30px;
        width:300px;
    
    }
`
export default NewTopicLayout;