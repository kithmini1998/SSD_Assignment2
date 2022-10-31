package com.ssd.backendapplication.repository.mapper;

import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.model.UserRole;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet resultSet, int i) throws SQLException {

        UserRole userRole = UserRole.builder()
                .id(resultSet.getInt("id"))
                .roleName(resultSet.getString("role"))
                .build();

        return User.builder()
                .id(resultSet.getInt("id"))
                .name(resultSet.getString("name"))
                .userRole(userRole)
                .userName(resultSet.getString("user_name"))
                .email(resultSet.getString("email"))
                .password(resultSet.getString("password"))
                .occupation(resultSet.getString("occupation"))
                .contact(resultSet.getInt("contact"))
                .build();
    }
}
