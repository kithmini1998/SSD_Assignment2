package com.ssd.backendapplication.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;



@Data
@Builder
@Document(collection = "user_role")
public class UserRole {

    @Id
    private String id;
    private String roleName;
    private List<UserPermission> userPermissions;
}
