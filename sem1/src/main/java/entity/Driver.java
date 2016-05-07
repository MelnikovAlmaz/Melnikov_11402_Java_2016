package entity;

import javax.persistence.*;

/**
 * Created by Almaz on 13.04.2016.
 */
@Entity
@Table(name = "driver")
public class Driver extends Person{
    @OneToOne
    @JoinColumn(name = "car", referencedColumnName = "id")
    private Car car;

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}
