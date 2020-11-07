package com.najarang.back.service;

import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    ListResult<User> findAllUser();
    SingleResult<User> findUserById(long id);
    SingleResult<User> save(User user);
    SingleResult<User> modify(User user);
    CommonResult delete(long id);
}