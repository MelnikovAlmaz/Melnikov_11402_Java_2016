package web.impl;

import entity.Driver;
import entity.Passenger;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import web.ServerApi;

import java.util.Collections;

/**
 * Created by Almaz on 26.05.2016.
 */
@Component
public class ServerApiImpl implements ServerApi{
    private RestTemplate restTemplate;
    private String serverURL = "http://localhost:8080/api";

    public ServerApiImpl() {
        restTemplate = new RestTemplate();
        restTemplate.setMessageConverters(Collections.<HttpMessageConverter<?>>singletonList(new MappingJacksonHttpMessageConverter()));
    }

    public Passenger authorizePassenger(String username, String password){
        String url = serverURL + "/authorization/passenger" + "?username=" + username  + "&password="+password;
        Passenger passenger = restTemplate.getForObject(url, Passenger.class);
        return passenger;
    }

    public Driver authorizeDriver(String username, String password){
        String url = serverURL + "/authorization/driver" + "?username=" + username  + "&password="+password;
        Driver driver = restTemplate.getForObject(url, Driver.class);
        return driver;
    }
}
