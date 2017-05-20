package core.torrent.service;

import core.torrent.Torrent;

import java.util.List;

public interface TorrentService {
    List<Torrent> getAllTorrentsByCategoryId(int id);

    Torrent getTorrent(int id);

    void createTorrent(Torrent torrent);

    void deleteTorrent(int id);
}
