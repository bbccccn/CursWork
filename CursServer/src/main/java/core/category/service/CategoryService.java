package core.category.service;

import core.category.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();

    Category getCategory(long id);

    void createCategory(Category category);

    void deleteCategory(long id);

    List<Category> getRootCategories();
}
