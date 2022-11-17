package com.ssd.backendapplication.service;

import com.ssd.backendapplication.model.AuthRequestBody;
import com.ssd.backendapplication.model.OTP;
import com.ssd.backendapplication.model.User;
import com.ssd.backendapplication.model.UserAttempts;
import com.ssd.backendapplication.repository.UserAttemptsRepository;
import com.ssd.backendapplication.repository.UserRepository;
import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.resource.factory.MessageFactory;
import com.twilio.sdk.resource.instance.Message;
import lombok.AllArgsConstructor;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserAttemptsRepository userAttemptsRepository;

    private  OTPServiceImpl otpService;

    private static final String ACCOUNT_SID = "ACa0d2853a7bdd6db158f6055468139322";
    private static final String AUTH_TOKEN = "5f5570f6a6ddb2d2be21d79b298ffc5c";
    private static final String TWILIO_NUMBER = "+14245871756";
    private static final String TO_NUMBER = "+94775099995";

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
            UserAttempts ua = userAttemptsRepository.getUserAttemptByUserName(user.getUserName());
            LocalDateTime now = LocalDateTime.now();
            if(ua != null){
                if(now.isAfter(ua.getLastModified())){
                    if(ua.getAttempts() < 4){
                        ua.setAttempts(ua.getAttempts()+1);
                        userAttemptsRepository.save(ua);
                        if(user.getPassword().equalsIgnoreCase(obj.getPassword())){
                            OTP otp = generateOTP(user);
                            return otp.getId();
                        }else{
                            return  "";
                        }

                    }else{
                        ua.setLastModified(now.plusMinutes(30));
                        userAttemptsRepository.save(ua);
                        return "";
                    }
                }else{
                    return "";
                }
            }else{
                UserAttempts userAttempts = new UserAttempts();
                userAttempts.setUserName(user.getUserName());
                userAttempts.setLastModified(now);
                userAttempts.setAttempts(1);
                userAttemptsRepository.save(userAttempts);
                if(user.getPassword().equalsIgnoreCase(obj.getPassword())){
                    OTP otp = generateOTP(user);
                    return otp.getId();
                }else{
                    return  "";
                }
            }
        }else{
            System.out.println("Can not the find the user");
        }
        return null;
    }

    private OTP generateOTP(User user){
        Random rand = new Random();
        int otpNumber = rand.nextInt(10000);
        OTP otp = new OTP(user.getId(),otpNumber);
        OTP response = otpService.saveOTP(otp);
        if(response != null){
            String messageBody = "Your OTP is " + response.getOtp();
            String to = user.getContact().toString();
            sendSMSUsingNotifyLK(messageBody,to);
            return response;
        }else{
            System.out.println("Response is null");
            return null;
        }

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
            params.add(new BasicNameValuePair("To", TO_NUMBER));
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

    public boolean sendSMSUsingNotifyLK(String body, String to){
        try {
            String mobile = "94"+to;
            String message = body;
            String uri = "https://app.notify.lk/api/v1/send?user_id=23608&api_key=GrfcK9978sTkVsATKgmf&sender_id=NotifyDEMO&to="+mobile+"&message="+message;
            RestTemplate restTemplate = new RestTemplate();
            String result = restTemplate.getForObject(uri, String.class);
            System.out.println("Result : " + result);
            return true;
        }catch (Exception ex){
            System.out.println(ex.getMessage());
        }
        return false;
    }

}
