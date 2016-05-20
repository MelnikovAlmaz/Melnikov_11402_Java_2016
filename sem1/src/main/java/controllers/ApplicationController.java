package controllers;

import entity.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.CityService;

import java.util.List;

/**
 * Created by Almaz on 20.05.2016.
 */
@Controller
@RequestMapping("/api")
public class ApplicationController {
    @Autowired
    CityService cityService;

    @RequestMapping(value = "/citys", method = RequestMethod.GET)
    @ResponseBody
    public List<City> listCity() {
        List<City> cities = cityService.getAllCities();
        return cities;
    }
}
