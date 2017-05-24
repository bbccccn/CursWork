package core.category.model;

//import core.torrent.model.Torrent;

import core.permission.model.Permission;
import core.torrent.model.Torrent;
import core.user.model.User;

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

    @OneToOne
    @JoinColumn(name = "permission_id")
    private Permission permission;

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

    public List<Category> getChildCategories() {
        return childCategories;
    }

    public List<Torrent> getTorrents() {
        return torrents;
    }

    public Permission getPermission() {
        return permission;
    }
}
