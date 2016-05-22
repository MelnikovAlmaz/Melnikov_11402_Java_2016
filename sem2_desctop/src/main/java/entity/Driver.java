package entity;


/**
 * Created by Almaz on 13.04.2016.
 */

public class Driver extends Person {
    private Car car;

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}
