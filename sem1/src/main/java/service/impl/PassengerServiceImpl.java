package service.impl;

import entity.City;
import entity.Passenger;
import entity.enums.Role;
import entity.enums.Sex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import repository.CityRepository;
import repository.PassengerRepository;
import service.PassengerService;

import java.util.List;

/**
 * Created by Almaz on 28.04.2016.
 */
@Service
public class PassengerServiceImpl implements PassengerService {
    @Autowired
    PassengerRepository passengerRepository;
    @Autowired
    CityRepository cityRepository;

    @Override
    @Transactional
    public Passenger getPassengerById(Integer id) {
        return passengerRepository.findOneById(id);
    }

    @Override
    @Transactional
    public Passenger getPassengerByUsername(String username) {
        return passengerRepository.findOneByUsername(username);
    }

    @Override
    @Transactional
    public List<Passenger> getAllPassenger() {
        return passengerRepository.findAll();
    }

    @Override
    public Passenger addNewPassenger(String username, int cityId, String phone, String password) {
        Passenger passenger = new Passenger();
        passenger.setUsername(username);
        passenger.setCity(cityRepository.findOneById(cityId));
        passenger.setPassword(password);
        passenger.setPhone(phone);
        passenger.setRole(Role.ROLE_PASSENGER);
        passenger.setEnabled(1);
        passenger.setSex(Sex.MALE);
        passenger.setName("");
        passenger.setStreet("");
        passenger.setFlat(0);
        passenger.setHouse("");
        return passengerRepository.save(passenger);
    }

    @Override
    public void update(Passenger passenger, String name, String street, String house, int flat, int sex, City city) {
        passenger.setName(name);
        passenger.setStreet(street);
        passenger.setHouse(house);
        passenger.setFlat(flat);
        passenger.setSex(Sex.values()[sex]);
        passenger.setCity(city);
        passengerRepository.save(passenger);
    }
}
