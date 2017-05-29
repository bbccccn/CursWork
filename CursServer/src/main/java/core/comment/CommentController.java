package core.comment;

import core.comment.model.Comment;
import core.comment.model.CommentDTO;
import core.comment.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<CommentDTO> readAll() {
        return commentService.getAll();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void create(@RequestBody Comment comment) {
        commentService.add(comment);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void edit(@RequestBody Comment comment) {
        commentService.edit(comment);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public List<CommentDTO> read(@PathVariable int id) {
        return commentService.getByTorrentId(id);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void delete(@PathVariable int id) {
        commentService.delete(id);
    }
}
