package task004;

/**
 * Created by Almaz on 11.02.2016.
 */
public class StationarWireLess extends StationarComputer implements WireLessable {
    String wifi;
    boolean isWifiSwichwed;
    Computer connectedComputer;

    public StationarWireLess(Os installedOs, String name) {
        super(installedOs, name);
        isWifiSwichwed = false;
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
