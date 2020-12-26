import styled from "styled-components";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component, useState } from "react";
import { observer, inject } from "mobx-react";
import useStores from "../hooks/useStores";
import { useObserver } from "mobx-react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
const CreateContent = () => {
  const { contentStore, UserStore } = useStores();
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    contentStore.setSelectTopic(e.target.value);
    setTopic(e.target.value);
    console.log(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleCreate = () => {
    //TODO: 내용 등록할때
    const queryObj = {
      title: title,
      content: content,
      topicId: topic,
    };
    //console.log("content: ", queryObj);
    const token = UserStore.getUserToken();
    try {
      const response = axios.post("/board", queryObj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.msg === "success") {
        alert("성공!");
      }
    } catch (error) {
      console.log("createContent fail", error);
    }
  };
  return useObserver(() => {
    return (
      <CreateLayout>
        <SelectLayout>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={handleChange}
          >
            {contentStore.topic.map((topic) => {
              return <MenuItem value={topic.id}>{topic.name}</MenuItem>;
            })}
          </Select>
        </SelectLayout>
        <TextField
          id="standard-basic"
          label="제목을 입력해주세요"
          onChange={handleTitle}
        ></TextField>

        <TextField
          id="outlined-multiline-static"
          label="내용을 입력해주세요."
          multiline
          rowsMax={20}
          onChange={handleContent}
          variant="outlined"
          style={{ height: "500px" }}
        />
        <ButtonLayout>
          <Button
            style={{ color: "#FFFFFF", background: "#8885a4" }}
            variant="contained"
            onClick={handleCreate}
          >
            등록하기
          </Button>
        </ButtonLayout>
      </CreateLayout>
    );
  });
};
const CreateLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const SelectLayout = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
`;
const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export default CreateContent;
