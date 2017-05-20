package core.category.model;

//import core.torrent.model.Torrent;

import core.torrent.model.Torrent;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private Integer parentCategoryId;
    @OneToMany(mappedBy = "parentCategoryId")
    private List<Category> childCategories;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Torrent> torrents;

    public Category() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getParentCategoryId() {
        return parentCategoryId;
    }

    public void setParentCategoryId(Integer parentCategoryId) {
    }

    public List<Category> getChildCategories() {
        return childCategories;
    }

    public void setChildCategories(List<Category> childCategories) {
        this.childCategories = childCategories;
    }

    public List<Torrent> getTorrents() {
        return torrents;
    }
}
