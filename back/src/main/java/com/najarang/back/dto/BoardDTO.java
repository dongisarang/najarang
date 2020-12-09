package com.najarang.back.dto;

import com.najarang.back.entity.BaseTime;
import com.najarang.back.entity.Board;
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
    private Long userId;
    private Long topicId;
    private String topicName;
    private Long likeCount;
    private Long hitCount;

    @Builder
    public BoardDTO(Board board){
        this.id = board.getId();
        this.title = board.getTitle();
        this.content = board.getContent();
        this.userId = board.getUserId();
        this.topicId = board.getTopicId();
        this.topicName = board.getTopicName();
        this.likeCount = board.getLikeCount();
        this.hitCount = board.getHitCount();
    }

    public Board toEntity(){
        return Board.builder()
                .id(id)
                .title(title)
                .content(content)
                .userId(userId)
                .topicId(topicId)
                .topicName(topicName)
                .likeCount(likeCount)
                .hitCount(hitCount)
                .build();
    }
}
