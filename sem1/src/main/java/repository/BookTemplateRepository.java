package repository;

import entity.BookTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */
@Repository
public interface BookTemplateRepository extends JpaRepository<BookTemplate, Long>{
    List<BookTemplate> findAll();
    BookTemplate findOneById(Integer id);
    List<BookTemplate> findAllByPassenger_Id(Integer id);
}
