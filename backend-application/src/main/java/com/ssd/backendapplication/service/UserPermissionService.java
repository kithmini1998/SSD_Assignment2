package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.UserPermission;

import java.util.Optional;

public interface UserPermissionService {

    UserPermission adduserPermission(UserPermission userPermission);

    Optional<UserPermission> getUserPermissionById(String id);
}
