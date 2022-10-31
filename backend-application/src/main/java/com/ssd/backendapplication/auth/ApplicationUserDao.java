package com.ssd.backendapplication.auth;

public interface ApplicationUserDao {

    ApplicationUser selectApplicationUserByUsername(String username);
}
