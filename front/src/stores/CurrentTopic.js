import { observable, action } from 'mobx';

export default class CurrentTopic {
  //@observable topic = [];
  @observable topic = '';
  @action setCurrentTopic = (data) =>{
    this.topic = data;
  }
  @action getCurrentTopic = (topic) =>{
    return this.topic;
  }
}