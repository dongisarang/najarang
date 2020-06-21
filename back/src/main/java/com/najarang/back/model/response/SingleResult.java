package com.najarang.back.model.response;

import lombok.Data;

@Data
public class SingleResult<T> extends CommonResult {
    private T data;
}