package com.najarang.back.controller.v1;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = {"0. TestHello"})
@RestController
@RequestMapping("/v1")
public class HelloController {

    @ApiOperation(value = "테스트 컨트롤러", notes = "HelloWorld를 보여준다")
    @GetMapping("/hello")
    public String hello() {
        return "HelloWorld";
    }
}