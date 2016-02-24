package task004;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Laptop implements Computer, WireLessable, Portable {
    String name;
    Os installedOs;
    int charge;
    boolean switched;
    String wifi;
    boolean isWifiSwichwed;
    Computer connectedComputer;
    String location;

    public Laptop(Os installedOs, String name) {
        this.installedOs = installedOs;
        this.name = name;
        isWifiSwichwed = false;
        charge = 100;
        switched = false;
    }

    @Override
    public void unInstallOs() {
        installedOs = null;
    }

    @Override
    public void switchOn() {
        switched = true;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void installOs(Os os) {
        installedOs = os;
    }

    @Override
    public void moveTo(String place) {
        location = place;
    }

    @Override
    public int getBatteryCharge() {
        return charge;
    }

    @Override
    public void charge(int minutes) {
        charge += minutes;
    }

    @Override
    public void connectToWiFi(String wifiName) {
        wifi = wifiName;
    }

    @Override
    public void swichOnWiFi() {
        isWifiSwichwed = true;
    }

    @Override
    public boolean isSwiched() {
        return isWifiSwichwed;
    }

    @Override
    public void connectToComputer(Computer computer) {
        connectedComputer = computer;
    }
}
