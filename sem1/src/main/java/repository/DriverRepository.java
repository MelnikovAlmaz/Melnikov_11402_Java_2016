package repository;

import entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Almaz on 28.04.2016.
 */
@Repository
public interface DriverRepository extends JpaRepository<Driver, Long>{
    Driver findOneByUsername(String username);

    Driver findOneById(Integer id);
}
