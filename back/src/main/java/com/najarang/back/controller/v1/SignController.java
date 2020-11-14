package com.najarang.back.controller.v1;

import com.najarang.back.dto.UserDTO;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import com.najarang.back.service.JwtService;
import com.najarang.back.service.ResponseService;
import com.najarang.back.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RequiredArgsConstructor
@RestController
@Slf4j
public class SignController {

    private final UserService userService; // 결과를 처리할 Service
    private final ResponseService responseService; // 결과를 처리할 Service
    private final JwtService jwtService;

    @PostMapping(path = "/signin")
    public CommonResult signin(@RequestBody UserDTO user) {
        User loginUser = userService.signin(user);
        String token = jwtService.create("member", loginUser, "user");
        return responseService.getSuccessResult(token);
    }

    @PostMapping(path = "/signup")
    public CommonResult signup(@RequestBody UserDTO user) {
        User loginUser = userService.signup(user);
        return responseService.getSuccessResult("success");
    }
}