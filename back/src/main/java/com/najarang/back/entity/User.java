package com.najarang.back.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user") // 'user' 테이블과 매핑
public class User extends BaseTime{
    @Id // primaryKey임
    @GeneratedValue(strategy = GenerationType.IDENTITY) //  pk 필드를 auto_increment로 설정
    private long id;
    @Column(name = "interested_topic")
    private String interestedTopic;
    @Column()
    private String nickname;
    @Column(name = "access_token")
    private String accessToken;
    @Column()
    private String email;
    @Column(name = "platform_type")
    private String platformType;
}
