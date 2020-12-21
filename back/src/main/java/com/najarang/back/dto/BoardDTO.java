package com.najarang.back.dto;

import com.najarang.back.entity.BaseTime;
import com.najarang.back.entity.Board;
import com.najarang.back.entity.Topic;
import com.najarang.back.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardDTO extends BaseTime {
    private Long id;
    private String title;
    private String content;
    private User user;
    private Topic topic;
    private Long likeCount;
    private Long hitCount;
    private Long topicId;

    @Builder
    public BoardDTO(Board board){
        this.id = board.getId();
        this.title = board.getTitle();
        this.content = board.getContent();
        this.user = board.getUser();
        this.topic = board.getTopic();
        this.likeCount = board.getLikeCount();
        this.hitCount = board.getHitCount();
    }

    public Board toEntity(){
        return Board.builder()
                .id(id)
                .title(title)
                .content(content)
                .user(user)
                .topic(topic)
                .likeCount(likeCount)
                .hitCount(hitCount)
                .build();
    }
}
