package task004;

import org.junit.Assert;
import org.junit.Test;

import static org.mockito.Mockito.mock;
/**
 * Created by Almaz on 24.02.2016.
 */
public class LaptopTest {
    @Test
    public void constructorShouldCreateCorrectLaptop() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        Assert.assertEquals("1", laptop.name);
        Assert.assertEquals(windows, laptop.installedOs);
        Assert.assertEquals(false, laptop.isWifiSwichwed);
        Assert.assertEquals(100, laptop.charge);
        Assert.assertEquals(false, laptop.switched);
    }
    @Test
    public void unInstallOsShouldMakeNullInstalledOs() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        laptop.unInstallOs();
        Assert.assertEquals(null, laptop.installedOs);
    }

    @Test
    public void switchOnShouldMakeSwithedTrue() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        laptop.switchOn();
        Assert.assertEquals(true, laptop.switched);
    }

    @Test
    public void getNameShouldReturnName() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        Assert.assertEquals("1", laptop.getName());
    }

    @Test
    public void installOsShouldChangeOs() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        LinuxMint linuxMint = mock(LinuxMint.class);
        laptop.installOs(linuxMint);
        Assert.assertEquals(linuxMint, laptop.installedOs);
    }

    @Test
    public void moveToShouldChangeLocation() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        laptop.moveTo("Kazan");
        Assert.assertEquals("Kazan", laptop.location);
    }

    @Test
    public void getBatteryChargeShouldReturnCorrectBatteryCharge() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        Assert.assertEquals(100, laptop.getBatteryCharge());
    }

    @Test
    public void chargeShouldCorrectlyChangeCharge() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        laptop.charge(100);
        Assert.assertEquals(200, laptop.charge);
    }

    @Test
    public void connectToWiFiShouldChangeWiFi() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        laptop.connectToWiFi("KFU.NET");
        Assert.assertEquals("KFU.NET", laptop.wifi);
    }

    @Test
    public void swichOnWiFiShouldChangeSwitherToTrue() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        laptop.swichOnWiFi();
        Assert.assertEquals(true, laptop.isWifiSwichwed);
    }

    @Test
    public void isSwichedShouldReturnIsSwitched() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        Assert.assertEquals(false, laptop.isSwiched());
    }

    @Test
    public void connectToComputer() {
        Windows windows = mock(Windows.class);
        Laptop laptop = new Laptop(windows, "1");
        Computer computer=mock(Computer.class);
        laptop.connectToComputer(computer);
        Assert.assertEquals(computer, laptop.connectedComputer);
    }

}
