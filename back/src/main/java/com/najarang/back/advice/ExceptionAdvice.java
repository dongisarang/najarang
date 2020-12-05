package com.najarang.back.advice;

import com.najarang.back.advice.exception.CBoardNotFoundException;
import com.najarang.back.advice.exception.CUnauthorizedException;
import com.najarang.back.advice.exception.CUserAlreadyExistException;
import com.najarang.back.advice.exception.CUserNotFoundException;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.service.ResponseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@Slf4j
// 예외 발생 시 json형태로 결과를 반환
// annotation에 추가로 패키지를 적용하면 특정 패키지 하위의 Controller에만 로직이 적용되게도 할 수 있음
// ex) @RestControllerAdvice(basePackages = "xxx")
@RestControllerAdvice
public class ExceptionAdvice {

    private final ResponseService responseService;

    // Exception이 발생하면 해당 Handler로 처리하겠다고 명시
    @ExceptionHandler(Exception.class)
    // 해당 Exception이 발생하면 Response에 출력되는 HttpStatus Code가 500으로 내려가도록 설정
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    protected CommonResult defaultException(HttpServletRequest request, Exception e) {
        log.info("defaultException()...");
        log.info(request.toString());
        log.info(e.toString());
        return responseService.getFailResult(500, e.getMessage());
    }

    @ExceptionHandler(CUserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    protected CommonResult userNotFoundException(HttpServletRequest request, CUserNotFoundException e) {
        return responseService.getFailResult(404, "회원정보가 없습니다.");
    }

    @ExceptionHandler(CUnauthorizedException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    protected CommonResult unAuthorizedException(HttpServletRequest request, CUserNotFoundException e) {
        return responseService.getFailResult(403, "user privileges are not valid");
    }

    @ExceptionHandler(CUserAlreadyExistException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    protected CommonResult userAlreadyExistException(HttpServletRequest request, CUserAlreadyExistException e) {
        return responseService.getFailResult(403, "이미 있는 회원입니다.");
    }

    @ExceptionHandler(CBoardNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    protected CommonResult boardNotFoundException(HttpServletRequest request, CUserNotFoundException e) {
        return responseService.getFailResult(404, "게시글 정보가 없습니다.");
    }
}