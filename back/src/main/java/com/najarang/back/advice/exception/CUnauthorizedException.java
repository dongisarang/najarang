package com.najarang.back.advice.exception;

// C는 커스텀의 C
public class CUnauthorizedException extends RuntimeException {
    public CUnauthorizedException(String msg, Throwable t) {
        super(msg, t);
    }

    public CUnauthorizedException(String msg) {
        super(msg);
    }

    public CUnauthorizedException() {
        super();
    }
}
