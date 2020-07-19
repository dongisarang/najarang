package com.najarang.back.controller.v1;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// NOTE
// (mrsl,name,uid,password) = (5, hmmmm, hmmmm@naver.com, $2a$10$rQtWw7EY/qiDOgCq68zh/upz4SzCg3RkffxAOdsrTS2CiQhLc.2t2)
// db에 위 데이터 있는 상태에서 Sign,User Controller 테스트함

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class UserController2Test {

    @Autowired
    private MockMvc mockMvc;

    private String token;

    @Before
    public void setUp() throws Exception {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("id", "hmmmm@naver.com");
        params.add("password", "1234");
        MvcResult result = mockMvc.perform(post("/v1/signin").params(params))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").value(true))
                .andExpect(jsonPath("$.code").value(0))
                .andExpect(jsonPath("$.msg").exists())
                .andExpect(jsonPath("$.data").exists())
                .andReturn();

        String resultString = result.getResponse().getContentAsString();
        JacksonJsonParser jsonParser = new JacksonJsonParser();
        token = jsonParser.parseMap(resultString).get("data").toString();
    }

    @Test
    public void invalidToken() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .get("/v1/users")
                .header("X-AUTH-TOKEN", "XXXXXXXXXX"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(forwardedUrl("/exception/entrypoint"));
    }

    // 유저에게 리소스의 사용 권한의 있는지의 상태에 따른 테스트가 필요 > ex. @WithMockUser통해 가상의 Mock 유저 대입
    @Test
    @WithMockUser(username = "mockUser", roles = {"ADMIN"})
    public void accessdenied() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .get("/v1/users"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(forwardedUrl("/exception/accessdenied"));
    }

    @Test
    public void findAllUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .get("/v1/users")
                .header("X-AUTH-TOKEN", token))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").value(true))
                .andExpect(jsonPath("$.list").exists());
    }

    @Test
    public void findUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .get("/v1/user")
                .header("X-AUTH-TOKEN", token))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").value(true))
                .andExpect(jsonPath("$.data").exists());
    }

    @Test
    public void modify() throws Exception {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("msrl", "5");
        params.add("name", "행복전도사");
        mockMvc.perform(MockMvcRequestBuilders
                .put("/v1/user")
                .header("X-AUTH-TOKEN", token)
                .params(params))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").value(true));
    }

    @Test
    public void delete() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .delete("/v1/user/5")
                .header("X-AUTH-TOKEN", token))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").value(true));
    }
}