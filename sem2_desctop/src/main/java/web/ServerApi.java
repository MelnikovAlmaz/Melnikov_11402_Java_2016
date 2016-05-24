package web;

import entity.Driver;
import entity.Passenger;

/**
 * Created by Almaz on 26.05.2016.
 */
public interface ServerApi {
    Passenger authorizePassenger(String username, String password);
    Driver authorizeDriver(String username, String password);
}
