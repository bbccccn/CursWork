package core.permission;

import core.permission.model.Permission;
import core.permission.model.PermissionDTO;
import core.permission.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/permissions")
public class PermissionController {
    private PermissionService permissionService;

    @Autowired
    public PermissionController(PermissionService permissionService) {
        this.permissionService = permissionService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<PermissionDTO> readAll() {
        return permissionService.getAll();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void create(@RequestBody Permission permission) {
        permissionService.add(permission);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void edit(@RequestBody Permission permission) {
        permissionService.edit(permission);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public void read(@PathVariable int id) {
        permissionService.getById(id);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void delete(@PathVariable int id) {
        permissionService.delete(id);
    }
}
