package core.user.service;

import core.user.model.User;
import core.user.model.UserDTO;

import java.util.List;

public interface UserService {
    void add(User user);
    void delete(int id);
    void edit(User user);
    UserDTO getById(int id);
    List<UserDTO> getAll();
}
