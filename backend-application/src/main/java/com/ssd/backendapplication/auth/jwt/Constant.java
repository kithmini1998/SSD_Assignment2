package com.ssd.backendapplication.auth.jwt;

import com.google.common.net.HttpHeaders;
import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Data
@Component
public class Constant {

    @Value("${application.jwt.secretKey}")
    private String secretKey;
    @Value("${application.jwt.tokenPrefix}")
    private String tokenPrefix;
    @Value("${application.jwt.tokenExpirationAfterDays}")
    private Integer tokenExpirationAfterDays;
    @Value("${application.encrypt.secretKey}")
    private String encryptSecretKey;


    public String getAuthorizationHeader() {
        return HttpHeaders.AUTHORIZATION;
    }
}
