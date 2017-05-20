package core.category;

import core.category.service.CategoryService;
import core.torrent.Torrent;
import core.torrent.service.TorrentService;
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
    public List<Category> getCategories() {
        return categoryService.getRootCategories();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createCategory(@RequestBody Category category) {
        categoryService.createCategory(category);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public Category readCategory(@PathVariable long id) {
        return categoryService.getCategory(id);
    }
}
