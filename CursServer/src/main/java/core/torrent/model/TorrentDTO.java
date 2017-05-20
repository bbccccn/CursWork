package core.torrent.model;

import java.sql.Date;

public class TorrentDTO {
    private int id;
    private String name;
    private String description;
    private Date creationDate;
    private Date editDate;
    private String status;

    public TorrentDTO() {
    }

    public TorrentDTO(Torrent torrent) {
        this.id = torrent.getId();
        this.name = torrent.getName();
        this.description = torrent.getDescription();
        this.creationDate = torrent.getCreationDate();
        this.editDate = torrent.getEditDate();
        this.status = torrent.getStatus();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public Date getEditDate() {
        return editDate;
    }

    public String getStatus() {
        return status;
    }
}
