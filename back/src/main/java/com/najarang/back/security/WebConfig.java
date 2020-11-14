package com.najarang.back.security;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    private static final String[] EXCLUDE_PATHS = {
            "/signin",
            "/signup",
            "/helloworld/**",
            "/error/**"
    };

    private final AuthInterceptor AuthInterceptor;

    public WebConfig(com.najarang.back.security.AuthInterceptor authInterceptor) {
        AuthInterceptor = authInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(AuthInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns(EXCLUDE_PATHS);
    }
}