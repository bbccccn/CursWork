package core.torrent.service;

import core.torrent.Torrent;
import core.torrent.TorrentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TorrentServiceImpl implements TorrentService {
    private TorrentRepository torrentRepository;

    @Autowired
    public TorrentServiceImpl(TorrentRepository torrentRepository) {
        this.torrentRepository = torrentRepository;
    }

    @Override
    public List<Torrent> getAllTorrentsByCategoryId(int id) {
        return torrentRepository.getTorrentsByCategoryId(id);
    }

    @Override
    public Torrent getTorrent(int id) {
        return torrentRepository.findOne(id);
    }

    @Override
    public void createTorrent(Torrent torrent) {
        torrentRepository.save(torrent);
    }

    @Override
    public void deleteTorrent(int id) {
        torrentRepository.delete(id);
    }
}
