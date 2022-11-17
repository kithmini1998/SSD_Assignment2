package com.ssd.backendapplication.controller;

import com.ssd.backendapplication.model.AuthRequestBody;
import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.service.OTPServiceImpl;
import com.ssd.backendapplication.service.UserServiceImpl;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("v1/user")
public class UserController {

    private final UserServiceImpl userServiceImpl;
    private final OTPServiceImpl otpService;


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
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return ResponseEntity.ok(this.userServiceImpl.getUserById(id));
    }

    @PostMapping("/auth")
    public ResponseEntity<String> authenticateUser(@RequestBody AuthRequestBody requestBody) {
        String res = this.userServiceImpl.authenticateUser(requestBody);
        if (res.equalsIgnoreCase("")) {
            return ResponseEntity.status(401).body("Unauthorized");
        }
        return ResponseEntity.ok(res);
    }

    @GetMapping("/auth/{id}/{otp}")
    public ResponseEntity<Object> verifyOTP(@PathVariable String id, @PathVariable int otp) {
        return ResponseEntity.ok(otpService.verifyOTP(id, otp));
    }

}
