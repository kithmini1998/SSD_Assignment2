package com.ssd.backendapplication.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;



@Data
@Builder
public class UserRole {

    @Id
    private int id;
    private String roleName;
    private List<UserPermission> userPermissions;
}
