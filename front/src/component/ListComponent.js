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
};

export default ListComponent;
