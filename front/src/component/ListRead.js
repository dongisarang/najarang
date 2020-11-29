import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, {  Component } from 'react';
import ListHeader from './ListHeader';
import { FaEye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { observer, inject } from "mobx-react";
import {AiOutlineClockCircle} from "react-icons/ai";;
@inject("topic")
@inject("currentTopic")
class ListRead extends Component{
    constructor(props) {
        super(props);
    };
    render(){
        const name = this.props.currentTopic.getCurrentTopic();
        const title = '안녕하세요';
        const userName = '티맥스스페이스';
        const time = '2시간';
        const view = '83';
        const replyCnt = '3';
        const contents='퇴근하고 싶다';
        return(
            <PageLayout>
            <CategoryLayout>
                <span>토픽 {name}</span>
            </CategoryLayout>
            <TitleLayout>
                <h1>{title}</h1>
            </TitleLayout>
            <UserLayout>
                <span>{userName}</span>
            </UserLayout>
            <TimeLayout>
                <AiOutlineClockCircle></AiOutlineClockCircle>
                <span>{time}</span>
                <FaEye className='eye'></FaEye>
                <span>{view}</span>
                <BsChatDots className='reply'></BsChatDots>
                <span>{replyCnt}</span>
            </TimeLayout>
            <ContentsLayout>
                <span>{contents}</span>
            </ContentsLayout>
        </PageLayout>
        )
    }
};
const PageLayout = styled.div`
    display:flex;
    flex-direction:column;
`;
const CategoryLayout = styled.div`
    display:flex;
    flex-direction:row;
    margin:20px 0px 1px 20px;
    span{

    }
`
const TitleLayout = styled.div`
    display:flex;
    flex-direction:row;
    margin:20px 0px 1px 20px;
`;
const UserLayout = styled.div`
    display:flex;
    flex-direction:row;
    margin:0px 0px 10px 20px;
    span{
        font-size:1px;
    }
`;
const TimeLayout = styled.div`
    display:flex;
    flex-direction:row;
    margin:0px 0px 0px 20px;
    padding:0px 0px 20px 0px; 
    border-bottom:1px solid;
    span{
        font-size:1px;
        margin:0px 0px 0px 5px;
    }
    .eye{
        margin:0px 0px 0px 15px;
    }
    .reply{
        margin:0px 0px 0px 15px;
    }
`;
const ContentsLayout = styled.div`
    display:flex;
    flex-direction:column;
    margin:0px 0px 10px 20px;
    height:100px;
    border-bottom:1px solid;
    span{
        margin:20px 0px 10px 20px;
        font-size:10px;
    }
`;
export default ListRead;