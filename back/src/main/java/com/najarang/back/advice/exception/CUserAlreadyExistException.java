package com.najarang.back.advice.exception;

// C는 커스텀의 C
public class CUserAlreadyExistException extends RuntimeException {
    public CUserAlreadyExistException(String msg, Throwable t) {
        super(msg, t);
    }

    public CUserAlreadyExistException(String msg) {
        super(msg);
    }

    public CUserAlreadyExistException() {
        super();
    }
}
