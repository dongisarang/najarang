package com.najarang.back.controller.v1;

import com.najarang.back.advice.exception.CUserNotFoundException;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import com.najarang.back.repo.UserJpaRepo;
import com.najarang.back.service.ResponseService;
import com.najarang.back.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"1. User"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class UserController {

    private final UserJpaRepo userJpaRepo;
    private final ResponseService responseService; // 결과를 처리할 Service

    @ApiOperation(value = "회원 리스트 조회", notes = "모든 회원을 조회한다")
    @GetMapping(value = "/users")
    public ListResult<User> findAllUser() {
        return responseService.getListResult(userJpaRepo.findAll());
    }

    @ApiOperation(value = "회원 단건 조회", notes = "회원번호로 회원을 조회한다")
    @GetMapping(value = "/user/{id}")
    public SingleResult<User> findUserById(@ApiParam(value = "회원번호", required = true) @PathVariable long id) {
        return responseService.getSingleResult(userJpaRepo.findById(id).orElseThrow(CUserNotFoundException::new));
    }

    @ApiOperation(value = "회원 등록", notes = "회원을 등록한다")
    @PostMapping(value = "/user")
    public SingleResult<User> save(@ApiParam(name = "user", value = "회원정보", required = true) @RequestBody User user) {
        return responseService.getSingleResult(userJpaRepo.save(user));
    }

    @ApiOperation(value = "회원 수정", notes = "회원정보를 수정한다")
    @PutMapping(value = "/user")
    public SingleResult<User> modify(@ApiParam(name = "user", value = "회원정보", required = true) @RequestBody User user) {
        long userId = user.getId();
        // 회원 없으면 예외처리
        User newUser = userJpaRepo.findById(userId).orElseThrow(CUserNotFoundException::new);
        newUser.setNickname(user.getNickname());
        newUser.setInterestedTopic(user.getInterestedTopic());
        return responseService.getSingleResult(userJpaRepo.save(newUser));
    }

    @ApiOperation(value = "회원 삭제", notes = "회원번호로 회원정보를 삭제한다")
    @DeleteMapping(value = "/user/{id}")
    public CommonResult delete(
            @ApiParam(value = "회원번호", required = true) @PathVariable long id) {
        userJpaRepo.deleteById(id);
        // 성공 결과 정보만 필요한경우 getSuccessResult()를 이용하여 결과를 출력한다.
        return responseService.getSuccessResult();
    }
}