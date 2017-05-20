package core.category;

import core.category.model.Category;
import core.category.model.CategoryDTO;
import core.category.service.CategoryService;
import core.torrent.model.TorrentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<CategoryDTO> getCategories() {
        return categoryService.getRootCategories();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createCategory(@RequestBody Category category) {
        categoryService.createCategory(category);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public CategoryDTO readCategory(@PathVariable int id) {
        CategoryDTO categoryDTO = categoryService.getCategory(id);
        return categoryDTO;
    }

    @RequestMapping(value = {"/{id}/torrents"}, method = RequestMethod.GET)
    public List<TorrentDTO> readTorrentsByCategory(@PathVariable int id) {
        return categoryService.getAllTorrentsByCategoryId(id);
    }
}
