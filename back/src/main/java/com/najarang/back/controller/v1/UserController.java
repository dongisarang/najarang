package com.najarang.back.controller.v1;

import com.najarang.back.advice.exception.CUserNotFoundException;
import com.najarang.back.dto.UserDTO;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import com.najarang.back.repo.UserJpaRepo;
import com.najarang.back.service.ResponseService;
import com.najarang.back.service.UserService;
import com.najarang.back.service.impl.UserServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"1. User"})
@RequiredArgsConstructor
@RestController
@Slf4j
public class UserController {

    private final UserService userService; // 결과를 처리할 Service

    @ApiOperation(value = "회원 리스트 조회", notes = "모든 회원을 조회한다")
    @GetMapping(value = "/users")
    public ListResult<User> findAllUser() {
        return userService.findAllUser();
    }

    @ApiOperation(value = "회원 단건 조회", notes = "회원번호로 회원을 조회한다")
    @GetMapping(value = "/user/{id}")
    public SingleResult<User> findUserById(@ApiParam(value = "회원번호", required = true) @PathVariable long id) {
        return userService.findUserById(id);
    }

    @ApiOperation(value = "회원 등록", notes = "회원을 등록한다")
    @PostMapping(value = "/user")
    public SingleResult<User> save(@ApiParam(name = "user", value = "회원정보", required = true) @RequestBody UserDTO user) {
        return userService.save(user);
    }

    @ApiOperation(value = "회원 수정", notes = "회원정보를 수정한다")
    @PutMapping(value = "/user")
    public SingleResult<User> modify(@ApiParam(name = "user", value = "회원정보", required = true) @RequestBody UserDTO user) {
        return userService.modify(user);
    }

    @ApiOperation(value = "회원 삭제", notes = "회원번호로 회원정보를 삭제한다")
    @DeleteMapping(value = "/user/{id}")
    public CommonResult delete(
            @ApiParam(value = "회원번호", required = true) @PathVariable long id) {
        return userService.delete(id);
    }
}