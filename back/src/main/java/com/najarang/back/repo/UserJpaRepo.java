package com.najarang.back.repo;

import com.najarang.back.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserJpaRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmailAndProvider(String email, String provider);
}