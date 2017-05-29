package core.comment.model;

import core.torrent.model.Torrent;
import core.user.model.User;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    private int id;
    private String comment;
    @Column(name = "creation_date")
    private Timestamp creationDate;
    @OneToOne()
    @JoinColumn(name = "torrent_id")
    private Torrent torrent;
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public int getId() {
        return id;
    }

    public String getComment() {
        return comment;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }

    public Torrent getTorrent() {
        return torrent;
    }

//    public User getUser() {
//        return user;
//    }
}
