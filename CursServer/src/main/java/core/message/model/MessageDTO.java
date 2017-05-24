package core.message.model;

import core.user.model.User;
import core.user.model.UserDTO;

import java.sql.Timestamp;

public class MessageDTO {
    private int id;
    private String message;
    private Timestamp sendTime;
    private UserDTO sender;
    private UserDTO reciever;


    public MessageDTO(Message message) {
        id = message.getId();
        this.message = message.getMessage();
        sendTime = message.getSendTime();
//        sender = new UserDTO(message.getSender());
//        reciever = new UserDTO(message.getReciever());
    }

    public int getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public Timestamp getSendTime() {
        return sendTime;
    }

    public UserDTO getSender() {
        return sender;
    }

    public UserDTO getReciever() {
        return reciever;
    }
}
