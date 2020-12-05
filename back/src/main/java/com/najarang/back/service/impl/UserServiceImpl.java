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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.Optional;

@RequiredArgsConstructor
@Service("userService")
@Slf4j
public class UserServiceImpl implements UserService{

    private final UserJpaRepo userJpaRepo;
    private final ResponseService responseService; // 결과를 처리할 Service

    public ListResult<User> getUsers(Pageable pageable) {
        Page<User> users = userJpaRepo.findAll(pageable);
        return responseService.getListResult(users);
    }

    public SingleResult<User> getUser(long id) {
        return responseService.getSingleResult(userJpaRepo.findById(id).orElseThrow(CUserNotFoundException::new));
    }

    public SingleResult<User> save(UserDTO user) {
        return responseService.getSingleResult(userJpaRepo.save(user.toEntity()));
    }

    public SingleResult<User> modify(UserDTO user) {
        long userId = user.getId();
        // 회원 없으면 예외처리
        User newUser = userJpaRepo.findById(userId).orElseThrow(CUserNotFoundException::new);
        UserDTO userDto = newUser.toDTO();
        if (user.getNickname() != null) userDto.setNickname(user.getNickname());
        if (user.getInterestedTopic() != null) userDto.setInterestedTopic(user.getInterestedTopic());
        return responseService.getSingleResult(userJpaRepo.save(userDto.toEntity()));
    }

    public CommonResult delete(long id) {
        userJpaRepo.deleteById(id);
        // 성공 결과 정보만 필요한경우 getSuccessResult()를 이용하여 결과를 출력한다.
        return responseService.getSuccessResult(String.valueOf(id));
    }

    public User signin(UserDTO user) {
        Optional<User> loginUser = userJpaRepo.findByEmailAndProvider(user.getEmail(), user.getProvider());
        loginUser.orElseThrow(() -> new CUserNotFoundException());
        return loginUser.get();
    }

    public User signup(UserDTO user) {
        Optional<User> loginUser = userJpaRepo.findByEmailAndProvider(user.getEmail(), user.getProvider());
        if (!loginUser.isPresent()) {
            return userJpaRepo.save(user.toEntity());
        } else {
            throw new CUserAlreadyExistException();
        }
    }
}