package controllers;

import entity.City;
import entity.Driver;
import entity.Passenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import service.CityService;
import service.DriverService;
import service.PassengerService;

import java.util.List;

/**
 * Created by Almaz on 20.05.2016.
 */
@Controller
@RequestMapping("/api")
public class ApplicationController {
    @Autowired
    CityService cityService;
    @Autowired
    PassengerService passengerService;
    @Autowired
    DriverService driverService;

    @RequestMapping(value = "/authorization/passenger", method = RequestMethod.GET)
    @ResponseBody
    public Passenger authorizationPassenger(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password){
        Passenger passenger = passengerService.getPassengerByUsername(username);
        if(passenger == null) return null;
        if (!passenger.getPassword().equals(password)) return null;
        return passenger;
    }

    @RequestMapping(value = "/authorization/driver", method = RequestMethod.GET)
    @ResponseBody
    public Driver authorizationDriver(@RequestParam(value = "username") String username, @RequestParam(value = "password") String password){
        Driver driver = driverService.getDriverByUsername(username);
        if(driver == null) return null;
        if (!driver.getPassword().equals(password)) return null;
        return driver;
    }

    @RequestMapping(value = "/citys", method = RequestMethod.GET)
    @ResponseBody
    public List<City> listCity() {
        List<City> cities = cityService.getAllCities();
        return cities;
    }
}
