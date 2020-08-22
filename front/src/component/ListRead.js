import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, {  Component } from 'react';
import ListHeader from './ListHeader';
import { FaEye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { observer, inject } from "mobx-react";
@inject("topic")
@inject("currentTopic")
class ListRead extends Component{
    constructor(props) {
        super(props);
    };
    render(){
        const name = this.props.currentTopic.getCurrentTopic();
        return(
            <PageLayout>
            <CategoryLayout>
                <span>토픽 {name}</span>
            </CategoryLayout>
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
export default ListRead;