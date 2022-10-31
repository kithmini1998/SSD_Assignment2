package com.ssd.backendapplication.repository;

import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.model.UserPermission;
import com.ssd.backendapplication.repository.mapper.UserPermissionMapper;
import com.ssd.backendapplication.repository.mapper.UserRowMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Slf4j
public class UserRepository {


    @Qualifier("system-named-param-jdbc")
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public UserRepository(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public boolean addUser(User user) {

        try {

            Map<String, Object> param = new HashMap<>();
            param.put("name", user.getName());
            param.put("userName", user.getUserName());
            param.put("password", user.getPassword());
            param.put("email", user.getEmail());
            param.put("roleId", user.getUserRole().getId());
            param.put("occupation", user.getOccupation());
            param.put("contact", user.getContact());

            String query = "INSERT INTO `USER` (`id`,`name`, `user_name`, `password`,`email`,`role_id`,`occupation`,`contact`)" +
                    " VALUES (NULL,:name, :userName,:password,:email,:roleId,:occupation,:contact )";

            int result = namedParameterJdbcTemplate.update(query, param);
            if (result == 1) {
                log.info("User registration Successful {} ", user);
                return true;
            } else {
                return false;
            }

        } catch (Exception e) {
            log.info("Error in user registration {} ", e.getMessage());
            throw new RuntimeException("Error getting user insert ==> " + e.getMessage());

        }

    }

    public List<User> getAllUsers() {
        String query = "SELECT * FROM user u JOIN user_role ur ON u.role_id = ur.role_id\n";
        try {
            List<User> user = namedParameterJdbcTemplate.query(query, new UserRowMapper());
            return user;
        } catch (Exception e) {
            throw new RuntimeException("error getting reading users ==> " + e.getMessage());

        }
    }

    public List<UserPermission> getAllUserPermissions(int id) {
        String query = "SELECT * FROM role_permission r JOIN user_permission up ON rp.user_permission_id = up.permission_id WHERE user_role_id =:id";
        return namedParameterJdbcTemplate.query(query, Collections.singletonMap("id", id), new UserPermissionMapper());

    }

    public User getUserById(int id) {
        String query = "SELECT * FROM user u JOIN user_role ur ON u.role_id = ur.role_id WHERE  u.id =:id";
        try {
            return namedParameterJdbcTemplate.queryForObject(query, Collections.singletonMap("id", id), new UserRowMapper());
        } catch (Exception e) {
            throw new RuntimeException("error getting reading users ==> " + e.getMessage());
        }
    }
}
