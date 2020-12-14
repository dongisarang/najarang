import {
    observable
} from "mobx";

const contentStore = observable({
    flag: true,
    topic: ["취미", "소확횡", "월루", "합격"],
    selectTopic: [],
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
    ],
    getData() {
        return this.dataList;
    },
    //고른 토픽들 넣는 함수
    addTopic(data) {
        const len = this.topic.length;
        this.topic[len] = data.name;
    },
    setSelectTopic(selectTopic) {
        this.selectTopic.push(selectTopic);
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
    }
});
export default contentStore;
//export {contentStore}