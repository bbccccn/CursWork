package core.file;

import core.file.model.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FileRepository extends JpaRepository<File, Integer> {
    @Query("SELECT f from File f where f.torrent.id = ?#{[0]}")
    List<File> getAllTorrentFiles(int id);
}
