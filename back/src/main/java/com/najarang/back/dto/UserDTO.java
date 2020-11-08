package com.najarang.back.dto;

import com.najarang.back.entity.BaseTime;
import com.najarang.back.entity.User;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO extends BaseTime {
    private Long id;
    private String interestedTopic;
    private String nickname;
    private String accessToken;
    private String email;
    private String provider;
    private String role;

    @Builder
    public UserDTO(User user){
        this.id = user.getId();
        this.interestedTopic = user.getInterestedTopic();
        this.nickname = user.getNickname();
        this.accessToken = user.getAccessToken();
        this.email = user.getEmail();
        this.provider = user.getProvider();
        this.role = user.getRole();
    }

    public User toEntity(){
        return User.builder()
                .id(id)
                .interestedTopic(interestedTopic)
                .nickname(nickname)
                .accessToken(accessToken)
                .email(email)
                .provider(provider)
                .role(role)
                .build();
    }
}

