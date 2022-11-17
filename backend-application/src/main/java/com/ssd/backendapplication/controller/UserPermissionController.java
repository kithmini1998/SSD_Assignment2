package com.ssd.backendapplication.controller;


import com.ssd.backendapplication.model.UserPermission;
import com.ssd.backendapplication.service.UserPermissionServiceImpl;
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
@RequestMapping("v1/user-permission")
public class UserPermissionController {

    private final UserPermissionServiceImpl userPermissionService;

    @PostMapping("/add")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<UserPermission> addUser(@RequestBody UserPermission userPermission) {
        log.info("received user role request body {} ", userPermission);
        return ResponseEntity.ok(this.userPermissionService.adduserPermission(userPermission));
    }
}
