package core.user.service;

import core.user.UserRepository;
import core.user.model.User;
import core.user.model.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void add(User user) {
        userRepository.save(user);
    }

    @Override
    public void delete(int id) {
        userRepository.delete(id);
    }

    @Override
    public void edit(User user) {
        userRepository.save(user);
    }

    @Override
    public UserDTO getById(int id) {
        User user = userRepository.findOne(id);
        return new UserDTO(user);
    }

    @Override
    public List<UserDTO> getAll() {
        List<User> users = userRepository.findAll();
        List<UserDTO> userDTOS = new ArrayList<>();

        users.forEach(user -> {
            userDTOS.add(new UserDTO(user));
        });

        return userDTOS;
    }
}
