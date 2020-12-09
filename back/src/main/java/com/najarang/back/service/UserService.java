package com.najarang.back.service;

import com.najarang.back.dto.UserDTO;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import org.springframework.data.domain.Pageable;

public interface UserService {

    ListResult<User> getUsers(Pageable pageable);
    SingleResult<User> getUser(long id);
    SingleResult<User> save(UserDTO user);
    SingleResult<User> modify(UserDTO user);
    CommonResult delete(long id);
    User signin(UserDTO user);
    User signup(UserDTO user);
}