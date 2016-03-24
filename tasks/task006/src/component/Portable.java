package component;

/**
 * Created by Almaz on 11.02.2016.
 */
public interface Portable {
    void moveTo(String place);
    int getBatteryCharge();
    void charge(int minutes);

}
