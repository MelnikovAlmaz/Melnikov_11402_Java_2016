package task004;

import org.junit.Assert;
import org.junit.Test;

import static org.mockito.Mockito.mock;

/**
 * Created by Almaz on 24.02.2016.
 */
public class StationarComputerTest {
    @Test
    public void constructorShouldReturnCorrectStationarComputer() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        Assert.assertEquals(windows, stationarComputer.installedOs);
        Assert.assertEquals("1", stationarComputer.name);
        Assert.assertEquals(false, stationarComputer.switched);
    }

    @Test
    public void readDiscShouldChangeDistAtribute() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        Disc disc = mock(Disc.class);
        stationarComputer.readDisc(disc);
        Assert.assertEquals(disc, stationarComputer.disc);
    }

    @Test
    public void openDiscovodShouldOpenDiscovod() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        stationarComputer.openDiscovod();
    }

    @Test
    public void closeDiscovodShouldCloseDiscovod() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        stationarComputer.closeDiscovod();
    }

    @Test
    public void writeToDiscShouldChangeDiscInfoLenght() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        CdR disc = mock(CdR.class);
        stationarComputer.readDisc(disc);
        stationarComputer.writeToDisc("in3fo");
    }

    @Test
    public void unInstallOsShouldMakeNullInstalledOs() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        stationarComputer.unInstallOs();
        Assert.assertEquals(null, stationarComputer.installedOs);
    }

    @Test
    public void switchOnShouldMakeSwithedTrue() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        stationarComputer.switchOn();
        Assert.assertEquals(true, stationarComputer.switched);
    }

    @Test
    public void getNameShouldReturnName() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        Assert.assertEquals("1", stationarComputer.getName());
    }

    @Test
    public void installOsShouldChangeOs() {
        Windows windows = mock(Windows.class);
        StationarComputer stationarComputer = new StationarComputer(windows, "1");
        LinuxMint linuxMint = mock(LinuxMint.class);
        stationarComputer.installOs(linuxMint);
        Assert.assertEquals(linuxMint, stationarComputer.installedOs);
    }
}
