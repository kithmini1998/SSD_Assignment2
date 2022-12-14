package com.ssd.backendapplication.auth.jwt;

import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.crypto.SecretKey;

@Configuration
@AllArgsConstructor
public class Configurations {


    private final Constant constant;

    @Bean
    public SecretKey getSecretKeyForSigning(){
        return Keys.hmacShaKeyFor(constant.getSecretKey().getBytes());
    }
}
