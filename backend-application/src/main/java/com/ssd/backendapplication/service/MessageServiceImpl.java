package com.ssd.backendapplication.service;

import com.ssd.backendapplication.auth.jwt.Constant;
import com.ssd.backendapplication.model.Message;
import com.ssd.backendapplication.repository.MessageRepository;
import com.ssd.backendapplication.util.AesEncryption;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final MessageRepository messageRepository;
    private final Constant constant;

    @Override
    public Message createMessage(Message message) {
        AesEncryption aes_encryption = new AesEncryption();
        String description = null;
        try {
            description = aes_encryption.encrypt(message.getDescription(),constant.getEncryptSecretKey());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        message.setDescription(description);
        return messageRepository.save(message);

    }

    @Override
    public List<Message> getAllMessages() {
        List<Message> messageList = messageRepository.findAll();
        if(!messageList.isEmpty()){
            AesEncryption aes_encryption = new AesEncryption();
            for(Message msg: messageList){
                try {
                    String xx = aes_encryption.decrypt(msg.getDescription(),constant.getEncryptSecretKey());
                    msg.setDescription(xx);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        }
        return messageList;
    }
}
