package com.najarang.back.advice.exception;

// C는 커스텀의 C
public class CBoardNotFoundException extends RuntimeException {
    public CBoardNotFoundException(String msg, Throwable t) {
        super(msg, t);
    }

    public CBoardNotFoundException(String msg) {
        super(msg);
    }

    public CBoardNotFoundException() {
        super();
    }
}
