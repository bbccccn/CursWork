package core.file;

import core.file.model.File;
import core.file.model.FileDTO;
import core.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/files")
public class FileController {
    private FileService fileService;

    @Autowired
    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<FileDTO> readTorrents() {
        return fileService.getAllFiles();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createFile(@RequestBody File file) {
        fileService.add(file);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void editFile(@RequestBody File file) {
        fileService.edit(file);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public List<FileDTO> readFile(@PathVariable int id) {
        return fileService.getByTorrentId(id);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void deleteFile(@PathVariable int id) {
        fileService.delete(id);
    }
}
