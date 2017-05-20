package core.category.service;

import core.category.model.Category;
import core.category.model.CategoryDTO;
import core.torrent.model.TorrentDTO;

import java.util.List;

public interface CategoryService {

     List<TorrentDTO> getAllTorrentsByCategoryId(int categoryId);

    List<CategoryDTO> getAllCategories();

    CategoryDTO getCategory(int id);

    void createCategory(Category category);

    void deleteCategory(int id);

    List<CategoryDTO> getRootCategories();
}
