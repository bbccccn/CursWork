package core.torrent.model;

import core.category.model.Category;
import core.permission.model.Permission;
import core.user.model.User;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "torrents")
public class Torrent {
    @Id
    private int id;

    @ManyToOne()
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne()
    @JoinColumn(name = "permission_id")
    private Permission permission;
    private String name;
    private String description;
    private Date creationDate;
    private Date editDate;
    private String status;

    public Torrent() {
    }

    public Category getCategory() {
        return category;
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

    public void setUser(User user) {
        this.user = user;
    }

    public Permission getPermission() {
        return permission;
    }
}
