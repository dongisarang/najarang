package com.najarang.back.security;

import com.najarang.back.advice.exception.CUnauthorizedException;
import com.najarang.back.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@Slf4j
@RequiredArgsConstructor
public class JwtInterceptor implements HandlerInterceptor {
    private static final String HEADER_AUTH = "Authorization";

    private final JwtService jwtService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        final String token = request.getHeader(HEADER_AUTH);

        if(token != null && jwtService.isUsable(token)){
            return true;
        }else{
            request.setAttribute("message", "유효하지 않은 토큰입니다");
            request.setAttribute("exceptionClass", "CUnauthorizedException");
            log.info("request>>" + request);
            log.info("response>>" + response);
            request.getRequestDispatcher("/error").forward(request, response);
            return false;
        }
    }
}