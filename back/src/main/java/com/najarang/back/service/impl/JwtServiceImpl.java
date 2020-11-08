package com.najarang.back.service.impl;

import com.najarang.back.advice.exception.CUnauthorizedException;
import com.najarang.back.advice.exception.CUserNotFoundException;
import com.najarang.back.service.JwtService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

// 참고 https://github.com/MartianLee/vue-springboot-service/blob/master/backend/src/main/java/com/greenhair/template/service/JwtServiceImpl.java
@Slf4j
@Service("jwtService")
public class JwtServiceImpl implements JwtService {
 
    private static final String SALT =  "luvookSecret";
     
    @Override
    public <T> String create(String key, T data, String subject){
		log.info("key: "+key);
		log.info("data: "+data);
		log.info("subject: "+subject);

		String jwt = Jwts.builder()
                         .setHeaderParam("typ", "JWT")
                         .setHeaderParam("regDate", System.currentTimeMillis())
                         .setSubject(subject)
                         .setExpiration(new Date(System.currentTimeMillis() + 86400 * 1000 * 2))
                         .claim(key, data)
                         .signWith(SignatureAlgorithm.HS256, this.generateKey())
                         .compact();
        log.info("jwt: "+jwt);
        return jwt;
    }

	private byte[] generateKey(){
		byte[] key = null;
		try {
			key = SALT.getBytes("UTF-8");
		} catch (UnsupportedEncodingException e) {
			if(log.isInfoEnabled()){
				e.printStackTrace();
			}else{
				log.error("Making JWT Key Error ::: {}", e.getMessage());
			}
		}

		return key;
	}

	@Override
	public Map<String, Object> get(String key) {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
		String jwt = request.getHeader("Authorization").split(" ")[1];
		Jws<Claims> claims = null;
		try {
			claims = Jwts.parser()
						 .setSigningKey(SALT.getBytes("UTF-8"))
						 .parseClaimsJws(jwt);
		} catch (Exception e) {
			if(log.isInfoEnabled()){
				e.printStackTrace();
			}else{
				log.error(e.getMessage());
			}
			throw new CUnauthorizedException();
		}
		@SuppressWarnings("unchecked")
        Map<String, Object> value = (LinkedHashMap<String, Object>)claims.getBody().get(key);
        System.out.println(value);
		return value;
	}

	@Override
	public boolean isUsable(String jwt) {
	// claim으로 변환도중 예외가 발생하면 유효하지 않은 토큰으로 판단하고, 예외를 핸들링 함
	// 1) ExpiredJwtException : JWT를 생성할 때 지정한 유효기간 초과할 때
	// 2) UnsupportedJwtException : 예상하는 형식과 일치하지 않는 특정 형식이나 구성의 JWT일 때
	// 3) MalformedJwtException : JWT가 올바르게 구성되지 않았을 때
	// 4) SignatureException :  JWT의 기존 서명을 확인하지 못했을 때
	// 5) IllegalArgumentException
		try{
			Jws<Claims> claims = Jwts.parser()
					  .setSigningKey(this.generateKey())
					  .parseClaimsJws(jwt);
			return true;

		}catch (Exception e) {

			if(log.isInfoEnabled()){
				e.printStackTrace();
			}else{
				log.error(e.getMessage());
			}
			throw new CUnauthorizedException();

			/*개발환경!!!
			 * return false;*/

		}
	}
}