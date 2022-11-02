package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.UserRole;

import java.util.Optional;

public interface UserRoleService {

    UserRole addUserRole(UserRole userRole);

    Optional<UserRole> getUserRoleById(String id);
}
