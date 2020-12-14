import styled from "styled-components";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import useStores from "../hooks/useStores";
import { useObserver } from "mobx-react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const CreateContent = () => {
  const { contentStore } = useStores();
  const handleChange = (e) => {
    contentStore.setSelectTopic(e.target.value);
    console.log(e.target.value);
  };
  const handleCreate = () => {
    //TODO: 내용 등록할때
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
              return <MenuItem value={topic}>{topic}</MenuItem>;
            })}
            {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </SelectLayout>
        <TextField id="standard-basic" label="제목을 입력해주세요"></TextField>

        <TextField
          id="outlined-multiline-static"
          label="내용을 입력해주세요."
          multiline
          rowsMax={20}
          onChange={handleChange}
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
