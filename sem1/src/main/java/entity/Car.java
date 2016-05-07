package entity;

import javax.persistence.*;

/**
 * Created by Almaz on 13.04.2016.
 */
@Entity
@Table(name = "car")
public class Car {
    private int id;
    private String model;
    private String number;
    private int region;
    private String color;

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
    @Column(name = "model")
    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @Basic
    @Column(name = "number")
    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Basic
    @Column(name = "region")
    public int getRegion() {
        return region;
    }

    public void setRegion(int region) {
        this.region = region;
    }

    @Basic
    @Column(name = "color")
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Car car = (Car) o;

        if (id != car.id) return false;
        if (region != car.region) return false;
        if (model != null ? !model.equals(car.model) : car.model != null) return false;
        if (number != null ? !number.equals(car.number) : car.number != null) return false;
        if (color != null ? !color.equals(car.color) : car.color != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (model != null ? model.hashCode() : 0);
        result = 31 * result + (number != null ? number.hashCode() : 0);
        result = 31 * result + region;
        result = 31 * result + (color != null ? color.hashCode() : 0);
        return result;
    }
}
