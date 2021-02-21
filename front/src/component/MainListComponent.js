/** @format */

import useStores from "../hooks/useStores";
import { useObserver } from "mobx-react";
import React, { Component, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
const MainListComponent = ({ list, index, onClick }) => {
  useEffect(() => {}, []);
  const handleClick = useCallback(() => {
    onClick(list.id);
  }, []);
  return useObserver(() => {
    return (
      <HotTopicListLayout onClick={handleClick}>
        <p className="topicBox">{list.topic.name}</p>
        <p className="topicTitle">{list.title}</p>
      </HotTopicListLayout>
    );
  });
};
const HotTopicListLayout = styled.div`
  display: flex;
  width: 600px;
  margin: 0px 0px 0px 0px;
  flex-direction: row;

  a {
    text-decoration: none;
    color: black;
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
export default MainListComponent;
