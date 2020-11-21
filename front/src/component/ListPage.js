import styled from 'styled-components'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import React, { Component } from 'react'
import ListHeader from './ListHeader'
import { FaEye } from 'react-icons/fa'
import { FaRegThumbsUp } from 'react-icons/fa'
import { BsChatDots } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { observer, inject } from 'mobx-react'
import ListComponent from './ListComponent'
@inject('topic')
@inject('currentTopic')
class ListPage extends Component {
    constructor(props) {
        super(props)
        this.addCurrentTopic = this.addCurrentTopic.bind(this)
    }
    addCurrentTopic(item) {
        this.props.currentTopic.setCurrentTopic(item)
    }

    //토픽에 애초에 본인이 선택한 토픽만 나오도록 해야함
    render() {
        let list = [...this.props.topic.topic]
        //let $topic = document.querySelector('#')
        return (
            <ListLayout>
                <CategoryLayout>
                    {list.map((item, index) => (
                        <button onClick={() => this.addCurrentTopic(item)}>
                            {item}
                        </button>
                    ))}
                </CategoryLayout>
                <ListViewLayout>
                    <MainLayout>
                        <Link to="/listRead">
                            <ListComponent></ListComponent>
                        </Link>
                    </MainLayout>

                    <MainLayout>
                        <p>카테고리</p>
                        <h2>제목</h2>
                        <h4>내용</h4>
                        <h5>글쓴이</h5>
                        <div className="row">
                            <FaEye></FaEye>
                            <h5>175</h5>
                            <FaRegThumbsUp></FaRegThumbsUp>
                            <h5>1</h5>
                            <BsChatDots></BsChatDots>
                            <h5>2</h5>
                            <h5 className="icon">2시간</h5>
                            <BsBookmark className="bookMark"></BsBookmark>
                        </div>
                    </MainLayout>
                </ListViewLayout>
                <ListViewLayout>
                    <MainLayout>
                        <p>카테고리</p>
                        <h2>제목</h2>
                        <h4>내용</h4>
                        <h5>글쓴이</h5>
                        <div className="row">
                            <FaEye></FaEye>
                            <h5>175</h5>
                            <FaRegThumbsUp></FaRegThumbsUp>
                            <h5>1</h5>
                            <BsChatDots></BsChatDots>
                            <h5>2</h5>
                            <h5 className="icon">2시간</h5>
                            <BsBookmark className="bookMark"></BsBookmark>
                        </div>
                    </MainLayout>
                    <MainLayout>
                        <p>카테고리</p>
                        <h2>제목</h2>
                        <h4>내용</h4>
                        <h5>글쓴이</h5>
                        <div className="row">
                            <FaEye></FaEye>
                            <h5>175</h5>
                            <FaRegThumbsUp></FaRegThumbsUp>
                            <h5>1</h5>
                            <BsChatDots></BsChatDots>
                            <h5>2</h5>
                            <h5 className="icon">2시간</h5>
                            <BsBookmark className="bookMark"></BsBookmark>
                        </div>
                    </MainLayout>
                </ListViewLayout>
            </ListLayout>
        )
    }
}
const ListLayout = styled.div`
    display: flex;
    flex-direction: column;
`
const ListViewLayout = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    margin-right: 100px;
`
const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid gray;
    height: 180px;
    p {
        display: flex;
        margin-left: 5px;
    }
    h2 {
        display: flex;
        margin: 0px 0px 1px 5px;
    }
    h4 {
        display: flex;
        margin: 0px 0px 1px 5px;
    }
    h5 {
        margin: 0px 0px 1px 5px;
    }
    .row {
        display: flex;
        flex-direction: row;
        .icon {
            flex: 3;
        }
        .bookMark {
            margin-left: 10px;
            flex: 1;
        }
    }
`
const CategoryLayout = styled.div`
    display: flex;
    margin-left: 100px;
    margin-right: 100px;

    p {
        flex: 1;
        border-bottom: 1px solid black;
        justify-content: center;
        padding: 10px;
        align-items: center;
    }
`
export default ListPage
