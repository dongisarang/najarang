package com.najarang.back.config.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 지금까지 적용한 커스텀 예외처리는 ControllerAdvice 즉 Spring이 처리 가능한 영역까지 리퀘스트가 도달해야 처리할 수 있음
// SpringSecurity는 Spring 앞단에서 필터링을 하기 때문에, 해당 상황의 exeption이 Spring의 DispatcherServlet까지 도달x
// 온전한 Jwt가 전달이 안될 경우는 토큰 인증 처리 자체가 불가능 -> 토큰 검증 단에서 프로세스가 끝남
// =>> 예외가 발생할 경우 /exception/entrypoint로 포워딩
@Slf4j
@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException ex) throws IOException,
            ServletException {
        RequestDispatcher dispatcher = request.getRequestDispatcher("/exception/entrypoint");
        dispatcher.forward(request, response);
    }
}