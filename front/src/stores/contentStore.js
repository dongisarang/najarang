import {
  observable
} from "mobx";
import contentRepository from "./repositories/contentRepository";
const contentStore = observable({
  flag: true,
  topic: [{
      name: "취미",
      id: 1,
    },
    {
      name: "소확횡",
      id: 2,
    },
    {
      name: "월루",
      id: 3,
    },
    {
      name: "합격",
      id: 4,
    },
  ],
  selectTopic: '',
  userEmail: "",
  clickContentIndex: "",
  currentTopic: "",
  dataList: [{
      id: "example",
      title: "오늘도 즐겁게 월루했습니다.",
      content: "세상에서 제일 즐거운 월루~~",
      created: "2020-11-14",
      deleted: "",
      user_id: "example",
      topic_id: "example",
      like_count: "2",
      hit_count: "2",
    },
    {
      id: "example1",
      title: "아아아",
      content: "으으으",
      created: "2020-11-15",
      deleted: "",
      user_id: "example1",
      topic_id: "example2",
      like_count: "3",
      hit_count: "3",
    },
    {
      id: "example2",
      title: "아아아아ㅣ아아",
      content: "으으으으으으으으",
      created: "2020-11-15",
      deleted: "",
      user_id: "example2",
      topic_id: "example3",
      like_count: "3",
      hit_count: "3",
    },
  ],
  contentList: [],
  selectList: "",
  topicList: [],
  selectTopic: "",
  setSelectMainTopic(selectTopic) {
    this.selectTopic = selectTopic;
  },
  getSelectMainTopic() {
    return this.selectTopic;
  },
  async setTopicList() {
    const response = await contentRepository.topicListGet();
    if (response.data.msg === "success") {
      this.topicList = response.data.list;
      return true;
    }
    return false;
  },
  async modifyContent(boarderId, queryObj) {
    const response = await contentRepository.boardsUpdate(boarderId, queryObj);
    if (response.data.msg === "success") {
      return true;
    }
    return false;
  },
  getTopicList() {
    return this.topicList;
  },
  setSelectList(selectList) {
    this.selectList = selectList;
  },
  getSelectList() {
    return this.selectList;
  },
  async setContentList() {
    const response = await contentRepository.boardsGet();
    if (response.data.msg === "success") {
      this.contentList = response.data.list;
      return this.contentList;
    }
    return false;
  },
  getContentList() {
    return this.contentList;
  },
  getData() {
    return this.dataList;
  },
  //고른 토픽들 넣는 함수
  addTopic(data) {
    const len = this.topic.length;
    this.topic[len] = data.name;
  },
  setSelectTopic(selectTopic) {
    this.selectTopic = selectTopic;
  },
  getTopic() {
    return this.selectTopic;
  },
  setUserEmail(userEmail) {
    this.userEmail = userEmail;
  },
  getUserEmail() {
    return this.userEmail;
  },
  setClickContentIndex(clickContentIndex) {
    this.clickContentIndex = clickContentIndex;
  },
  getClickContentIndex() {
    return this.clickContentIndex;
  },
  setCurrentTopic(data) {
    this.currentTopic = data;
  },
  getCurrentTopic(topic) {
    return this.currentTopic;
  },
});
export default contentStore;
//export {contentStore}