package com.najarang.back.controller.v1;

import com.najarang.back.dto.TopicDTO;
import com.najarang.back.entity.Topic;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import com.najarang.back.service.TopicService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@Slf4j
public class TopicController {

    private final TopicService topicService;

    @GetMapping(value = "/topics")
    public Page<Topic> findAllTopic(final Pageable pageable) {
        return topicService.list(pageable);
    }

    @PostMapping(value = "/topic")
    public SingleResult<Topic> save(@RequestBody TopicDTO topic) {
        return topicService.save(topic);
    }

    @PutMapping(value = "/topic")
    public SingleResult<Topic> modify(@RequestBody TopicDTO topic) {
        return topicService.modify(topic);
    }

    @DeleteMapping(value = "/topic/{id}")
    public CommonResult delete(@PathVariable long id) {
        return topicService.delete(id);
    }
}
