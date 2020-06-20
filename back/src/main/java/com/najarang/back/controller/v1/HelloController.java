package com.najarang.back.controller.v1;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1")
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "HelloWorld";
    }
}