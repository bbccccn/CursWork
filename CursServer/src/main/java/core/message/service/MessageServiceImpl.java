package core.message.service;

import core.message.MessageRepository;
import core.message.model.Message;
import core.message.model.MessageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {
    private MessageRepository messageRepository;

    @Autowired
    public MessageServiceImpl(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }


    @Override
    public void add(Message message) {
        messageRepository.save(message);
    }

    @Override
    public void delete(int id) {
        messageRepository.delete(id);
    }

    @Override
    public void edit(Message message) {
        messageRepository.save(message);
    }

    @Override
    public MessageDTO getById(int id) {
        Message message = messageRepository.findOne(id);
        return new MessageDTO(message);
    }

    @Override
    public List<MessageDTO> getAll() {
        List<Message> messages = messageRepository.findAll();
        List<MessageDTO> messageDTOS = new ArrayList<>();

        messages.forEach(message -> {
            messageDTOS.add(new MessageDTO(message));
        });

        return messageDTOS;
    }
}
