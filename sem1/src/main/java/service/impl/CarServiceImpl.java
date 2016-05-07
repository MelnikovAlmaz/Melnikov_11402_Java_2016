package service.impl;

import entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.CarRepository;
import service.CarService;

/**
 * Created by Almaz on 03.05.2016.
 */
@Service
public class CarServiceImpl implements CarService{
    @Autowired
    CarRepository carRepository;

    @Override
    public Car getCarById(Integer id) {
        return carRepository.findOneById(id);
    }

    @Override
    public Car getCarByNumber(String number) {
        return carRepository.findOneByNumber(number);
    }

    @Override
    public Car addNewCar(String carNumber, String carModel, int carRegion, String carColor) {
        Car car = new Car();
        car.setModel(carModel);
        car.setNumber(carNumber);
        car.setColor(carColor);
        car.setRegion(carRegion);
        return carRepository.save(car);
    }

}
