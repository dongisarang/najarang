package com.najarang.back.repo;

import com.najarang.back.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicJpaRepo extends JpaRepository<Topic, Long> {
}
