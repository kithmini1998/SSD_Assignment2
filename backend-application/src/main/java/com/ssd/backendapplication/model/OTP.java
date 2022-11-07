package com.ssd.backendapplication.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
public class OTP {
    @Id
    private String id;
    private String userId;
    private int otp;

    public OTP(String userId, int otp) {
        this.userId = userId;
        this.otp = otp;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getOtp() {
        return otp;
    }

    public void setOtp(int otp) {
        this.otp = otp;
    }
}
