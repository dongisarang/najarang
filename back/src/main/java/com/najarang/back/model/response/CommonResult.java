package com.najarang.back.model.response;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class CommonResult {

    @ApiModelProperty(value = "응답 성공여부 : true/false")
    private boolean result;

    @ApiModelProperty(value = "응답 코드 번호 : >= 0 정상, < 0 비정상")
    private int code;

    @ApiModelProperty(value = "응답 메시지")
    private String msg;
}