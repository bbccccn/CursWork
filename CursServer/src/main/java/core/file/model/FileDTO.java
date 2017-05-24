package core.file.model;

import core.torrent.model.Torrent;
import core.torrent.model.TorrentDTO;

import java.sql.Timestamp;

public class FileDTO {
    private int id;
    private String name;
    private byte[] file;
    private Timestamp creationDate;
    private Timestamp updateDate;
    private String type;
    private TorrentDTO torrent;

    public FileDTO(File file) {
        id = file.getId();
        name = file.getName();
        this.file = file.getFile();
        creationDate = file.getCreationDate();
        updateDate = file.getUpdateDate();
        type = file.getType();
        torrent = new TorrentDTO(file.getTorrent());
    }
}
