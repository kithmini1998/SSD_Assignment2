package com.ssd.backendapplication.repository;

import com.ssd.backendapplication.model.File;
import com.ssd.backendapplication.model.FileHashCode;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileHashCodeRepository extends MongoRepository<FileHashCode, String> {

    FileHashCode findByFileId(String id);
}
