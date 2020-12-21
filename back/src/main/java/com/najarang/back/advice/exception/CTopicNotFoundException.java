package com.najarang.back.advice.exception;

// C는 커스텀의 C
public class CTopicNotFoundException extends RuntimeException {
    public CTopicNotFoundException(String msg, Throwable t) {
        super(msg, t);
    }

    public CTopicNotFoundException(String msg) {
        super(msg);
    }

    public CTopicNotFoundException() {
        super();
    }
}
