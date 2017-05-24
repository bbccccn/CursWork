package core.category.model;

import core.permission.model.PermissionDTO;
import core.torrent.model.TorrentDTO;

import java.util.ArrayList;
import java.util.List;

public class CategoryDTO {
    private int id;
    private String name;
    private Integer parentCategoryId;
    private PermissionDTO permission;
    private List<CategoryDTO> childCategories;
    private List<TorrentDTO> torrents;

    public CategoryDTO() {
    }

    public CategoryDTO(Category category) {
        this.id = category.getId();
        this.name = category.getName();
        this.parentCategoryId = category.getParentCategoryId();
        this.permission = new PermissionDTO(category.getPermission());
        this.childCategories = new ArrayList<>();
        category.getChildCategories().forEach(c -> this.childCategories.add(new CategoryDTO(c)));
        this.torrents = new ArrayList<>();
        category.getTorrents().forEach(t -> this.torrents.add(new TorrentDTO(t)));
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getParentCategoryId() {
        return parentCategoryId;
    }

    public List<TorrentDTO> getTorrents() {
        return torrents;
    }

    public List<CategoryDTO> getChildCategories() {
        return childCategories;
    }
}
