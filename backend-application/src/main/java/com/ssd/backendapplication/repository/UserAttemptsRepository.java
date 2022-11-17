package com.ssd.backendapplication.repository;

import com.ssd.backendapplication.model.UserAttempts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserAttemptsRepository extends MongoRepository<UserAttempts,String> {
    UserAttempts getUserAttemptByUserName(String username);
}
