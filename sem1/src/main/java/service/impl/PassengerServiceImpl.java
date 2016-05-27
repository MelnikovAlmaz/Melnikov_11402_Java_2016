package service.impl;

import entity.Passenger;
import entity.enums.Role;
import entity.enums.Sex;
import form.RegistrationForm;
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
    public Passenger addNewPassenger(RegistrationForm form) {
        Passenger passenger = new Passenger();
        passenger.setUsername(form.getUsername());
        passenger.setCity(cityRepository.findOneById(form.getCity()));
        passenger.setPassword(form.getPassword());
        passenger.setPhone(form.getPhone());
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
    public void update(Passenger passenger) {
        passengerRepository.save(passenger);
    }
}
