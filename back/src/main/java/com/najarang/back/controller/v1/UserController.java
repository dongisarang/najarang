package com.najarang.back.controller.v1;

import com.najarang.back.entity.User;
import com.najarang.back.repo.UserJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class UserController {

    private final UserJpaRepo userJpaRepo;

    @GetMapping(value = "/user")
    public List<User> findAllUser() {
        return userJpaRepo.findAll();
    }

    @PostMapping(value = "/user")
    public User save() {
        User user = User.builder()
                .nickname("testname")
                .interestedTopic("")
                .email("test@test.com")
                .build();
        return userJpaRepo.save(user);
    }
}