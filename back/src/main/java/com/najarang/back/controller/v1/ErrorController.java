package com.najarang.back.controller.v1;

import com.najarang.back.advice.exception.CUnauthorizedException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
@RestController
public class ErrorController {

    @CrossOrigin
    @GetMapping("/error")
    @ResponseBody
    public void apiError(HttpServletRequest request) throws Exception {
        String message = (String) request.getAttribute("message");
        String exception = (String) request.getAttribute("exceptionClass");
        if(exception.equals("CUnauthorizedException")){
            throw new CUnauthorizedException(message);
        } else {
            throw new Exception(message);
        }
    }
}
