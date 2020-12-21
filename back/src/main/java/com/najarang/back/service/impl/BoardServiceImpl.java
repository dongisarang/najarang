package com.najarang.back.service.impl;

import com.najarang.back.advice.exception.CBoardNotFoundException;
import com.najarang.back.advice.exception.CTopicNotFoundException;
import com.najarang.back.advice.exception.CUserNotFoundException;
import com.najarang.back.dto.BoardDTO;
import com.najarang.back.entity.Board;
import com.najarang.back.entity.Topic;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import com.najarang.back.repo.BoardJpaRepo;
import com.najarang.back.repo.TopicJpaRepo;
import com.najarang.back.service.ResponseService;
import com.najarang.back.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service("boardService")
@Slf4j
public class BoardServiceImpl implements BoardService {

    private final BoardJpaRepo boardJpaRepo;
    private final TopicJpaRepo topicJpaRepo;
    private final ResponseService responseService;

    public ListResult<Board> getBoards(Pageable pageable) {
        return responseService.getListResult(boardJpaRepo.findAll(pageable));
    }

    public SingleResult<Board> getBoard(long id) {
        return responseService.getSingleResult(boardJpaRepo.findById(id).orElseThrow(CBoardNotFoundException::new));
    }

    public SingleResult<Board> save(BoardDTO board) {
        Long topicId = board.getTopicId();
        Topic topic = topicJpaRepo.findById(topicId).orElseThrow(CTopicNotFoundException::new);
        board.setTopic(topic);
        return responseService.getSingleResult(boardJpaRepo.save(board.toEntity()));
    }

    public SingleResult<Board> modify(BoardDTO board) {
        long boardId = board.getId();
        Optional<Board> newBoard = boardJpaRepo.findById(boardId);
        BoardDTO boardDto = newBoard.get().toDTO();
        if (board.getTitle() != null) boardDto.setTitle(board.getTitle());
        if (board.getContent() != null) boardDto.setContent(board.getContent());
        if (board.getTopicId() != null) boardDto.setTopicId(board.getTopicId());
        return responseService.getSingleResult(boardJpaRepo.save(boardDto.toEntity()));
    }

    public CommonResult delete(long id) {
        boardJpaRepo.deleteById(id);
        return responseService.getSuccessResult();
    }
}