package core.permission.model;

import javax.persistence.Column;

public class PermissionDTO {
    private int id;
    private int accessLevel;
    private String name;

    public PermissionDTO (Permission permission) {
        id = permission.getId();
        accessLevel = permission.getAccessLevel();
        name = permission.getName();
    }

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
