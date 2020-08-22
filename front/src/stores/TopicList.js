import { observable, action } from 'mobx';

export default class TopicList {
  //@observable topic = [];
  @observable topic = ['취미','소확횡','월루','합격'];
  @action addTopic = (data) =>{
    const len = this.topic.length;
    this.topic[len] = data.name;
  }
}