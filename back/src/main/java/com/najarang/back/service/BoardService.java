package com.najarang.back.service;

import com.najarang.back.dto.BoardDTO;
import com.najarang.back.entity.Board;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import org.springframework.data.domain.Pageable;

public interface BoardService {

    SingleResult<Board> getBoard(long id);
    ListResult<Board> getBoards(Pageable pageable);
    SingleResult<Board> save(BoardDTO board);
    SingleResult<Board> modify(BoardDTO board);
    CommonResult delete(long id);
}