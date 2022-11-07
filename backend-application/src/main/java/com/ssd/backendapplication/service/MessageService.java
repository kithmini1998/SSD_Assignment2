package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.Message;

import java.util.List;

public interface MessageService {
    Message createMessage(Message message);
    List<Message> getAllMessages();
}
