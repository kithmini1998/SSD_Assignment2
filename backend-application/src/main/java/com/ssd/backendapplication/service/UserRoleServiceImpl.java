package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.UserRole;
import com.ssd.backendapplication.repository.UserRoleRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class UserRoleServiceImpl implements UserRoleService{

    private final UserRoleRepository userRoleRepository;

    @Override
    public UserRole addUserRole(UserRole userRole) {
        return this.userRoleRepository.save(userRole);
    }

    @Override
    public Optional<UserRole> getUserRoleById(String id) {
        return this.userRoleRepository.findById(id);
    }
}
