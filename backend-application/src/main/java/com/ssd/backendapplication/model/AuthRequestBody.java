package com.ssd.backendapplication.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthRequestBody {
    private String username;
    private String password;

}
