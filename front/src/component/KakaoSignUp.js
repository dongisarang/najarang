import React, { Component } from 'react';
import styled from 'styled-components';
import googleLogin from './googleLogin'
//import { StyledText } from '../style';
import KaKaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';

class KakaoSignUp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: 'kakao'
    //     }
    // }

    responseKaKao = (res) => {
        this.setState({
            id:res.profile.id,
            provider:'kakao'
        })
        console.log('data: ',res);
    }

    responseFail = (err) => {
        alert(err);
    }
    responseGoogle = (response) => {
        console.log(response);
      }
    render() {
        return (
            
                <div>
                    <MainLayout>
                        <h1>로그인 방식을 선택해 주세요</h1>
                    </MainLayout>
                    <MiddleLayout >
                        <div className="content" >
                        <KaKaoBtn jsKey={'91e67ebb3e98ff0accfa0539dbe9698e'}
                        onSuccess={this.responseKaKao}
                        onFailure={this.responseFail}
                        getProfile={true}>
                            <p>카카오로 회원가입</p></KaKaoBtn>
                            <h6>카카오로 인증하여 회원가입</h6>
                           
                        </div>
                    </MiddleLayout>
                    <MiddleLayout >
                        <div className="content" >
                        <GoogleBtn>
                        <GoogleLogin
                                clientId="223281605678-qblodmohj92uq9ju7i1i4k624ui4u8hs.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseFail}
                                cookiePolicy={'single_host_origin'}
                                />
                        </GoogleBtn>
                        <h6>구글로 인증하여 회원가입</h6>
                        </div>
                    </MiddleLayout>
                    
                    

                    <br></br>
                </div>

            
        );
    }
}
const MainLayout = styled.div`
    display: flex;
    justify-content:center;
`;
const MiddleLayout = styled.div`
    display:flex;
    width:500px;
    height:50px;
    margin:0 auto;
    margin-top: 60px;
    border: 1px solid lightgrey;
    box-sizing:border-box;
    flex-direction:column;
    .content{
        margin-left: 10px;
        margin-top: 10px;
        display:flex;
        flex-direction:row;
        h4{
            margin: 0 auto;
        }
        h6{
            margin-left: 30px;
            margin-top: 5px;
        }
    }
`;

// const StKaKaoLogin = styled.div`
//     cursor: pointer;
//     /* border-radius:10px; */
//     /* width: 200px; */
//     /* &:hover{
//         box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
//     } */
// `;

const GoogleBtn = styled.div`
    padding: 0;
    width: 190px;
    height: 10px;
    margin-left: 40px;
`
const KaKaoBtn = styled(KaKaoLogin)`
    padding: 0;
    width: 190px;
    height: 30px;
 
    line-height: 44px;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 15px;
    font-weight: bold;
    
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
    .p{
        margin: 0 auto;
    }
`

export default KakaoSignUp;



{/* <NaverLogin 
                        clientId = "Aqpwh33bx4irAD87YKY8"
                        callbackUrl = "http://127.0.0.1:3000"
                            render={(props) => <MiddleLayout onClick={props.onClick}
                            >
                                <div className="content">
                                <button onClick={this.responseNaver}>네이버로 회원가입</button>
                                <h6>네이버로 인증하여 회원가입</h6>
                            </div>
                            </MiddleLayout>}
                        onSuccess={(naverUser) => console.log('안녕안녕',naverUser)}
                        onFailure={(result) => console.log(result)}
                    /> */}