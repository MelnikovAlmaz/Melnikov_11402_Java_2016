package repository;

import entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */
@Repository
public interface CityRepository extends JpaRepository<City, Long>{
    List<City> findAll();
    City findOneById(Integer id);
    City findOneByName(String name);
}
