package com.najarang.back.repo;

import com.najarang.back.entity.User2;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserJpaRepo2 extends JpaRepository<User2, Long> {
    Optional<User2> findByUid(String email);
    Optional<User2> findByUidAndProvider(String uid, String provider);
}