package service;

import entity.City;
import entity.Passenger;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */

public interface PassengerService {
    Passenger getPassengerById(Integer id);
    Passenger getPassengerByUsername(String username);
    List<Passenger> getAllPassenger();
    Passenger addNewPassenger(String username, int cityId, String phone, String password);
    void update(Passenger passenger, String name, String street, String house, int flat, int sex, City city);
}
