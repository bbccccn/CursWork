package core.torrent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TorrentRepository extends JpaRepository<Torrent, Integer>{
    @Query("SELECT t FROM Torrent t WHERE t.category.id = :id")
    List<Torrent> getTorrentsByCategoryId(@Param("id") Integer id);
}
