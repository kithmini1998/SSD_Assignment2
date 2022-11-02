package com.ssd.backendapplication.model;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;


@Data
@Builder
public class User {

    @Id
    private String id;
    private String name;
    private String userName;
    private String roleId;
    private UserRole userRole;
    private String email;
    private String password;
    private Number contact;
    private String occupation;

}
