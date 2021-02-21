import styled from "styled-components";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component, createContext } from "react";
import ListHeader from "./ListHeader";
import { FaEye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import useStores from "../hooks/useStores";
import { useObserver } from "mobx-react";
const ListComponent = ({ content, index }) => {
  const { contentStore } = useStores();
  const handleClick = () => {
    contentStore.setClickContentIndex(index);
  };
  return useObserver(() => {
    return (
      <>
        <p>카테고리</p>
        <h2 onClick={() => handleClick()}>{content.title}</h2>
        <h4>{content.content}</h4>
        <h5>{content.user_id}</h5>
        <div className="row">
          <FaEye></FaEye>
          <h5>{content?.hit_count}</h5>
          <FaRegThumbsUp></FaRegThumbsUp>
          <h5>{content?.like_count}</h5>
          <BsChatDots></BsChatDots>
          <h5>{content?.hit_count}</h5>
          <h5 className="icon">2시간</h5>
          <BsBookmark className="bookMark"></BsBookmark>
        </div>
      </>
    );
  });
};
// class ListComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: props.content,
//       index: props.index,
//     };
//   }
//   handleClick = () => {
//     console.log("들어왔다", "  ", this.state);
//     this.props.topic.setClickContentIndex(this.state.index);
//   };
//   render() {
//     return (
//       <>
//         <p>카테고리</p>
//         <h2 onClick={this.handleClick}>{this.state.content.title}</h2>
//         <h4>{this.state.content.content}</h4>
//         <h5>{this.state.content.user_id}</h5>
//         <div className="row">
//           <FaEye></FaEye>
//           <h5>{this.state.content.hit_count}</h5>
//           <FaRegThumbsUp></FaRegThumbsUp>
//           <h5>{this.state.content.like_count}</h5>
//           <BsChatDots></BsChatDots>
//           <h5>{this.state.content.hit_count}</h5>
//           <h5 className="icon">2시간</h5>
//           <BsBookmark className="bookMark"></BsBookmark>
//         </div>
//       </>
//     );
//   }
// }

export default ListComponent;
