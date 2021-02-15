import React, { Component, useEffect, useState } from "react";
import "./TopLayout.css";
import TopicLayout from "./TopicLayout";
import NewTopicLayout from "./NewTopicLayout";
import ListPage from "./ListPage";
import styled from "styled-components";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { useObserver } from "mobx-react";
import { Modal, Button } from "antd";
import CreateContent from "./CreateContent";
import useStores from "../hooks/useStores";
// @inject("topic")
const TopLayout = () => {
  const { contentStore } = useStores();
  const [write, setWrite] = useState(false);
  useEffect(() => {
    contentStore.setContentList();
    contentStore.setTopicList();
  }, []);
  const List = (data) => {
    data.map((list) => {
      return (
        <HotTopicListLayout>
          <Link to="/list">
            <div>
              <p className="topicBox">{list.topic}</p>
              <p className="topicTitle">{list.title}</p>
            </div>
          </Link>
        </HotTopicListLayout>
      );
    });
  };
  const showModal = () => {
    // this.setState({
    //   isCreateContent: true,
    // });
    setWrite(true);
  };
  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    contentStore.setSelectList(index);
  };
  const handleTopicClick = (index) => {
    contentStore.setSelectMainTopic(index);
  };
  const handleCancle = () => {
    setWrite(false);
  };
  return useObserver(() => {
    return (
      <MainLayout>
        <InputLayout>
          <input
            placeholder="관심있는 내용을 검색하세요!"
            type="text"
            className="form-control"
          ></input>
        </InputLayout>
        {/* <Link to="/createContent"> */}
        <BtnLayout>
          <button onClick={showModal}>자랑글 쓰러 가기</button>
        </BtnLayout>

        <TopicCircleLayout>
          {contentStore.topicList.map((topic, index) => {
            if (index > 3) return <></>;
            return (
              <Link to="/list">
                <TopicCircle
                  onClick={() => {
                    handleTopicClick(index);
                  }}
                >
                  {topic.name}
                </TopicCircle>
              </Link>
            );
          })}
        </TopicCircleLayout>
        <HotTopicLayout>
          <div>핫토픽 리스트</div>
        </HotTopicLayout>
        <ListLayout>
          {contentStore.contentList
            ? contentStore.contentList.map((list, index) => {
                return (
                  <HotTopicListLayout>
                    <Link to="/listRead">
                      <div
                        onClick={() => {
                          handleClick(index);
                        }}
                      >
                        <p className="topicBox">{list.topic.name}</p>
                        <p className="topicTitle">{list.title}</p>
                      </div>
                    </Link>
                  </HotTopicListLayout>
                );
              })
            : null}
        </ListLayout>
        <HotTopicLayout>
          <div>핫토픽 리스트</div>
        </HotTopicLayout>
        <ListLayout>
          {contentStore.contentList
            ? contentStore.contentList.map((list, index) => {
                return (
                  <HotTopicListLayout>
                    <Link to="/listRead">
                      <div
                        onClick={() => {
                          handleClick(index);
                        }}
                      >
                        <p className="topicBox">{list.topic.name}</p>
                        <p className="topicTitle">{list.title}</p>
                      </div>
                    </Link>
                  </HotTopicListLayout>
                );
              })
            : null}
        </ListLayout>
        <CreateContent visible={write} onCancle={handleCancle}></CreateContent>
      </MainLayout>
    );
  });
};

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;

  padding: 1px 1px 1px 0px;
`;
const BtnLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0px 0px 0px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px 0px 0px;
    width: 20%;
    height: 40px;
    background-color: #8885a4;
    border: 1px solid #8885a4;
    border-radius: 5px;
    padding: 5px;
    color: #ffffff;
  }
`;
const TopicCircleLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
  }
`;
const TopicCircle = styled.div`
  margin: 50px 100px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  border: 0px solid #8885a4;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  padding: 10px;
  color: #ffffff;
`;
const HotTopicLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    width: 600px;
    margin: 60px 300px 0px 0px;
    align-items: center;
    padding: 0px 0px 2px 20px;
    font-family: helvetica, sans-serif;
    font-size: 20px;
    border-bottom: 1px solid;
  }
`;
const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HotTopicListLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
  }
  div {
    display: flex;
    width: 400px;
    margin: 0px 500px 0px 0px;
    display: flex;
    flex-direction: row;
  }
  .topicBox {
    border: 0px solid #8885a4;
    border-radius: 10px;
    background-color: #e2e2e2;
    padding: 4px;
    font-family: helvetica, sans-serif;
    font-size: 13px;
  }
  .topicTitle {
    font-family: helvetica, sans-serif;
    margin: 14px 0px 0px 20px;
    width: auto;
  }
`;
const Btn = styled.button`
  margin: 10px 10px 0px 0px;
  background-color: #ffffff;
  border: 1px solid #8885a4;
  border-radius: 5px;
  padding: 13px;
  text-color: #8885a4;
`;
const InputLayout = styled.div`
  justify-content: center;
  border-width: 2;
  height: 100px;
  display: flex;
  input {
    width: 50%;
    border: 1px solid #8885a4;
    border-radius: 8px;
    height: 30px;
    margin-top: 100px;
    justify-content: center;
  }
`;
const InputForm = styled.input`
  width: 100%;
  align-item: center;
  height: 30px;
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
