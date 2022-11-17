package com.ssd.backendapplication.util;

import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.security.MessageDigest;

@Component
public class HashCodeHandler {

    public String encryptString(String value) {

        try {

            //sha-256
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-1");
            byte[] messageByte = messageDigest.digest(value.getBytes());
            BigInteger bigInteger = new BigInteger(1, messageByte);

            return bigInteger.toString(16);

        } catch (Exception exception) {
            throw new RuntimeException("error getting encrypt date ===>".concat(exception.getMessage()));
        }
    }
}
