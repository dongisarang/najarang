package com.najarang.back.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = {"TestHello"})
@RestController
public class HelloController {

    private static final String HELLO = "helloworld";

    @Setter
    @Getter
    private static class Hello {
        private String message;
    }

    @ApiOperation(value = "테스트 컨트롤러", notes = "helloworld string 출력")
    @GetMapping(value = "/helloworld/string")
    @ResponseBody
    public String helloworldString() {
        return HELLO;
    }

    @ApiOperation(value = "테스트 컨트롤러", notes = "helloworld json 출력")
    @GetMapping(value = "/helloworld/json")
    @ResponseBody
    public Hello helloworldJson() {
        Hello hello = new Hello();
        hello.message = HELLO;
        return hello;
    }

    @ApiOperation(value = "테스트 컨트롤러", notes = "helloworld page 출력")
    @GetMapping(value = "/helloworld/page")
    public String helloworld() {
        return "helloworld";
    }
}