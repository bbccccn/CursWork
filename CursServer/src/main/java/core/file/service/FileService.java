package core.file.service;

import core.file.model.File;
import core.file.model.FileDTO;

import java.util.List;

public interface FileService {
    void add(File file);
    void delete(int fileId);
    void edit(File file);
    List<FileDTO> getByTorrentId(int fileId);
    List<FileDTO> getAllFiles();
}
