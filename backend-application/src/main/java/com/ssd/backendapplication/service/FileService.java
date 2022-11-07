package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.File;

import java.util.List;

public interface FileService {
    File saveFile(File file);

    File getFileById(String id);

    List<File> getAllFiles();
}
