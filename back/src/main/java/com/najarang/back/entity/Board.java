package com.najarang.back.entity;

import com.najarang.back.dto.BoardDTO;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@DynamicUpdate
@Getter
@ToString
@Builder
@Table(name = "board")
public class Board extends BaseTime{

    @Id // primaryKey임
    @GeneratedValue(strategy = GenerationType.IDENTITY) //  pk 필드를 auto_increment로 설정
    private Long id;

    @Column()
    private String title;
    @Column()
    private String content;
    @Column(name = "user_id")
    private Long userId;
    @Column(name = "topic_id")
    private Long topicId;
    @Column(name = "topic_name")
    private String topicName;
    @Column(name = "like_count")
    private Long likeCount;
    @Column(name = "hit_count")
    private Long hitCount;

    public BoardDTO toDTO(){
        return new BoardDTO(this.id, this.title, this.content, this.userId, this.topicId, this.topicName, this.likeCount, this.hitCount);
    }
}