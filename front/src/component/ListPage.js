import styled from "styled-components";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import ListHeader from "./ListHeader";
import { FaEye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import useStores from "../hooks/useStores";
import { useObserver } from "mobx-react";
import ListComponent from "./ListComponent";
const ListPage = () => {
  const { contentStore } = useStores();
  const addCurrentTopic = (item) => {
    //this.props.currentTopic.setCurrentTopic(item);
  };
  //토픽에 애초에 본인이 선택한 토픽만 나오도록 해야함

  //let list = [...this.props.topic.topic];
  let list = contentStore.topic;
  let dataList = JSON.parse(JSON.stringify(contentStore.getData()));
  const user = [
    {
      name: "dd",
    },
    {
      name: "dddd",
    },
  ];
  //let $topic = document.querySelector('#')
  return useObserver(() => {
    return (
      <ListLayout>
        <CategoryLayout>
          {" "}
          {list.map((item, index) => (
            <button onClick={() => this.addCurrentTopic(item)}> {item} </button>
          ))}{" "}
        </CategoryLayout>{" "}
        {dataList.map((data, index) => (
          <ListViewLayout>
            <MainLayout>
              <Link to="/listRead">
                <ListComponent content={data} index={index}>
                  {" "}
                </ListComponent>{" "}
              </Link>{" "}
            </MainLayout>{" "}
            <MainLayout>
              <Link to="/listRead">
                <ListComponent content={data} index={index}>
                  {" "}
                </ListComponent>{" "}
              </Link>{" "}
            </MainLayout>{" "}
          </ListViewLayout>
        ))}{" "}
      </ListLayout>
    );
  });
};
const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListViewLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  margin-right: 100px;
`;
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid gray;
  height: 180px;
  a {
    text-decoration: none;
    color: black;
  }
  p {
    display: flex;
    margin-left: 5px;
  }
  h2 {
    display: flex;
    margin: 0px 0px 1px 5px;
  }
  h4 {
    display: flex;
    margin: 0px 0px 1px 5px;
  }
  h5 {
    margin: 0px 0px 1px 5px;
  }
  .row {
    display: flex;
    flex-direction: row;
    .icon {
      flex: 3;
    }
    .bookMark {
      margin-left: 10px;
      flex: 1;
    }
  }
`;
const CategoryLayout = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 100px;

  p {
    flex: 1;
    border-bottom: 1px solid black;
    justify-content: center;
    padding: 10px;
    align-items: center;
  }
`;
export default ListPage;
