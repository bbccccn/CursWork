package core.comment;

import core.comment.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    @Query("SELECT c from Comment c where c.torrent.id = :id")
    List<Comment> getAllRootCategories(@Param("id") Integer id);
}
