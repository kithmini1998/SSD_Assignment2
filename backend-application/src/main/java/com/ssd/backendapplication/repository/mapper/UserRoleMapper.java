package com.ssd.backendapplication.repository.mapper;

import com.ssd.backendapplication.model.UserRole;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class UserRoleMapper implements RowMapper<UserRole> {
    @Override
    public UserRole mapRow(ResultSet resultSet, int i) throws SQLException {

        return UserRole.builder()
                .id(resultSet.getInt("id"))
                .roleName(resultSet.getString("role"))
                .build();
    }
}
