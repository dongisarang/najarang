package com.najarang.back.repo;

import com.najarang.back.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpaRepo extends JpaRepository<User, Long> {
    User findByEmailAndProvider(String email, String provider);
}
