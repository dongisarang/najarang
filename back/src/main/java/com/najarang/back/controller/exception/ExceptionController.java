package com.najarang.back.controller.exception;

import com.najarang.back.model.response.CommonResult;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/exception")
public class ExceptionController {

    @GetMapping(value = "/accessdenied")
    public CommonResult accessdeniedException() {
        throw new AccessDeniedException("");
    }
}