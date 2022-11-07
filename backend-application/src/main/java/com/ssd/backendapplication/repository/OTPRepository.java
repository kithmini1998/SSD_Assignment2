package com.ssd.backendapplication.repository;

import com.ssd.backendapplication.model.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OTPRepository extends MongoRepository<OTP,String> {
}
