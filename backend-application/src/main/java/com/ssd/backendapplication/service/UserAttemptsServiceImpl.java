package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.UserAttempts;
import com.ssd.backendapplication.repository.UserAttemptsRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.crypto.Data;
import java.time.LocalDateTime;

@Slf4j
@Service
@AllArgsConstructor
public class UserAttemptsServiceImpl implements UserAttemptsService{

    private final UserAttemptsRepository userAttemptsRepository;
    @Override
    public void addNewUserAttempt(UserAttempts userAttempts) {
        userAttemptsRepository.save(userAttempts);
    }

    @Override
    public void updateUserAttempt(UserAttempts userAttempts) {
        //userAttemptsRepository.

    }

    @Override
    public void deleteUserAttempt(String userName) {
        UserAttempts ua = userAttemptsRepository.getUserAttemptByUserName(userName);
        if(ua != null){
            userAttemptsRepository.deleteById(ua.getId());
        }
    }

    @Override
    public UserAttempts findByUserName(String username) {
        return userAttemptsRepository.getUserAttemptByUserName(username);
    }
}
