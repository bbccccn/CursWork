package core.torrent.service;

import core.torrent.model.Torrent;
import core.torrent.model.TorrentDTO;
import core.torrent.TorrentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TorrentServiceImpl implements TorrentService {
    private TorrentRepository torrentRepository;

    @Autowired
    public TorrentServiceImpl(TorrentRepository torrentRepository) {
        this.torrentRepository = torrentRepository;
    }

    @Override
    public List<TorrentDTO> getAllTorrents() {
        List<Torrent> torrents = torrentRepository.findAll();
        List<TorrentDTO> torrentDTOList = new ArrayList<>();
        torrents.forEach(t -> torrentDTOList.add(new TorrentDTO(t)));
        return torrentDTOList;
    }

    @Override
    public TorrentDTO getTorrent(int id) {
        return new TorrentDTO(torrentRepository.findOne(id));
    }

    @Override
    public TorrentDTO createTorrent(Torrent torrent) {
        return new TorrentDTO(torrentRepository.save(torrent));
    }

    @Override
    public void deleteTorrent(int id) {
        torrentRepository.delete(id);
    }
}
