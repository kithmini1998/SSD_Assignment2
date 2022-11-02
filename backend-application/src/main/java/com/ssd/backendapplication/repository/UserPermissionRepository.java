package com.ssd.backendapplication.repository;

import com.ssd.backendapplication.model.UserPermission;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPermissionRepository extends MongoRepository<UserPermission,String> {
}
