package com.najarang.back.repo;

import com.najarang.back.entity.Topic;
import com.najarang.back.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TopicJpaRepo extends JpaRepository<Topic, Long> {
    Optional<Topic> findById(Long id);
}
