package com.ssd.backendapplication.repository;

import com.ssd.backendapplication.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String> {

    User getUserByUserName(String username);
}
