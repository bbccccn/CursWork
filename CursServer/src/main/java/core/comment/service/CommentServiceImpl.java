package core.comment.service;

import core.comment.CommentRepository;
import core.comment.model.Comment;
import core.comment.model.CommentDTO;
import core.file.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    private CommentRepository commentRepository;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public void add(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public void delete(int id) {
        commentRepository.delete(id);
    }

    @Override
    public void edit(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public CommentDTO getById(int id) {
        return new CommentDTO(commentRepository.getOne(id));
    }

    @Override
    public List<CommentDTO> getAll() {
        List<Comment> comments = commentRepository.findAll();
        List<CommentDTO> commentDTOS = new ArrayList<>();

        comments.forEach(comment -> {
            commentDTOS.add(new CommentDTO(comment));
        });

        return commentDTOS;
    }
}
