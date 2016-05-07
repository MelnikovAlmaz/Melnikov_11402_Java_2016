package service.impl;

import entity.Car;
import entity.City;
import entity.Driver;
import entity.enums.Role;
import entity.enums.Sex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.CityRepository;
import repository.DriverRepository;
import service.DriverService;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */
@Service
public class DriverServiceImpl implements DriverService {
    @Autowired
    DriverRepository driverRepository;
    @Autowired
    CityRepository cityRepository;

    @Override
    @Transactional
    public Driver getDriverById(Integer id) {
        return driverRepository.findOneById(id);
    }

    @Override
    @Transactional
    public Driver getDriverByUsername(String username) {
        return driverRepository.findOneByUsername(username);
    }

    @Override
    @Transactional
    public List<Driver> getAllDriver() {
        return driverRepository.findAll();
    }

    @Override
    public Driver addNewDriver(String username, int cityId, String phone, String password, Car car) {
        Driver driver = new Driver();
        driver.setUsername(username);
        driver.setCity(cityRepository.findOneById(cityId));
        driver.setPassword(password);
        driver.setPhone(phone);
        driver.setRole(Role.ROLE_DRIVER);
        driver.setEnabled(1);
        driver.setSex(Sex.MALE);
        driver.setName("");
        driver.setStreet("");
        driver.setFlat(0);
        driver.setHouse("");
        driver.setCar(car);
        return driverRepository.save(driver);
    }

    @Override
    public void update(Driver driver, String name, String street, String house, int flat, int sex, City city) {
        driver.setName(name);
        driver.setStreet(street);
        driver.setHouse(house);
        driver.setFlat(flat);
        driver.setSex(Sex.values()[sex]);
        driver.setCity(city);
        driverRepository.save(driver);
    }
}
