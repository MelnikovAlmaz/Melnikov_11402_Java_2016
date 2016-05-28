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

    Book[] bookFreeList(int city_id);

    void createBook(Book book);
    void updatePassengerProfile(Passenger passenger);
    void createFeedBack(Feedback feedback);

    Book currentBook(Driver driver);

    void updateCurrentBook(Book book);

    void updateDriverProfile(Driver driver);
}
