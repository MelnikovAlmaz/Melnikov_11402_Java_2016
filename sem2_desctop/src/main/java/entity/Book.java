package entity;

import java.sql.Timestamp;

/**
 * Created by Almaz on 15.04.2016.
 */
public class Book {
    private int id;
    private String tostreet;
    private String tohouse;
    private int fromblock;
    private Timestamp date;
    private int state;
    private String fromstreet;
    private String fromhouse;
    private String fromplace;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTostreet() {
        return tostreet;
    }

    public void setTostreet(String tostreet) {
        this.tostreet = tostreet;
    }

    public String getTohouse() {
        return tohouse;
    }

    public void setTohouse(String tohouse) {
        this.tohouse = tohouse;
    }

    public int getFromblock() {
        return fromblock;
    }

    public void setFromblock(int fromblock) {
        this.fromblock = fromblock;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public int getState() {
        return state;
    }

    public void setState(int isActive) {
        this.state = isActive;
    }

    public String getFromstreet() {
        return fromstreet;
    }

    public void setFromstreet(String fromstreet) {
        this.fromstreet = fromstreet;
    }

    public String getFromhouse() {
        return fromhouse;
    }

    public void setFromhouse(String fromhouse) {
        this.fromhouse = fromhouse;
    }

    public String getFromplace() {
        return fromplace;
    }

    public void setFromplace(String fromplace) {
        this.fromplace = fromplace;
    }

    private City city;

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    private Passenger passenger;

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    private Driver driver;

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public Book() {
    }

    private int cost;

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String phone;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
