package core.category;

import core.category.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Query("SELECT c from Category c where c.parentCategoryId = NULL")
    List<Category> getAllRootCategories();
}
