package core.file.service;

import core.file.FileRepository;
import core.file.model.File;
import core.file.model.FileDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FileServiceImpl implements FileService {
    private FileRepository fileRepository;

    @Autowired
    public FileServiceImpl(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    @Override
    public void add(File file) {
        fileRepository.save(file);
    }

    @Override
    public void delete(int fileId) {
        fileRepository.delete(fileId);
    }

    @Override
    public void edit(File file) {
        fileRepository.save(file);
    }

    @Override
    public List<FileDTO> getByTorrentId(int torrentId) {
        List<File> files = fileRepository.getAllTorrentFiles(torrentId);

        List<FileDTO> fileDTOS = new ArrayList<>();

        files.forEach(file -> {
            fileDTOS.add(new FileDTO(file));
        });

        return fileDTOS;
    }

    @Override
    public List<FileDTO> getAllFiles() {
        List<File> files = fileRepository.findAll();
        List<FileDTO> fileDTOS = new ArrayList<>();

        files.forEach(file -> {
            fileDTOS.add(new FileDTO(file));
        });

        return fileDTOS;
    }
}
