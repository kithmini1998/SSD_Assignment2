package com.ssd.backendapplication.controller;

import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.service.UserServiceImpl;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("v1/user")
public class UserController {

    private final UserServiceImpl userServiceImpl;


    @PostMapping("/registration")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        log.info("received user request body {} ", user);
        return ResponseEntity.ok(this.userServiceImpl.addUser(user));
    }

    @GetMapping("/")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(this.userServiceImpl.getAllUsers());
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    public ResponseEntity<User> getUserById(@PathVariable int id) {
        return ResponseEntity.ok(this.userServiceImpl.getUserById(id));
    }

}
