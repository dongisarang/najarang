-- CREATE database 
DROP DATABASE IF EXISTS jarangdb; 
CREATE DATABASE jarangdb;

-- 유저 테이블
CREATE TABLE jarangdb.user
(
    `id`                INT             NOT NULL    AUTO_INCREMENT COMMENT '유저식별번호', 
    `nickname`          VARCHAR(50)     NULL        COMMENT '닉네임', 
    `interested_topic`  TEXT            NULL        COMMENT '관심분야', 
    `access_token`      VARCHAR(255)    NOT NULL    COMMENT '엑세스 토큰', 
    `email`             VARCHAR(255)    NOT NULL    COMMENT '이메일(유저의 로그인 아이디)', 
    `platform_type`     VARCHAR(50)     NULL        COMMENT '이메일 플랫폼 주소', 
    `created`           DATETIME        NULL        COMMENT '생성일자',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 토픽 테이블
CREATE TABLE jarangdb.topic
(
    `id`    INT            NOT NULL    AUTO_INCREMENT COMMENT '토픽번호', 
    `name`  VARCHAR(50)    NULL        COMMENT '토픽이름', 
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 게시물 테이블
CREATE TABLE jarangdb.board
(
    `id`          INT             NOT NULL    AUTO_INCREMENT COMMENT 'id', 
    `title`       VARCHAR(255)    NULL        COMMENT '제목', 
    `content`     TEXT            NULL        COMMENT '내용', 
    `created`     DATETIME        NULL        COMMENT '작성일자', 
    `deleted`     DATETIME        NULL        COMMENT '삭제일자', 
    `user_id`     INT             NULL        COMMENT '유저 식별 번호', 
    `topic_id`    INT             NULL        COMMENT '토픽 번호', 
    `like_count`  INT             NULL        COMMENT '좋아요 수', 
    `hit_count`   INT             NULL        COMMENT '조회수', 
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 댓글 테이블
CREATE TABLE jarangdb.comment
(
    `id`         INT             NOT NULL    AUTO_INCREMENT COMMENT 'id', 
    `content`    VARCHAR(255)    NULL        COMMENT '댓글 내용', 
    `board_id`   INT             NULL        COMMENT '게시물 번호', 
    `user_id`    INT             NULL        COMMENT '유저 식별 번호', 
    `parent_id`  INT             NULL        COMMENT '상위 댓글 번호', 
    `created`    DATETIME        NULL        COMMENT '작성 일자', 
    `deleted`    DATETIME        NULL        COMMENT '삭제 일자', 
    `user_name`  VARCHAR(50)     NULL        COMMENT '유저 이름', 
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 좋아요 테이블
CREATE TABLE jarangdb.like_board
(
    `id`        INT         NOT NULL    AUTO_INCREMENT COMMENT 'id', 
    `board_id`  INT         NULL        COMMENT '게시물 번호', 
    `user_id`   INT         NULL        COMMENT '유저 식별 번호', 
    `created`   DATETIME    NULL        COMMENT '좋아요한 날짜', 
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

-- qna 테이블
CREATE TABLE jarangdb.qna
(
    `id`         INT            NOT NULL    AUTO_INCREMENT COMMENT 'id', 
    `user_id`    INT            NULL        COMMENT '사용자 식별 번호', 
    `user_name`  VARCHAR(50)    NULL        COMMENT '유저 이름', 
    `content`    TEXT           NULL        COMMENT '문의 내용', 
    `created`    DATETIME       NULL        COMMENT '생성일자', 
    `completed`  DATETIME       NULL        COMMENT '처리완료 날짜', 
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 신고 테이블
CREATE TABLE jarangdb.report
(
    `id`             INT            NOT NULL    AUTO_INCREMENT COMMENT 'id', 
    `reporter_id`    INT            NULL        COMMENT '신고자 유저번호', 
    `reporter_name`  VARCHAR(50)    NULL        COMMENT '신고자 이름', 
    `report_type`    VARCHAR(50)    NULL        COMMENT '신고유형', 
    `comment`        VARCHAR(50)    NULL        COMMENT '신고내용',
    `created`        DATETIME       NULL        COMMENT '생성일자', 
    `completed`      DATETIME       NULL        COMMENT '신고 처리완료 날짜', 
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;



