package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.AuthRequestBody;
import com.ssd.backendapplication.model.OTP;
import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.repository.UserRepository;
import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.resource.factory.MessageFactory;
import com.twilio.sdk.resource.instance.Message;
import lombok.AllArgsConstructor;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private  OTPServiceImpl otpService;

    private static final String ACCOUNT_SID = "ACa0d2853a7bdd6db158f6055468139322";
    private static final String AUTH_TOKEN = "5f5570f6a6ddb2d2be21d79b298ffc5c";
    private static final String TWILIO_NUMBER = "+14245871756";

    @Override
    public User addUser(User user) {
       user.setPassword(passwordEncoder.encode(user.getPassword()));
        return this.userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(int id) {

        return null;
    }

    @Override
    public String authenticateUser(AuthRequestBody obj) {
        User user = userRepository.getUserByUserName(obj.getUsername());
        if(user != null){
            Random rand = new Random();
            int otpNumber = rand.nextInt(9999);
            OTP otp = new OTP(user.getId(),otpNumber);
            OTP response = otpService.saveOTP(otp);
            if(response != null){
                String messageBody = "Your OTP is " + response.getOtp();
                sendSMS(messageBody);
                return response.getId();
            }else{
                System.out.println("Response is null");
            }
            System.out.println(otp);
        }else{
            System.out.println("Can not the find the user");
        }
        return null;
    }

    @Override
    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    public boolean sendSMS(String body) {
        try {
            TwilioRestClient client = new TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN);
            List<NameValuePair> params = new ArrayList<>();
            params.add(new BasicNameValuePair("Body", body));
            params.add(new BasicNameValuePair("To", "+94775099995"));
            params.add(new BasicNameValuePair("From", TWILIO_NUMBER));
            MessageFactory messageFactory = client.getAccount().getMessageFactory();
            Message message = messageFactory.create(params);
            System.out.println(message.getSid());
            return true;
        }
        catch (Exception e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        return false;
    }

}
