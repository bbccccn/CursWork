package core.file.service;

import core.file.model.File;
import core.file.model.FileDTO;

import java.util.List;

public interface FileService {
    void add(File file);
    void delete(int fileId);
    void edit(File file);
    FileDTO getById(int fileId);
    List<FileDTO> getAllFiles();
}
