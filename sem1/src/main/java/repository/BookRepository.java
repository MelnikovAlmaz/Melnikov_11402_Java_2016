package repository;

import entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */
@Repository
public interface BookRepository extends JpaRepository<Book, Long>{
    List<Book> findAll();
    Book findOneById(Integer id);
    List<Book> findAllByPassenger_Id(Integer id);
    Book findOneByDriverIdAndState(Integer id, Integer state);
    List<Book> findAllByCityIdAndState(int id, int state);
    List<Book> findAllByDriver_IdOrderByDateDesc(int driverId);
}
