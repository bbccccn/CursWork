package core.permission.service;

import core.permission.model.Permission;
import core.permission.model.PermissionDTO;

import java.util.List;

public interface PermissionService {
    void add(Permission permission);
    void delete(int id);
    void edit(Permission permission);
    PermissionDTO getById(int id);
    List<PermissionDTO> getAll();
}
