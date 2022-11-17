package com.ssd.backendapplication.controller;

import com.ssd.backendapplication.model.UserRole;
import com.ssd.backendapplication.service.UserRoleServiceImpl;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("v1/user-role")
public class UserRoleController {

    private final UserRoleServiceImpl userRoleService;

    @PostMapping("/add")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<UserRole> addUser(@RequestBody UserRole userRole) {
        log.info("received user role request body {} ", userRole);
        return ResponseEntity.ok(this.userRoleService.addUserRole(userRole));
    }
}
