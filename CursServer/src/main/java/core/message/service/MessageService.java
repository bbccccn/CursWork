package core.message.service;

import core.message.model.Message;
import core.message.model.MessageDTO;

import java.util.List;

public interface MessageService {
    void add(Message message);
    void delete(int id);
    void edit(Message message);
    MessageDTO getById(int id);
    List<MessageDTO> getAll();
}
