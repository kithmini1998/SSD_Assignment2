package com.ssd.backendapplication.repository.mapper;

import com.ssd.backendapplication.model.UserPermission;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserPermissionMapper implements RowMapper<UserPermission> {
    @Override
    public UserPermission mapRow(ResultSet resultSet, int i) throws SQLException {
        UserPermission userPermission = new UserPermission();
        userPermission.setId(resultSet.getInt("permission_id"));
        userPermission.setPermissionName(resultSet.getString("permission"));
        return userPermission;
    }
}
