package com.najarang.back.config.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// Jwt토큰은 정상이라는 가정하에 Jwt토큰이 가지지 못한 권한의 리소스를 접근할 때
// => 예외가 발생할 경우 handler에서는 /exception/accessdenied로 포워딩
@Slf4j
@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException exception) throws IOException,
            ServletException {
        response.sendRedirect("/exception/accessdenied");
    }
}