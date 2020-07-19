package com.najarang.back.controller;

import org.junit.Test;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// @RunWith
// 각각의 테스트 별로 객체가 생성되더라도 싱글톤(Singletone)의 ApplicationContext를 보장
// jUnit이 테스트를 진행하는 중에 ApplicationContext를 만들고 관리하는 작업을 진행
@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class HelloControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void helloworldString() throws Exception {
        mockMvc.perform(get("/helloworld/string"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType("text/plain;charset=UTF-8"))
                .andExpect(content().string("helloworld"));
    }

    @Test
    public void helloworldJson() throws Exception {
        mockMvc.perform(get("/helloworld/json"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$.message").value("helloworld"));
    }
}