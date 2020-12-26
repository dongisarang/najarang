import {
  observable,
  action
} from "mobx";
//회원가입할때 쓰는 스토어
export default class TopicList {
  //@observable topic = [];
  @observable topic = ["취미", "소확횡", "월루", "합격"];
  @observable selectTopic = [];
  @observable userEmail = "";
  @observable clickContentIndex = "";
  //고른 토픽들 넣는 함수
  @action addTopic = (data) => {
    const len = this.topic.length;
    this.topic[len] = data.name;
  };
  @action setSelectTopic = (selectTopic) => {
    this.selectTopic.push(selectTopic);
  };
  @action getTopic = () => {
    return this.selectTopic;
  };
  @action setUserEmail = (userEmail) => {
    this.userEmail = userEmail;
  };
  @action getUserEmail = () => {
    return this.userEmail;
  };
  @action setClickContentIndex = (clickContentIndex) => {
    this.clickContentIndex = clickContentIndex;
  };
  @action getClickContentIndex = () => {
    return this.clickContentIndex;
  };
}