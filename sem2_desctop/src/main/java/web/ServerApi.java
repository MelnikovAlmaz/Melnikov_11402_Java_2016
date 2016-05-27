package web;

import entity.*;

/**
 * Created by Almaz on 26.05.2016.
 */
public interface ServerApi {
    Passenger authorizePassenger(String username, String password);
    Driver authorizeDriver(String username, String password);
    City[] cityList();
    Book[] bookList(int passengerId);
    void createBook(Book book);
    void updateProfile(Passenger passenger);
    void createFeedBack(Feedback feedback);
}
