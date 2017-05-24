package core.user.model;

import core.permission.model.Permission;
import core.permission.model.PermissionDTO;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.sql.Date;
import java.sql.Timestamp;

public class UserDTO {
    private int id;
    private String name;
    private String email;
    private String password;
    private Timestamp regDate;
    private String moreInformation;
    private String sex;
    private Date birthday;
    private PermissionDTO permission;

    public UserDTO(User user) {
        id = user.getId();
        name = user.getName();
        email = user.getEmail();
        password = user.getPassword();
        regDate = user.getRegDate();
        moreInformation = user.getMoreInformation();
        sex = user.getSex();
        birthday = user.getBirthday();
        permission = new PermissionDTO(user.getPermission());
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Timestamp getRegDate() {
        return regDate;
    }

    public String getMoreInformation() {
        return moreInformation;
    }

    public String getSex() {
        return sex;
    }

    public Date getBirthday() {
        return birthday;
    }

    public PermissionDTO getPermission() {
        return permission;
    }
}
