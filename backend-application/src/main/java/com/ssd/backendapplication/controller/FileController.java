package com.ssd.backendapplication.controller;

import com.ssd.backendapplication.model.File;
import com.ssd.backendapplication.service.FileServiceImpl;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
