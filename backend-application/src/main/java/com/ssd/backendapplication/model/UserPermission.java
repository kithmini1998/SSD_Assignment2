package com.ssd.backendapplication.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "user_permission")
public class UserPermission {

    @Id
    private String id;
    private String permissionName;

}
