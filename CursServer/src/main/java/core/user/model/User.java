package core.user.model;

import core.permission.model.Permission;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "users")
public class User {
    @Id
    private int id;
    private String name;
    private String email;
    private String password;
    @Column(name = "reg_date")
    private Timestamp regDate;
    @Column(name = "more_information")
    private String moreInformation;
    private String sex;
    private Date birthday;
    @ManyToOne()
    @JoinColumn(name = "permission")
    private Permission permission;

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

    public Permission getPermission() {
        return permission;
    }
}
