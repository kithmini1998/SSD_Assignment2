package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.File;

public interface FileService {
    File saveFile(File file);

    File getFileById(String id);
}
