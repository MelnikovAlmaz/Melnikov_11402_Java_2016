package component;

/**
 * Created by Almaz on 11.02.2016.
 */
public interface WireLessable {
    void connectToWiFi(String wifiName);
    void swichOnWiFi();
    boolean isSwiched();
    void connectToComputer(Computer computer);
}
