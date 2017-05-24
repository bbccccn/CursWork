package core.comment.model;

import core.torrent.model.Torrent;
import core.torrent.model.TorrentDTO;
import core.user.model.User;
import core.user.model.UserDTO;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import java.sql.Timestamp;

public class CommentDTO {
    private int id;
    private String comment;
    private Timestamp creeationDate;
    private TorrentDTO torrent;
    private UserDTO user;

    public CommentDTO(Comment comment) {
        id = comment.getId();
        this.comment = comment.getComment();
        creeationDate = comment.getCreeationDate();
//        torrent = new TorrentDTO(comment.getTorrent());
//        user = new UserDTO(comment.getUser());
    }

    public int getId() {
        return id;
    }

    public String getComment() {
        return comment;
    }

    public Timestamp getCreeationDate() {
        return creeationDate;
    }

    public TorrentDTO getTorrent() {
        return torrent;
    }

    public UserDTO getUser() {
        return user;
    }
}
