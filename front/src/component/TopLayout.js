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
    <MainLayout>
        <InputLayout>
         <input placeholder="관심있는 내용을 검색하세요!"
                type = "text"
                className="form-control">
        </input>
       </InputLayout>
       <BtnLayout>
           <button>자랑글 쓰러 가기</button>
       </BtnLayout>
       <TopicCircleLayout>
           <button>토픽</button>
           <button>토픽</button>
           <button>토픽</button>
           <button>토픽</button>
       </TopicCircleLayout>
    </MainLayout>
//     <div>
//     <div className = "myForm">
//        <InputLayout>
//         <input placeholder="관심있는 내용을 검색하세요!"
//                 type = "text"
//                 className="form-control">
                
//         </input>
//        </InputLayout>
            

//     <div className="button">
//             <Btn>
//                 자랑글 쓰러 가기
//             </Btn>
//     </div>
//     <div>
//         <p class="font-weight-bold">
//             토픽 리스트
//         </p>
//     </div>
//     <TopicCircleLayout>
        
//             <Link to="/list">
//                 <button>토픽</button>
                
//             </Link>
                
// {/*         
//             <Link to="/list">
//                 <TopicCircle>토픽</TopicCircle>
//             </Link>
//             <Link to="/list">
//                 <TopicCircle>토픽</TopicCircle>
//             </Link>
//             <Link to="/list">
//                 <TopicCircle>토픽</TopicCircle>
//             </Link> */}
//     </TopicCircleLayout>
    
//     </div>
//     <div className = "myForm">
//         <div>
//             핫토픽 리스트
//         </div>
//     <TopicLayout />
//     <TopicLayout />
//     <TopicLayout />
//     <TopicLayout />
//     <TopicLayout />
//     </div>
//     <div className = "myForm">
//         <div>최신 게시글</div>
//         <div className="newTopicLayout">
//             <div className="newTopicListLayout">
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//             </div>
//             <div className="newTopicListLayout">
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//             </div>
//             <div className="newTopicListLayout">
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//                 <NewTopicLayout />
//             </div>
//         </div>
        
             
//     </div>
// </div>

 
  
    
)
const MainLayout = styled.div`
    display:flex;
    flex-direction:column;
`
const BtnLayout = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    margin: 60px 0px 0px 0px;
    button{
        display:flex;
        justify-content: center;
        align-items:center;
        margin: 10px 10px 0px 0px;
        width:20%;
        background-color:#ffffff;
        border: 1px solid #8885a4;
        border-radius:5px;
        padding:5px;
        text-color:#8885a4;
    }
`
const TopicCircleLayout = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    button{
        margin: 30px 30px 0px 0px;
        background-color:#ffffff;
        border: 1px solid #8885a4;
        width:20%;
        height:100px;
        border-radius:20px;
        padding:10px;
        text-color:#8885a4;
        font-size: 15px;
    }

`
const Btn = styled.button`
    margin: 10px 10px 0px 0px; 
    background-color:#ffffff;
    border: 1px solid #8885a4;
    border-radius:5px;
    padding:13px;
    text-color:#8885a4;

`;
const InputLayout = styled.div`
    justify-content: center;
    border-width:2;
    height:100px;
    display:flex;
    input{
        width:50%;
        border: 1px solid #8885a4;
        border-radius:8px;
        height:30px;
        margin-top:100px;
        justify-content: center;
    }
`;
const InputForm = styled.input`
    
    width:100%;
    align-item:center;
    height:30px;

`;
// const TopicCircle = styled.button`
    
//     justify-content: center;
//     border-radius: 20px;
//     background-color:#f4c96b;
//     width:100%;
//     height:100px;
//     font-size: 15px;

// `;
// const TopicCircleLayout = styled.div`
//     display:flex;
//     flex-direction:row;
//     button{
//         justify-content: center;
//         align-items:center;
//     }
// `;
export default TopLayout;