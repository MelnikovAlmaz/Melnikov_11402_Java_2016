package task010.src.component;

import org.junit.Assert;
import org.junit.Test;
import task004.Computer;
import task004.StationarWireLess;
import task004.Windows;

import static org.mockito.Mockito.mock;

/**
 * Created by Almaz on 24.02.2016.
 */
public class StationarWirelessTest {
    ApplicationContext ac = new ClassPathXmlApplicationContext("spring-config.xml");
    @Test
    public void constructorShouldReturnCorrectStationarComputer() {
        task004.Windows windows = mock(task004.Windows.class);
        StationarWireLess stationarComputer = ac.getBean(StationarWireLess.class);
        Assert.assertEquals(windows, stationarComputer.installedOs);
        Assert.assertEquals("1", stationarComputer.name);
        Assert.assertEquals(false, stationarComputer.switched);
        Assert.assertEquals(false, stationarComputer.isWifiSwichwed);
    }

    @Test
    public void connectToWiFiShouldChangeWiFi() {
        task004.Windows windows = mock(task004.Windows.class);
        StationarWireLess stationarComputer =ac.getBean(StationarWireLess.class);
        stationarComputer.connectToWiFi("KFU.NET");
        Assert.assertEquals("KFU.NET", stationarComputer.wifi);
    }

    @Test
    public void swichOnWiFiShouldChangeSwitherToTrue() {
        task004.Windows windows = mock(task004.Windows.class);
        StationarWireLess stationarComputer = ac.getBean(StationarWireLess.class);
        stationarComputer.swichOnWiFi();
        Assert.assertEquals(true, stationarComputer.isWifiSwichwed);
    }

    @Test
    public void isSwichedShouldReturnIsSwitched() {
        task004.Windows windows = mock(task004.Windows.class);
        StationarWireLess stationarComputer = ac.getBean(StationarWireLess.class);
        Assert.assertEquals(false, stationarComputer.isSwiched());
    }

    @Test
    public void connectToComputer() {
        task004.Windows windows = mock(Windows.class);
        StationarWireLess stationarComputer =ac.getBean(StationarWireLess.class);
        Computer computer=mock(Computer.class);
        stationarComputer.connectToComputer(computer);
        Assert.assertEquals(computer, stationarComputer.connectedComputer);
    }
}
