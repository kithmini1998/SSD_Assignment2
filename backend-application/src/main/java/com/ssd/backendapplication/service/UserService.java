package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.AuthRequestBody;
import com.ssd.backendapplication.model.User;

import java.util.List;
public interface UserService {

    User addUser(User user);
    List<User> getAllUsers();
    String authenticateUser(AuthRequestBody obj);
    User getUserById(String id);
}
