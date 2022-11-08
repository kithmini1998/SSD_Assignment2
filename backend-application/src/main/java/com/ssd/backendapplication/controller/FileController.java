package com.ssd.backendapplication.controller;

import com.ssd.backendapplication.model.File;
import com.ssd.backendapplication.service.FileServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("v1/file")
public class FileController {

    private final FileServiceImpl fileService;

    @PostMapping("/add")
    public ResponseEntity<File> addUser(@RequestBody File file) {
        return ResponseEntity.ok(this.fileService.saveFile(file));
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<File> getFileById(@PathVariable String id) {
        return ResponseEntity.ok(this.fileService.getFileById(id));
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<File>> getAllFiles() {
        return ResponseEntity.ok(this.fileService.getAllFiles());
    }
}
