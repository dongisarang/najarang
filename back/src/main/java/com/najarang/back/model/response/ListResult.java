package com.najarang.back.model.response;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ListResult<T> extends CommonResult {
    private List<T> list;
    private long totalPage;
    private long currPage;
    private long totalElements;
    private long limit;
}
