package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.UserPermission;
import com.ssd.backendapplication.repository.UserPermissionRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class UserPermissionServiceImpl implements UserPermissionService{

    private final UserPermissionRepository userPermissionRepository;
    @Override
    public UserPermission adduserPermission(UserPermission userPermission) {
        return userPermissionRepository.save(userPermission);
    }

    @Override
    public Optional<UserPermission> getUserPermissionById(String id) {
        return userPermissionRepository.findById(id);
    }
}
