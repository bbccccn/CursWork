package core.user;

import core.comment.model.Comment;
import core.comment.model.CommentDTO;
import core.comment.service.CommentService;
import core.user.model.User;
import core.user.model.UserDTO;
import core.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<UserDTO> readAll() {
        return userService.getAll();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void create(@RequestBody User user) {
        userService.add(user);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void edit(@RequestBody User user) {
        userService.edit(user);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public void read(@PathVariable int id) {
        userService.getById(id);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void delete(@PathVariable int id) {
        userService.delete(id);
    }
}
