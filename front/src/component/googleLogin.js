import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

const googleLogin = (props) => {
    const { onLoginGoogle } = props;
    return (
      <div>
        <GoogleLogin
           clientId='223281605678-qblodmohj92uq9ju7i1i4k624ui4u8hs.apps.googleusercontent.com'
           buttonText ="Google"
           render={() => (
             <div onClick={props.onClick} />
           )}
           onSuccess={result => onLoginGoogle(result)}
           onFailure={result => console.log(result)}
           cookiePolicy={'single_host_origin'}
        />
        로그인
      </div>
    );
  };
  
  export default googleLogin;
