import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, {  Component } from 'react';

const SignUpPage = () =>{
    return(
        <Layout>
            <AliasLayout>
            <div>별명</div>
            <input placeholder="내용을 입력해주세요"
                type = "text"
                className="form-control">     
            </input>
        </AliasLayout>
        <InterestTopicLayout>
            <div>관심 토픽 설정</div>
        </InterestTopicLayout>
        </Layout>
        

        
    )
}
const Layout = styled.div`
    display:flex;
    flex-direction:column;
`;
const AliasLayout = styled.div`
    display:flex;
    flex-direction:column;
    div{
        display:flex;
        margin-left:100px;
        margin-top:50px;
    }
    input{
        justify-content: center;
        margin-left:150px;
        width:30%;
        border-radius:10px;
        height:30px;
        border: 1px solid gray;
    }

`;
const InterestTopicLayout = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:50px;
    div{
        display:flex;
        margin-left:100px;
       
    }
`;
export default SignUpPage;