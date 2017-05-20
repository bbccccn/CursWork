package core.torrent.service;

import core.torrent.model.Torrent;
import core.torrent.model.TorrentDTO;

import java.util.List;

public interface TorrentService {

    List<TorrentDTO> getAllTorrents();

    TorrentDTO getTorrent(int id);

    void createTorrent(Torrent torrent);

    void deleteTorrent(int id);
}
