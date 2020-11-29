import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, {  Component } from 'react';

const CreateAccount = () =>{
    return(
        <CreateAccountLayout>
            <AliasLayout>
                <h2>별명</h2>
                <InputLayout>
                <input placeholder="내용을 입력해주세요"
                type = "text"
                className="form-control">
                </input>
            </InputLayout>
            <h5>사용가능한 별명입니다.</h5>
            </AliasLayout>
        </CreateAccountLayout>
    );
};
const CreateAccountLayout = styled.div`
    display:flex;
    flex-direction:column;
`;
const AliasLayout = styled.div`
    display:flex;
    flex-direction:column;
    height:18vh;
    h2{
        margin-top:50px;
        margin-left:10px;
    }
    h5{
        width:20%;
        margin-left:500px;
    }
`;
const InputLayout = styled.div`
    justify-content: center;
    border-width:2;
    height:50px;
 
    input{
        width:30%;
        margin-left:40px;
        border-radius:10px;
        height:30px;
    }
`;
export default CreateAccount;