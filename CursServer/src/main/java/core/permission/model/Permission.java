package core.permission.model;

import core.category.model.Category;
import core.torrent.model.Torrent;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "permissions")
public class Permission {
    @Id
    private int id;
    @Column(name = "access_level")
    private int accessLevel;
    private String name;

    public int getId() {
        return id;
    }

    public int getAccessLevel() {
        return accessLevel;
    }

    public String getName() {
        return name;
    }
}
