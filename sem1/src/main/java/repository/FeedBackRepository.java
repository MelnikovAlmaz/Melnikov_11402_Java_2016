package repository;

import entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Almaz on 28.04.2016.
 */
@Repository
public interface FeedBackRepository extends JpaRepository<Feedback, Long>{
    Feedback findOneById(Integer id);
}
