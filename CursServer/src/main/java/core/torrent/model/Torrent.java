package core.torrent.model;

import core.category.model.Category;

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
}
