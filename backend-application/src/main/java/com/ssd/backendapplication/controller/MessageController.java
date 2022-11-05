package com.ssd.backendapplication.controller;

import com.ssd.backendapplication.model.Message;
import com.ssd.backendapplication.service.MessageServiceImpl;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("v1/message")
public class MessageController {

    private final MessageServiceImpl messageService;

    @PostMapping("/add")
    public ResponseEntity<Message> addUser(@RequestBody Message message) {
        log.info("received user message request body {} ", message);
        return ResponseEntity.ok(this.messageService.createMessage(message));
    }
}
