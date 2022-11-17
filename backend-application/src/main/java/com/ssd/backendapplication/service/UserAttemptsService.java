package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.UserAttempts;

import javax.xml.crypto.Data;
import java.time.LocalDateTime;

public interface UserAttemptsService {
    void addNewUserAttempt(UserAttempts userAttempts);
    void updateUserAttempt(UserAttempts userAttempts);
    void deleteUserAttempt(String userName);
    UserAttempts findByUserName(String username);
}
