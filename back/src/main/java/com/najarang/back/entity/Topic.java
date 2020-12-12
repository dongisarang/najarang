package com.najarang.back.entity;

import com.najarang.back.dto.TopicDTO;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@ToString
@Builder
@Table(name = "topic")
public class Topic{

    @Id // primaryKey임
    @GeneratedValue(strategy = GenerationType.IDENTITY) //  pk 필드를 auto_increment로 설정
    private Long id;

    @Column()
    private String name;

    public TopicDTO toDTO(){
        return new TopicDTO(this.id, this.name);
    }
}