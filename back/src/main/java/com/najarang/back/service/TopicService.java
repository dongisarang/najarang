package com.najarang.back.service;

import com.najarang.back.dto.TopicDTO;
import com.najarang.back.entity.Topic;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import org.springframework.data.domain.Pageable;

public interface TopicService {

    ListResult<Topic> list(Pageable pageable);
    SingleResult<Topic> save(TopicDTO topic);
    SingleResult<Topic> modify(TopicDTO topic);
    CommonResult delete(long id);
}