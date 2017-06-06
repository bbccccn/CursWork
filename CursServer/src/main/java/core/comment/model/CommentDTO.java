package core.comment.model;

import core.torrent.model.TorrentDTO;
import core.user.model.UserDTO;

import java.sql.Timestamp;

public class CommentDTO {
    private int id;
    private String comment;
    private Timestamp creationDate;
    private TorrentDTO torrent;
    private UserDTO author;

    public CommentDTO(Comment comment) {
        id = comment.getId();
        this.comment = comment.getComment();
        creationDate = comment.getCreationDate();
        torrent = new TorrentDTO(comment.getTorrent());
        author = new UserDTO(comment.getUser());
    }

    public int getId() {
        return id;
    }

    public String getComment() {
        return comment;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }

    public TorrentDTO getTorrent() {
        return torrent;
    }

    public UserDTO getAuthor() {
        return author;
    }
}
