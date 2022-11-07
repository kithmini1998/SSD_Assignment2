package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.OTP;
import com.ssd.backendapplication.model.User;

import java.util.Optional;

public interface OTPService {
    /***
     *
     * @param otp
     * @return otp
     */
    OTP saveOTP(OTP otp);

    /***
     *
     * @param id
     * @return OTP
     */
    Optional<OTP> getOTPById (String id);

    Optional<User> verifyOTP (String id, int otp);

}
