package service;

import entity.City;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */

public interface CityService {
    City getCityById(Integer id);

    @Transactional
    City getCityByName(String name);

    List<City> getAllCities();
}
