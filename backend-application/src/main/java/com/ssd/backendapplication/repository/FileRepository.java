package com.ssd.backendapplication.repository;

import com.ssd.backendapplication.model.File;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends MongoRepository<File, String> {



}
