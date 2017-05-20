package core.torrent;

import core.torrent.model.Torrent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TorrentRepository extends JpaRepository<Torrent, Integer>{
}
