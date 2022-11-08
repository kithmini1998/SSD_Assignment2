package com.ssd.backendapplication.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.security.MessageDigest;

@Component
@Slf4j
public class HashCodeHandler {

    public String encryptString(String value) {

        try {

            MessageDigest messageDigest = MessageDigest.getInstance("SHA-1");
            byte[] messageByte = messageDigest.digest(value.getBytes());
            BigInteger bigInteger = new BigInteger(1, messageByte);

            return bigInteger.toString(16);

        } catch (Exception exception) {
            log.info("error getting encrypt date {}", exception.getMessage());
        }
        return null;
    }
}
