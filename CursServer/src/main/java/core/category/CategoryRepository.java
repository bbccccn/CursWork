package core.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("SELECT c from Category c where c.parentCategoryId = NULL")
    List<Category> getAllRootCategories();
}
