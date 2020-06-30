import React, {  Component } from 'react';
import TopLayout from './component/TopLayout';
import KakaoSignUp from './component/KakaoSignUp'
import NaverLogin from 'react-naver-login';
import ListPage from './component/ListPage';
import CreateAccount from './component/CreateAccount';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

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
            
            
            <Link to='/createAccount' >
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
            
       
     
        <hr />
        <Route path='/' component={TopLayout} exact={true}/>
        <Route path='/login' component={KakaoSignUp} exact={true}/>
        <Route path='/list' render={props => {return(<ListPage />)}} exact={true}/>
        <Route path='/createAccount' render={props => {return(<CreateAccount />)}} exact={true}/>
      </Router>
      
      
    )
    }
 }

 const Layout = styled.div`
    display: flex;
    flex-direction:row;
 `;
 const HomeLayout = styled.div`
    flex:10;
    align-items:center;
    display: flex;
    margin-left:10px;
    font-size:30px;
 `;

 const Btn = styled.button`
    background-color:#8885a4;
    border-radius:18px;
    padding:15px;
    color:#ffffff;
`;

export default App;

//render={props =>{ return( <Login/> )}}