package entity;

import entity.enums.Role;
import entity.enums.Sex;

import javax.persistence.*;

/**
 * Created by Almaz on 28.04.2016.
 */
@MappedSuperclass
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    protected int id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.ORDINAL)
    private Sex sex;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "phone", nullable = false)
    private String phone;

    @ManyToOne
    @JoinColumn(name = "city", referencedColumnName = "id")
    private City city;

    @Column(name = "street")
    private String street;

    @Column(name = "house")
    private String house;

    @Column(name = "flat")
    private int flat;

    @Column(name = "enabled")
    private int enabled;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Sex getSex() {
        return sex;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public int getFlat() {
        return flat;
    }

    public void setFlat(int flat) {
        this.flat = flat;
    }

    public int getEnabled() {
        return enabled;
    }

    public void setEnabled(int enabled) {
        this.enabled = enabled;
    }
}
