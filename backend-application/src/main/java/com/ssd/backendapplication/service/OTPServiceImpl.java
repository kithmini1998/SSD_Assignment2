package com.ssd.backendapplication.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.ssd.backendapplication.auth.jwt.UsernameAndPasswordAuthenticationRequest;
import com.ssd.backendapplication.model.OTP;
import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.repository.OTPRepository;
import com.ssd.backendapplication.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
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
                Object object = getAccessToken(user.get());
                log.info("user access data {}", object);
                return object;
            }
        }
        return Optional.empty();
    }

    public Object getAccessToken(User user) {

        String url = "https://localhost:443/api/login";
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        UsernameAndPasswordAuthenticationRequest usernameAndPasswordAuthenticationRequest = new UsernameAndPasswordAuthenticationRequest();
        usernameAndPasswordAuthenticationRequest.setPassword(user.getPassword());
        usernameAndPasswordAuthenticationRequest.setUsername(user.getUserName());

        HttpEntity<UsernameAndPasswordAuthenticationRequest> requestEntity = new HttpEntity<>(usernameAndPasswordAuthenticationRequest, httpHeaders);
        ResponseEntity<JsonNode> jsonNode = restTemplate.exchange(url, HttpMethod.POST, requestEntity, JsonNode.class);
        return jsonNode.getBody();
    }
}
