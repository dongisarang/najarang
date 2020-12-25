package com.najarang.back.controller.v1;

import com.najarang.back.dto.UserDTO;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.security.JwtTokenUtil;
import com.najarang.back.security.JwtUserDetailsService;
import com.najarang.back.service.ResponseService;
import com.najarang.back.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@Slf4j
public class SignController {

    private final UserService userService;
    private final ResponseService responseService; // 결과를 처리할 Service
    private final JwtUserDetailsService userDetailsService;
    private final JwtTokenUtil jwtTokenUtil;

    @PostMapping(path = "/signin")
    public CommonResult signin(@RequestBody UserDTO user) {

        String subject = user.getEmail() + "provider:" + user.getProvider();
        // 올바른 email,provider인지 확인
        userDetailsService.loadUserByUsername(subject);
        final String token = jwtTokenUtil.generateToken(subject);
        return responseService.getSingleResult(token);
    }

    @PostMapping(path = "/signup")
    public CommonResult signup(@RequestBody UserDTO user) {
        User loginUser = userService.signup(user);
        return responseService.getSuccessResult();
    }
}