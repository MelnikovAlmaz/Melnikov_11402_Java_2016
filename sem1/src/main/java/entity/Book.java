package entity;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Almaz on 15.04.2016.
 */
@Entity
@Table(name = "book")
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

    @Id
    @GeneratedValue
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "tostreet")
    public String getTostreet() {
        return tostreet;
    }

    public void setTostreet(String tostreet) {
        this.tostreet = tostreet;
    }

    @Basic
    @Column(name = "tohouse")
    public String getTohouse() {
        return tohouse;
    }

    public void setTohouse(String tohouse) {
        this.tohouse = tohouse;
    }

    @Basic
    @Column(name = "fromblock")
    public int getFromblock() {
        return fromblock;
    }

    public void setFromblock(int fromblock) {
        this.fromblock = fromblock;
    }

    @Basic
    @Column(name = "date", insertable = false, nullable = false)
    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    @Basic
    @Column(name = "state")
    public int getState() {
        return state;
    }

    public void setState(int isActive) {
        this.state = isActive;
    }

    @Basic
    @Column(name = "fromstreet")
    public String getFromstreet() {
        return fromstreet;
    }

    public void setFromstreet(String fromstreet) {
        this.fromstreet = fromstreet;
    }

    @Basic
    @Column(name = "fromhouse")
    public String getFromhouse() {
        return fromhouse;
    }

    public void setFromhouse(String fromhouse) {
        this.fromhouse = fromhouse;
    }

    @Basic
    @Column(name = "fromplace")
    public String getFromplace() {
        return fromplace;
    }

    public void setFromplace(String fromplace) {
        this.fromplace = fromplace;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Book order = (Book) o;

        if (id != order.id) return false;
        if (fromblock != order.fromblock) return false;
        if (state != order.state) return false;
        if (tostreet != null ? !tostreet.equals(order.tostreet) : order.tostreet != null) return false;
        if (tohouse != null ? !tohouse.equals(order.tohouse) : order.tohouse != null) return false;
        if (date != null ? !date.equals(order.date) : order.date != null) return false;
        if (fromstreet != null ? !fromstreet.equals(order.fromstreet) : order.fromstreet != null) return false;
        if (fromhouse != null ? !fromhouse.equals(order.fromhouse) : order.fromhouse != null) return false;
        if (fromplace != null ? !fromplace.equals(order.fromplace) : order.fromplace != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (tostreet != null ? tostreet.hashCode() : 0);
        result = 31 * result + (tohouse != null ? tohouse.hashCode() : 0);
        result = 31 * result + fromblock;
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + state;
        result = 31 * result + (fromstreet != null ? fromstreet.hashCode() : 0);
        result = 31 * result + (fromhouse != null ? fromhouse.hashCode() : 0);
        result = 31 * result + (fromplace != null ? fromplace.hashCode() : 0);
        return result;
    }

    private City city;

    @ManyToOne
    @JoinColumn(name = "city", referencedColumnName = "id")
    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    private Passenger passenger;

    @ManyToOne
    @JoinColumn(name = "passenger", referencedColumnName = "id")
    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    private Driver driver;

    @ManyToOne
    @JoinColumn(name = "driver", referencedColumnName = "id")
    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public Book() {
    }

    public Book(Driver driver, String tohouse, int fromblock, String fromstreet, String fromhouse, String fromplace, City city, Passenger passenger, String tostreet) {
        this.driver = driver;
        this.tohouse = tohouse;
        this.fromblock = fromblock;
        this.fromstreet = fromstreet;
        this.fromhouse = fromhouse;
        this.fromplace = fromplace;
        this.city = city;
        this.passenger = passenger;
        this.tostreet = tostreet;
    }

    private int cost;

    @Basic
    @Column(name = "cost", insertable = false)
    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    private String name;

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String phone;

    @Basic
    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
