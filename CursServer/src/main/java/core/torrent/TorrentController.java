package core.torrent;


import core.category.Category;
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

    @RequestMapping(method = RequestMethod.POST)
    public void createTorrent(@RequestBody Torrent torrent) {
        torrentService.createTorrent(torrent);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public Torrent readTorrent(@PathVariable int id) {
        return torrentService.getTorrent(id);
    }

    @RequestMapping(value = {"/category/{id}"}, method = RequestMethod.GET)
    public List<Torrent> readCategoryTorrents(@PathVariable int id) {
        return torrentService.getAllTorrentsByCategoryId(id);
    }
}
