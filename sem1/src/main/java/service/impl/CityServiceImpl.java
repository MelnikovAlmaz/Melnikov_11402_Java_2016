package service.impl;

import entity.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.CityRepository;
import service.CityService;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */
@Service
public class CityServiceImpl implements CityService {
    @Autowired
    CityRepository cityRepository;

    @Override
    @Transactional
    public City getCityById(Integer id) {
        return cityRepository.findOneById(id);
    }

    @Override
    @Transactional
    public City getCityByName(String name){return cityRepository.findOneByName(name);}

    @Override
    @Transactional
    public List<City> getAllCities() {
        return cityRepository.findAll();
    }
}
