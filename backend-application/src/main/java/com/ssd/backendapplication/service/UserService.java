package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.User;

import java.util.List;

public interface UserService {

    User addUser(User user);

    List<User> getAllUsers();

    User getUserById(int id);
}
