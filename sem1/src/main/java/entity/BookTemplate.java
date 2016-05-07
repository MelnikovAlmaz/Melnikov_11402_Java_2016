package entity;

import javax.persistence.*;

/**
 * Created by Almaz on 15.04.2016.
 */
@Entity
@Table(name = "book_template")
public class BookTemplate{
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "city", referencedColumnName = "id")
    private City city;

    @ManyToOne
    @JoinColumn(name = "passenger", referencedColumnName = "id")
    private Passenger passenger;

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "tostreet")
    private String tostreet;

    @Column(name = "tohouse")
    private String tohouse;

    @Column(name = "fromblock")
    private int fromblock;

    @Column(name = "state")
    private int state;

    @Column(name = "fromstreet")
    private String fromstreet;

    @Column(name = "fromhouse")
    private String fromhouse;

    @Column(name = "fromplace")
    private String fromplace;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
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
}
