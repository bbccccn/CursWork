package core.category.service;

import core.category.model.Category;
import core.category.model.CategoryDTO;
import core.category.CategoryRepository;
import core.torrent.model.TorrentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<TorrentDTO> getAllTorrentsByCategoryId(int categoryId) {
        Category category = categoryRepository.findOne(categoryId);
        CategoryDTO categoryDTO = new CategoryDTO(category);
        return categoryDTO.getTorrents();
    }

    @Override
    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDTO> categoryDTOList = new ArrayList<>();
        categories.forEach(c -> categoryDTOList.add(new CategoryDTO(c)));
        return categoryDTOList;
    }

    @Override
    public List<CategoryDTO> getRootCategories() {
        List<Category> categories = categoryRepository.getAllRootCategories();
        List<CategoryDTO> categoryDTOList = new ArrayList<>();
        categories.forEach(c -> categoryDTOList.add(new CategoryDTO(c)));
        return categoryDTOList;
    }

    @Override
    public CategoryDTO getCategory(int id) {
        Category category = categoryRepository.findOne(id);
        return new CategoryDTO(category);
    }

    @Override
    public void createCategory(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(int id) {
        categoryRepository.delete(id);
    }
}
