import React from 'react';
import './TopLayout.css';
import TopicLayout from './TopicLayout';
import  NewTopicLayout from './NewTopicLayout';
import ListPage from './ListPage'
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
// const topicItem =({to})=>{
//     <Link to={to}>
//     </Link>
// }
const TopLayout=()=>(
    
    <div>
    <div className = "myForm">
       <InputLayout>
        <input placeholder="관심있는 내용을 검색하세요!"
                type = "text"
                className="form-control">
                
        </input>
       </InputLayout>
            

    <div className="button">
            <Btn>
                자랑글 쓰러 가기
            </Btn>
    </div>
    <div>
        <p class="font-weight-bold">
            토픽 리스트
        </p>
    </div>
    <TopicCircleLayout>
        
            <Link to="/list">
                <TopicCircle>토픽</TopicCircle>
            </Link>
                
        
        <TopicCircle>
                토픽
        </TopicCircle>
        <TopicCircle>
                토픽
        </TopicCircle>
        <TopicCircle>
                토픽
        </TopicCircle>
        <TopicCircle>
                토픽
        </TopicCircle>
    </TopicCircleLayout>
    
    </div>
    <div className = "myForm">
        <div>
            핫토픽 리스트
        </div>
    <TopicLayout />
    <TopicLayout />
    <TopicLayout />
    <TopicLayout />
    <TopicLayout />
    </div>
    <div className = "myForm">
        <div>최신 게시글</div>
        <div className="newTopicLayout">
            <div className="newTopicListLayout">
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
            </div>
            <div className="newTopicListLayout">
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
            </div>
            <div className="newTopicListLayout">
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
                <NewTopicLayout />
            </div>
        </div>
        
             
    </div>
</div>

 
  
    
)
const Btn = styled.button`
    background-color:#8885a4;
    border-radius:18px;
    padding:15px;
    color:#ffffff;

`;
const InputLayout = styled.div`
    justify-content: center;
    border-width:2;
    height:100px;
 
    input{
        width:100%;
        border-radius:10px;
        height:30px;
    }
`;
const InputForm = styled.input`
    
    width:100%;
    align-item:center;
    height:30px;

`;
const TopicCircle = styled.button`
    margin-left: 100px;
    flex:1;
    border-radius: 20px;
    background-color:#f4c96b;
    width:100px;
    height:100px;
    font-size: 15px;

`;
const TopicCircleLayout = styled.div`
    display:flex;
    flex-direction:row;
`;
export default TopLayout;