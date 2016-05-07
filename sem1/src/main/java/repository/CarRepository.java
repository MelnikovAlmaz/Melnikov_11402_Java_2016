package repository;

import entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Almaz on 28.04.2016.
 */
@Repository
public interface CarRepository extends JpaRepository<Car, Long>{
    Car findOneById(Integer id);
    Car findOneByNumber(String number);
}
