package controllers;

import entity.*;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import service.*;

import java.io.IOException;
import java.net.URLDecoder;
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
    BookService bookService;
    @Autowired
    PassengerService passengerService;
    @Autowired
    DriverService driverService;
    @Autowired
    FeedBackService feedBackService;

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

    @RequestMapping(value = "/city", method = RequestMethod.GET)
    @ResponseBody
    public List<City> listCity() {
        List<City> cities = cityService.getAllCities();
        return cities;
    }

    @RequestMapping(value = "/book", method = RequestMethod.GET)
    @ResponseBody
    public List<Book> listBook(@RequestParam(value = "passenger_id") int passenger_id) {
        List<Book> books = bookService.getAllBooksByPassengerId(passenger_id);
        return books;
    }

    @RequestMapping(value = "/bookAdd", method = RequestMethod.GET)
    @ResponseBody
    public void createBook(@RequestParam(value = "json") String bookJSON) throws IOException {
        String json = URLDecoder.decode(bookJSON);
        Book book = new ObjectMapper().readValue(json, Book.class);
        bookService.addNewBook(book);
    }

    @RequestMapping(value = "/passengerUpdate", method = RequestMethod.GET)
    @ResponseBody
    public void updatePassenger(@RequestParam(value = "json") String passengerJSON) throws IOException {
        String json = URLDecoder.decode(passengerJSON);
        Passenger passenger = new ObjectMapper().readValue(json, Passenger.class);
        passengerService.update(passenger);
    }

    @RequestMapping(value = "/feedbackAdd", method = RequestMethod.GET)
    @ResponseBody
    public void createFeedBack(@RequestParam(value = "json") String feedbackJSON) throws IOException {
        String json = URLDecoder.decode(feedbackJSON);
        Feedback feedback = new ObjectMapper().readValue(json, Feedback.class);
        feedBackService.addNewFeedBack(feedback);
    }
}
