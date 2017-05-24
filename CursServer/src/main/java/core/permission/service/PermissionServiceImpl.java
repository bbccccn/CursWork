package core.permission.service;

import core.permission.PermissionRepository;
import core.permission.model.Permission;
import core.permission.model.PermissionDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PermissionServiceImpl implements PermissionService {
    private PermissionRepository permissionRepository;

    @Autowired
    public PermissionServiceImpl(PermissionRepository permissionRepository) {
        this.permissionRepository = permissionRepository;
    }

    @Override
    public void add(Permission permission) {
        permissionRepository.save(permission);
    }

    @Override
    public void delete(int id) {
        permissionRepository.delete(id);
    }

    @Override
    public void edit(Permission permission) {
        permissionRepository.save(permission);
    }

    @Override
    public PermissionDTO getById(int id) {
        Permission permission = permissionRepository.findOne(id);
        return new PermissionDTO(permission);
    }

    @Override
    public List<PermissionDTO> getAll() {
        List<Permission> permissions = permissionRepository.findAll();
        List<PermissionDTO> permissionDTOS = new ArrayList<>();

        permissions.forEach(permission -> {
            permissionDTOS.add(new PermissionDTO(permission));
        });

        return permissionDTOS;
    }
}
