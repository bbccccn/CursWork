package core.torrent;

import core.category.Category;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    private LocalDateTime creationDate;
    private LocalDateTime editDate;
    private Status status;

    public Torrent() {
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getEditDate() {
        return editDate;
    }

    public void setEditDate(LocalDateTime editDate) {
        this.editDate = editDate;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

}
