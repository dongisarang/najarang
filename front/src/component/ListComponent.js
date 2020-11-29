import styled from "styled-components";
import {Link,Route,BrowserRouter as Router} from "react-router-dom";
import React, {Component,createContext} from "react";
import ListHeader from "./ListHeader";
import {FaEye} from "react-icons/fa";
import { FaRegThumbsUp} from "react-icons/fa";
import { BsChatDots} from "react-icons/bs";
import {BsBookmark} from "react-icons/bs";
import { observer, inject} from "mobx-react";
import data from "./data";
import useStores from '../hooks/useStores';
const ListComponent = () => {
    const currentData = data;
    const { content } = useStores();
    return(
      <div>
      <p>아아아</p>
      <h2>제목</h2>
      <h4>내용</h4>
      <h5>글쓴이</h5>
      <div className="row">
        <FaEye></FaEye>
        <h5>175</h5>
        <FaRegThumbsUp></FaRegThumbsUp>
        <h5>1</h5>
        <BsChatDots></BsChatDots>
        <h5>2</h5>
        <h5 className="icon">2시간</h5>
        <BsBookmark className="bookMark"></BsBookmark>
      </div>
      </div>
    )
};

export default ListComponent;
