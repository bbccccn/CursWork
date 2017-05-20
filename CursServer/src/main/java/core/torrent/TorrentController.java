package core.torrent;


import core.torrent.model.Torrent;
import core.torrent.model.TorrentDTO;
import core.torrent.service.TorrentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/torrents")
public class TorrentController {
    private TorrentService torrentService;

    @Autowired
    public TorrentController(TorrentService torrentService) {
        this.torrentService = torrentService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<TorrentDTO> readTorrents() {
        return torrentService.getAllTorrents();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createTorrent(@RequestBody Torrent torrent) {
        torrentService.createTorrent(torrent);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public TorrentDTO readTorrent(@PathVariable int id) {
        TorrentDTO torrent = torrentService.getTorrent(id);

        return torrent;
    }
}
