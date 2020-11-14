package com.najarang.back.service.impl;

import com.najarang.back.advice.exception.CUserAlreadyExistException;
import com.najarang.back.advice.exception.CUserNotFoundException;
import com.najarang.back.dto.UserDTO;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import com.najarang.back.repo.UserJpaRepo;
import com.najarang.back.service.ResponseService;
import com.najarang.back.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.Objects;

import static java.util.Objects.isNull;

@RequiredArgsConstructor
@Service("userService")
@Slf4j
public class UserServiceImpl implements UserService{

    private final UserJpaRepo userJpaRepo;
    private final ResponseService responseService; // 결과를 처리할 Service
    private static final String SIGNIN_EXCEPTION_MSG = "로그인정보가 일치하지 않습니다.";

    public ListResult<User> findAllUser() {
        return responseService.getListResult(userJpaRepo.findAll());
    }

    public SingleResult<User> findUserById(long id) {
        return responseService.getSingleResult(userJpaRepo.findById(id).orElseThrow(CUserNotFoundException::new));
    }

    public SingleResult<User> save(UserDTO user) {
        return responseService.getSingleResult(userJpaRepo.save(user.toEntity()));
    }

    public SingleResult<User> modify(UserDTO user) {
        long userId = user.getId();
        // 회원 없으면 예외처리
        User newUser = userJpaRepo.findById(userId).orElseThrow(CUserNotFoundException::new);
        // TODO 닉네임이나 주제 변경있을 경우에만 반영되도록 수정하기
        UserDTO userDto = newUser.toDTO();
        userDto.setNickname(user.getNickname());
        userDto.setInterestedTopic(user.getInterestedTopic());
        return responseService.getSingleResult(userJpaRepo.save(userDto.toEntity()));
    }

    public CommonResult delete(long id) {
        userJpaRepo.deleteById(id);
        // 성공 결과 정보만 필요한경우 getSuccessResult()를 이용하여 결과를 출력한다.
        return responseService.getSuccessResult(String.valueOf(id));
    }

    public User signin(UserDTO user) {
        User loginUser = userJpaRepo.findByEmailAndProvider(user.getEmail(), user.getProvider());
        Objects.requireNonNull(loginUser, SIGNIN_EXCEPTION_MSG);
        return loginUser;
    }

    public User signup(UserDTO user) {
        User loginUser = userJpaRepo.findByEmailAndProvider(user.getEmail(), user.getProvider());
        if (isNull(loginUser)) {
            return userJpaRepo.save(user.toEntity());
        } else {
            throw new CUserAlreadyExistException();
        }
    }
}