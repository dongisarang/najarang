import React, {  Component,createContext  } from 'react';
import TopLayout from './component/TopLayout';
import LoginPage from './component/LoginPage'
import NaverLogin from 'react-naver-login';
import ListPage from './component/ListPage';
import ListRead from './component/ListRead';
import styled from 'styled-components';
import SignUpPage from './component/SignUpPage'
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import { observer, inject } from "mobx-react";
const AppContext = createContext();
@inject("topic")
class App extends Component {
  
  render() {
    return(
<Router>
        
        <Layout>
        
          <HomeLayout>
          <Link to='/' >
            HOME
          </Link>
          </HomeLayout>
          <Link to='/signup' >
          <Btn>
              회원가입
          </Btn>
             
          </Link>
          <Link to='/login' >
            <Btn>
              로그인
            </Btn>
          
          </Link>
          
        </Layout>
          
     
   
     
      <Route path='/' render={props => {return(<TopLayout />)}} exact={true}/>
      <Route path='/login' component={LoginPage} exact={true}/>
      <Route path='/list' render={props => {return(<ListPage />)}} exact={true}/>
      <Route path='/signup' component={SignUpPage} exact={true}/>
      <Route path='/listRead' component={ListRead} exact={true}/>
    </Router>
      //render={props => {return(<ListRead />)}}
    )
    }
 }

 const Layout = styled.div`
    display: flex;
    flex-direction:row;
    background-color:#8885a4;
    padding: 2px 2px 6px 2px;
    a {text-decoration: none; color:white;}
 `;
 const HomeLayout = styled.div`
    flex:10;
    align-items:center;
    display: flex;
    margin-left:10px;
    font-size:30px;
    color:#8885a4;
    background-color:#8885a4;
 `;

 const Btn = styled.button`
    margin: 10px 10px 0px 0px; 
    background-color:#ffffff;
    border: 0px solid #8885a4;
    border-radius:5px;
    background-color:#8885a4;
    padding:5px;
    color:#ffffff;
`;

export default App;
//background-color:#8885a4;
//render={props =>{ return( <Login/> )}}