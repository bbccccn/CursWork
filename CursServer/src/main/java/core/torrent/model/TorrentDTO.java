package core.torrent.model;

import core.category.model.Category;
import core.category.model.CategoryDTO;
import core.user.model.User;

import java.sql.Date;

public class TorrentDTO {
    private int id;
    private String name;
    private String description;
    private Date creationDate;
    private Date editDate;
    private String status;
    private User user;
    private CategoryDTO category;

    public TorrentDTO() {
    }

    public TorrentDTO(Torrent torrent) {
        this.id = torrent.getId();
        this.name = torrent.getName();
        this.description = torrent.getDescription();
        this.creationDate = torrent.getCreationDate();
        this.editDate = torrent.getEditDate();
        this.status = torrent.getStatus();
        this.user = torrent.getUser();
//        this.category = new CategoryDTO(torrent.getCategory());
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

    public User getUser() {
        return user;
    }

    public CategoryDTO getCategory() {
        return category;
    }
}
