package core.file.model;

import core.torrent.model.Torrent;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "files")
public class File {
    @Id
    private int id;
    private String name;
    private byte[] file;

    @Column(name = "creation_date")
    private Timestamp creationDate;

    @Column(name = "update_date")
    private Timestamp updateDate;

    private String type;

    @ManyToOne()
    @JoinColumn(name = "torrent_id")
    private Torrent torrent;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public byte[] getFile() {
        return file;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }

    public Timestamp getUpdateDate() {
        return updateDate;
    }

    public String getType() {
        return type;
    }

    public Torrent getTorrent() {
        return torrent;
    }
}
