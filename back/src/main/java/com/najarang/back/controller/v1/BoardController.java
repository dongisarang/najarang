package com.najarang.back.controller.v1;

import com.najarang.back.dto.BoardDTO;
import com.najarang.back.dto.TopicDTO;
import com.najarang.back.entity.Board;
import com.najarang.back.entity.User;
import com.najarang.back.model.response.CommonResult;
import com.najarang.back.model.response.ListResult;
import com.najarang.back.model.response.SingleResult;
import com.najarang.back.security.CustomUserDetails;
import com.najarang.back.service.BoardService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@Slf4j
public class BoardController {

    private final BoardService boardService;

    @GetMapping(value = "/boards")
    public ListResult<Board> findAllBoard(final Pageable pageable) {
        return boardService.getBoards(pageable);
    }

    @GetMapping(value = "/board/{id}")
    public SingleResult<Board> findBoardById(@PathVariable long id) {
        return boardService.getBoard(id);
    }

    @PostMapping(value = "/board")
    public SingleResult<Board> save(@AuthenticationPrincipal CustomUserDetails customUserDetail, @RequestBody BoardDTO board) {
        board.setUser(customUserDetail.getUser());
        return boardService.save(board);
    }

    @PutMapping(value = "/board/{id}")
    public SingleResult<Board> modify(@AuthenticationPrincipal CustomUserDetails customUserDetail, @RequestBody BoardDTO board, @PathVariable long id) {

        board.setId(id);
        board.setUser(customUserDetail.getUser());

        return boardService.modify(board);
    }

    @DeleteMapping(value = "/board/{id}")
    public CommonResult delete(@PathVariable long id) {
        return boardService.delete(id);
    }
}
