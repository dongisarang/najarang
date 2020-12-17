package com.najarang.back.controller.v1;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.cloud.context.config.annotation.RefreshScope;

@RestController
@RefreshScope
public class ConfigTestController {

    @Value("${spring.profiles}")
    private String identity;

    @GetMapping("/test")
    public String test() {
        return identity;
    }
}