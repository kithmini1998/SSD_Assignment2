package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.File;
import com.ssd.backendapplication.model.FileHashCode;
import com.ssd.backendapplication.repository.FileHashCodeRepository;
import com.ssd.backendapplication.repository.FileRepository;
import com.ssd.backendapplication.util.HashCodeHandler;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@AllArgsConstructor
public class FileServiceImpl implements FileService {

    private final FileRepository fileRepository;
    private final FileHashCodeRepository fileHashCodeRepository;
    private final HashCodeHandler hashCodeHandler;

    @Override
    public File saveFile(File file) {

        File newFile = fileRepository.save(file);
        log.info("save file id {}", newFile.getId());

        String hashValue = hashCodeHandler.encryptString(newFile.getFileDate());
        log.info("generated hash value {}", hashValue);

        fileHashCodeRepository.save(FileHashCode.builder()
                .fileId(newFile.getId())
                .hashCode(hashValue)
                .build());

        return newFile;
    }

    @Override
    public File getFileById(String id) {
        Optional<File> file = fileRepository.findById(id);
        log.info("get file from file id {}", id);

        if (file.isPresent()) {
            FileHashCode fileHashCode = fileHashCodeRepository.findByFileId(file.get().getId());
            log.info("get hash code from file id {}", file.get().getId());

            String newHashCode = hashCodeHandler.encryptString(file.get().getFileDate());
            log.info("generate new hashcode for validate file {}", newHashCode);

            if (fileHashCode.getHashCode().equals(newHashCode)) {
                log.info("file validate success");
                return file.get();
            } else {
                log.info("file validate failed and file is tampered");
                throw new ResponseStatusException(HttpStatus.OK,"file tampered");
            }
        }
        return null;
    }

    @Override
    public List<File> getAllFiles() {
        return fileRepository.findAll();
    }

}
