package task004;

import org.junit.Assert;
import org.junit.Test;

import static org.mockito.Mockito.mock;

/**
 * Created by Almaz on 24.02.2016.
 */
public class StationarWirelessTest {
    @Test
    public void constructorShouldReturnCorrectStationarComputer() {
        Windows windows = mock(Windows.class);
        StationarWireLess stationarComputer = new StationarWireLess(windows, "1");
        Assert.assertEquals(windows, stationarComputer.installedOs);
        Assert.assertEquals("1", stationarComputer.name);
        Assert.assertEquals(false, stationarComputer.switched);
        Assert.assertEquals(false, stationarComputer.isWifiSwichwed);
    }

    @Test
    public void connectToWiFiShouldChangeWiFi() {
        Windows windows = mock(Windows.class);
        StationarWireLess stationarComputer = new StationarWireLess(windows, "1");
        stationarComputer.connectToWiFi("KFU.NET");
        Assert.assertEquals("KFU.NET", stationarComputer.wifi);
    }

    @Test
    public void swichOnWiFiShouldChangeSwitherToTrue() {
        Windows windows = mock(Windows.class);
        StationarWireLess stationarComputer = new StationarWireLess(windows, "1");
        stationarComputer.swichOnWiFi();
        Assert.assertEquals(true, stationarComputer.isWifiSwichwed);
    }

    @Test
    public void isSwichedShouldReturnIsSwitched() {
        Windows windows = mock(Windows.class);
        StationarWireLess stationarComputer = new StationarWireLess(windows, "1");
        Assert.assertEquals(false, stationarComputer.isSwiched());
    }

    @Test
    public void connectToComputer() {
        Windows windows = mock(Windows.class);
        StationarWireLess stationarComputer = new StationarWireLess(windows, "1");
        Computer computer=mock(Computer.class);
        stationarComputer.connectToComputer(computer);
        Assert.assertEquals(computer, stationarComputer.connectedComputer);
    }
}
