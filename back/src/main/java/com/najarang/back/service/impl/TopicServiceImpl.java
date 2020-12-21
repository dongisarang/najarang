package com.najarang.back.service.impl;

import com.najarang.back.dto.TopicDTO;
import com.najarang.back.entity.Topic;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import com.najarang.back.repo.TopicJpaRepo;
import com.najarang.back.service.ResponseService;
import com.najarang.back.service.TopicService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service("topicService")
@Slf4j
public class TopicServiceImpl implements TopicService {

    private final TopicJpaRepo topicJpaRepo;
    private final ResponseService responseService;

    public ListResult<Topic> list(Pageable pageable) {
        return responseService.getListResult(topicJpaRepo.findAll(pageable));
    }

    public SingleResult<Topic> save(TopicDTO topic) {
        return responseService.getSingleResult(topicJpaRepo.save(topic.toEntity()));
    }

    public SingleResult<Topic> modify(TopicDTO topic) {
        long topicId = topic.getId();
        Optional<Topic> newTopic = topicJpaRepo.findById(topicId);
        TopicDTO topicDto = newTopic.get().toDTO();
        topicDto.setName(topic.getName());
        return responseService.getSingleResult(topicJpaRepo.save(topicDto.toEntity()));
    }

    public CommonResult delete(long id) {
        topicJpaRepo.deleteById(id);
        return responseService.getSuccessResult();
    }
}