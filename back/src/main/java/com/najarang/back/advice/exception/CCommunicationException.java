package com.najarang.back.advice.exception;

public class CCommunicationException extends RuntimeException {
    public CCommunicationException(String msg, Throwable t) {
        super(msg, t);
    }
    public CCommunicationException(String msg) {
        super(msg);
    }
    public CCommunicationException() {
        super();
    }
}