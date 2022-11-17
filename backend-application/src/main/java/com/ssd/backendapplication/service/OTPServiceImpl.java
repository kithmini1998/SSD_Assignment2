package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.OTP;
import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.repository.OTPRepository;
import com.ssd.backendapplication.repository.UserAttemptsRepository;
import com.ssd.backendapplication.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@AllArgsConstructor
public class OTPServiceImpl implements OTPService{

    private final OTPRepository otpRepository;
    private final UserRepository userRepository;

    private final UserAttemptsRepository userAttemptsRepository;

    /***
     *
     * @param otp
     * @return OTP
     * Name saveOTP
     */
    @Override
    public OTP saveOTP(OTP otp) {
        return otpRepository.save(otp);
    }

    /***
     *
     * @param id
     * @return Optional<OTP>
     * @Name getOTPById
     */
    @Override
    public Optional<OTP> getOTPById(String id) {
        return otpRepository.findById(id);
    }

    @Override
    public Optional<User> verifyOTP(String id, int otp) {
        Optional<OTP> otpObj = otpRepository.findById(id);
        if(otpObj != null){
            Optional<User> user = userRepository.findById(otpObj.get().getUserId());
            if(otpObj.get().getOtp() == otp && user != null){
                otpRepository.deleteById(id);
                userAttemptsRepository.deleteById(user.get().getUserName());
                return user;
            }
        }
        return null;
    }
}
