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
@inject('topic')
@inject('currentTopic') 
@inject('dataStore')
class ListComponent extends Component {
    constructor(props) {
        super(props)
        this.state ={
            content: props.content
        } 
    }
    render(){
      return(
        <>
                    <p>카테고리</p>
                        <h2>{this.state.content.title}</h2>
                        <h4>{this.state.content.content}</h4>
                        <h5>{this.state.content.user_id}</h5>
                        <div className="row">
                            <FaEye></FaEye>
                            <h5>{this.state.content.hit_count}</h5>
                            <FaRegThumbsUp></FaRegThumbsUp>
                            <h5>{this.state.content.like_count}</h5>
                            <BsChatDots></BsChatDots>
                            <h5>{this.state.content.hit_count}</h5>
                            <h5 className="icon">2시간</h5>
                            <BsBookmark className="bookMark"></BsBookmark>
                        </div>

        </>
    )  
    }
    
}; 

export default ListComponent;
