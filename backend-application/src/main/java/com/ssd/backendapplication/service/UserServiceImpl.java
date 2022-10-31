package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.model.UserPermission;
import com.ssd.backendapplication.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public boolean addUser(User user) {
        return userRepository.addUser(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.getAllUsers();
    }

    @Override
    public User getUserById(int id) {
        User user = userRepository.getUserById(id);
        List<UserPermission> permissions = userRepository.getAllUserPermissions(user.getUserRole().getId());
        user.getUserRole().setUserPermissions(permissions);
        return user;
    }
}
