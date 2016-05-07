package service;

import entity.Car;
import entity.City;
import entity.Driver;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */

public interface DriverService {
    Driver getDriverById(Integer id);
    Driver getDriverByUsername(String username);
    List<Driver> getAllDriver();

    Driver addNewDriver(String username, int cityId, String phone, String password, Car car);

    void update(Driver driver, String name, String street, String house, int flat, int sex, City city);
}
