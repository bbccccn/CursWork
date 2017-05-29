package core.comment.service;

import core.comment.model.Comment;
import core.comment.model.CommentDTO;
import core.file.model.File;
import core.file.model.FileDTO;

import java.util.List;

public interface CommentService {
    void add(Comment comment);
    void delete(int id);
    void edit(Comment comment);
    CommentDTO getById(int id);
    List<CommentDTO> getAll();
    List<CommentDTO> getByTorrentId(Integer id);
}
