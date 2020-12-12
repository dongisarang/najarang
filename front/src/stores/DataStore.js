import {
  observable,
  action
} from 'mobx';

export default class DataStore {
  //@observable topic = [];
  @observable dataList = [{
      id: "example",
      title: "오늘도 즐겁게 월루했습니다.",
      content: "세상에서 제일 즐거운 월루~~",
      created: "2020-11-14",
      deleted: "",
      user_id: "example",
      topic_id: "example",
      like_count: "2",
      hit_count: "2"

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
      hit_count: "3"

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
      hit_count: "3"

    }
  ];
  @action getData = () => {
    return this.dataList;
  }
  @action addTopic = (data) => {
    const len = this.topic.length;
    this.topic[len] = data.name;
  }
}