package core.message;

import core.message.model.Message;
import core.message.model.MessageDTO;
import core.message.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<MessageDTO> readAll() {
        return messageService.getAll();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void create(@RequestBody Message message) {
        messageService.add(message);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void edit(@RequestBody Message message) {
        messageService.edit(message);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public void read(@PathVariable int id) {
        messageService.getById(id);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void delete(@PathVariable int id) {
        messageService.delete(id);
    }
}
