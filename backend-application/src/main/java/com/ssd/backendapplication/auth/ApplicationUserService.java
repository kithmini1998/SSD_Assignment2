package com.ssd.backendapplication.auth;


import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.model.UserPermission;
import com.ssd.backendapplication.model.UserRole;
import com.ssd.backendapplication.repository.UserRepository;
import com.ssd.backendapplication.repository.UserRoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ApplicationUserService implements UserDetailsService {


    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final UserRoleRepository userRoleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = this.userRepository.getUserByUserName(username);
        Optional<UserRole> userRole = this.userRoleRepository.findById(user.getRoleId());
        if (userRole.isPresent()) {
            user.setUserRole(userRole.get());
            List<SimpleGrantedAuthority> simpleGrantedAuthorities = getGrantedAuthorities(userRole.get().getUserPermissions(), user.getUserRole().getRoleName());
            return new ApplicationUser(
                    user.getId(),
                    user.getUserName(),
                    passwordEncoder.encode(user.getPassword()),
                    simpleGrantedAuthorities,
                    true,
                    true,
                    true,
                    true
            );
        } else {
            user.setUserRole(null);
        }
        return null;
    }

    public List<SimpleGrantedAuthority> getGrantedAuthorities(List<UserPermission> getPermissions, String role) {

        List<SimpleGrantedAuthority> permissions = getPermissions.stream()

                .map(permission -> new SimpleGrantedAuthority(permission.getPermissionName()))

                .collect(Collectors.toList());

        permissions.add(new SimpleGrantedAuthority("ROLE_" + role));

        return permissions;
    }
}





