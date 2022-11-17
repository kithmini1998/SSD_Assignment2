package com.ssd.backendapplication.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.ssd.backendapplication.auth.jwt.UsernameAndPasswordAuthenticationRequest;
import com.ssd.backendapplication.model.OTP;
import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.repository.OTPRepository;
import com.ssd.backendapplication.repository.UserAttemptsRepository;
import com.ssd.backendapplication.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Slf4j
@Service
@AllArgsConstructor
public class OTPServiceImpl implements OTPService {

    private final OTPRepository otpRepository;
    private final UserRepository userRepository;
    private final RestTemplate restTemplate;

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
    public Object verifyOTP(String id, int otp) {
        Optional<OTP> otpObj = otpRepository.findById(id);
        if (otpObj.isPresent()) {
            Optional<User> user = userRepository.findById(otpObj.get().getUserId());
            if (otpObj.get().getOtp() == otp && user.isPresent()) {
                otpRepository.deleteById(id);
                userAttemptsRepository.deleteById(user.get().getUserName());
                return user.get();
            }
        }
        return null;
    }

    public Object getAccessToken(User user) {

        String url = "https://localhost:433/api/login";
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        UsernameAndPasswordAuthenticationRequest usernameAndPasswordAuthenticationRequest = new UsernameAndPasswordAuthenticationRequest();
        usernameAndPasswordAuthenticationRequest.setPassword(user.getPassword());
        usernameAndPasswordAuthenticationRequest.setUsername(user.getUserName());

        HttpEntity<UsernameAndPasswordAuthenticationRequest> requestEntity = new HttpEntity<>(usernameAndPasswordAuthenticationRequest, httpHeaders);
        try {
            ResponseEntity<JsonNode> jsonNode = restTemplate.exchange(url, HttpMethod.POST, requestEntity, JsonNode.class);
            log.info("token get by otp {}", jsonNode.getBody());
            return jsonNode.getBody();
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return null;
    }
}
