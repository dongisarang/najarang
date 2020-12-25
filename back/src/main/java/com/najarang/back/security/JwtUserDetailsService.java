package com.najarang.back.security;

import com.najarang.back.advice.exception.CUserNotFoundException;
import com.najarang.back.entity.User;
import com.najarang.back.repo.UserJpaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    UserJpaRepo userJpaRepo;

    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        String[] userInfo = username.split("provider:");

        Optional<User> user = userJpaRepo.findByEmailAndProvider(userInfo[0], userInfo[1]);

        if (user.isPresent()) {
                User loginUser = user.get();
                CustomUserDetails userDetail = new CustomUserDetails();
                userDetail.setID(loginUser.getId().toString());
                userDetail.setEMAIL(loginUser.getEmail());
                userDetail.setPROVIDER(loginUser.getProvider());
                userDetail.setUser(loginUser);
                return userDetail;
        } else {
            throw new CUserNotFoundException();
        }
    }
}