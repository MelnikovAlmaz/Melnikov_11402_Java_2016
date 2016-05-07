package service;

import entity.Car;

/**
 * Created by Almaz on 28.04.2016.
 */

public interface CarService {
    Car getCarById(Integer id);

    Car getCarByNumber(String number);

    Car addNewCar(String carNumber, String carModel, int carRegion, String carColor);
}
