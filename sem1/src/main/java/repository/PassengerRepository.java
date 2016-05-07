package repository;

import entity.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Almaz on 28.04.2016.
 */
@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Long>{
    Passenger findOneByUsername(String username);

    Passenger findOneById(Integer id);
}
