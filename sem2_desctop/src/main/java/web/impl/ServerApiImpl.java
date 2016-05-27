package web.impl;

import entity.*;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import web.ServerApi;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.Collections;

/**
 * Created by Almaz on 26.05.2016.
 */
@Component
public class ServerApiImpl implements ServerApi {
    private RestTemplate restTemplate;
    private String serverURL = "http://localhost:8080/api";

    public ServerApiImpl() {
        restTemplate = new RestTemplate();
        restTemplate.setMessageConverters(Collections.<HttpMessageConverter<?>>singletonList(new MappingJacksonHttpMessageConverter()));
    }

    public Passenger authorizePassenger(String username, String password) {
        String url = serverURL + "/authorization/passenger" + "?username=" + username + "&password=" + password;
        Passenger passenger = restTemplate.getForObject(url, Passenger.class);
        return passenger;
    }

    public Driver authorizeDriver(String username, String password) {
        String url = serverURL + "/authorization/driver" + "?username=" + username + "&password=" + password;
        Driver driver = restTemplate.getForObject(url, Driver.class);
        return driver;
    }

    public City[] cityList() {
        String url = serverURL + "/city";
        City[] cities = restTemplate.getForObject(url, City[].class);
        return cities;
    }

    @Override
    public Book[] bookList(int passengerId) {
        String url = serverURL + "/book?passenger_id=" + passengerId;
        Book[] bookList = restTemplate.getForObject(url, Book[].class);
        return bookList;
    }

    @Override
    public void createBook(Book book) {
        doPost(book, "/bookAdd");
    }

    public void updateProfile(Passenger passenger) {
        doPost(passenger, "/passengerUpdate");
    }

    public void createFeedBack(Feedback feedback) {
        doPost(feedback, "/feedbackAdd");
    }

    private void doPost(Object object, String url){
        String URL = serverURL + url;
        String json = null;
        try {
            json = new ObjectMapper().writeValueAsString(object);
            System.out.println(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String body = URLEncoder.encode(json);
        URL += "?json="+body;
        restTemplate.getForObject(URL, String.class);
    }
}
