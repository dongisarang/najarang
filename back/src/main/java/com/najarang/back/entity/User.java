package com.najarang.back.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user") // 'user' 테이블과 매핑
public class User extends BaseTime{
    @Id // primaryKey임
    @GeneratedValue(strategy = GenerationType.IDENTITY) //  pk 필드를 auto_increment로 설정
    private Long id;
    @Column(name = "interested_topic")
    private String interestedTopic;
    @Column()
    private String nickname;
    @Column(name = "access_token")
    private String accessToken;
    @Column()
    private String email;
    @Column()
    private String provider;
    @Column()
    private String role;
}
