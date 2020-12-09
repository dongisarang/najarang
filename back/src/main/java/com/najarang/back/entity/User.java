package com.najarang.back.entity;

import com.najarang.back.dto.UserDTO;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@ToString
@Builder
@DynamicUpdate
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

    public UserDTO toDTO(){
        return new UserDTO(this.id, this.interestedTopic, this.nickname, this.accessToken, this.email, this.provider, this.role);
    }
}