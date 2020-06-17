import React, {  Component } from 'react';
import TopLayout from './component/TopLayout';
import KakaoSignUp from './component/KakaoSignUp'
import NaverLogin from 'react-naver-login';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  
  render() {
    return(
      <Router>
        <div>
          <Layout>
            <headerBtn>
            <Link to='/' >
            <Btn>
                회원가입
            </Btn>
               
            </Link>
            <Link to='/login' >
              <Btn>
                로그인
              </Btn>
            
            </Link>
            </headerBtn>
          </Layout>
            
       
     
        <hr />
        <Route path='/' component={TopLayout} exact={true}/>
        <Route path='/login' component={KakaoSignUp} exact={true}/>
      </div>
      </Router>
      
      
    )
    }
 }
 const Layout = styled.div`
     display: flex;
    flex-direction:row;
    justify-content:flex-end;
     .btn{
      border-width:2;
      width: 100px;
      height:50px;
     }
 `;
 const headerBtn = styled.div`

    justify-content:flex-end;
    background-color:#8885a4;
     margin-left: 100px;
     color:blue;
 `;
 const Btn = styled.button`
    background-color:#8885a4;
    border-radius:18px;
    padding:15px;
    color:#ffffff;
    

`;

export default App;

//render={props =>{ return( <Login/> )}}