package core.message.model;

import core.user.model.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "private_messages")
public class Message {
    @Id
    private int id;
    private String message;
    @Column(name = "send_time")
    private Timestamp sendTime;
    @OneToOne
    @JoinColumn(name = "sender_id")
    private User sender;
    @OneToOne
    @JoinColumn(name = "reciever_id")
    private User reciever;

    public int getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public Timestamp getSendTime() {
        return sendTime;
    }

//    public User getSender() {
//        return sender;
//    }
//
//    public User getReciever() {
//        return reciever;
//    }
}
