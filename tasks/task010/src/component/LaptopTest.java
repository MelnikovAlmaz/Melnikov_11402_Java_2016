package task010.src.component;

import org.junit.Assert;
import org.junit.Test;
import task004.Computer;
import task004.Laptop;
import task004.LinuxMint;
import task004.Windows;

import static org.mockito.Mockito.mock;

/**
 * Created by Almaz on 24.02.2016.
 */
public class LaptopTest {
    ApplicationContext ac = new ClassPathXmlApplicationContext("spring-config.xml");
    @Test
    public void constructorShouldCreateCorrectLaptop() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        Assert.assertEquals("1", laptop.name);
        Assert.assertEquals(windows, laptop.installedOs);
        Assert.assertEquals(false, laptop.isWifiSwichwed);
        Assert.assertEquals(100, laptop.charge);
        Assert.assertEquals(false, laptop.switched);
    }
    @Test
    public void unInstallOsShouldMakeNullInstalledOs() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        laptop.unInstallOs();
        Assert.assertEquals(null, laptop.installedOs);
    }

    @Test
    public void switchOnShouldMakeSwithedTrue() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        laptop.switchOn();
        Assert.assertEquals(true, laptop.switched);
    }

    @Test
    public void getNameShouldReturnName() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        Assert.assertEquals("1", laptop.getName());
    }

    @Test
    public void installOsShouldChangeOs() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        task004.LinuxMint linuxMint = mock(LinuxMint.class);
        laptop.installOs(linuxMint);
        Assert.assertEquals(linuxMint, laptop.installedOs);
    }

    @Test
    public void moveToShouldChangeLocation() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        laptop.moveTo("Kazan");
        Assert.assertEquals("Kazan", laptop.location);
    }

    @Test
    public void getBatteryChargeShouldReturnCorrectBatteryCharge() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        Assert.assertEquals(100, laptop.getBatteryCharge());
    }

    @Test
    public void chargeShouldCorrectlyChangeCharge() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        laptop.charge(100);
        Assert.assertEquals(200, laptop.charge);
    }

    @Test
    public void connectToWiFiShouldChangeWiFi() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        laptop.connectToWiFi("KFU.NET");
        Assert.assertEquals("KFU.NET", laptop.wifi);
    }

    @Test
    public void swichOnWiFiShouldChangeSwitherToTrue() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        laptop.swichOnWiFi();
        Assert.assertEquals(true, laptop.isWifiSwichwed);
    }

    @Test
    public void isSwichedShouldReturnIsSwitched() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        Assert.assertEquals(false, laptop.isSwiched());
    }

    @Test
    public void connectToComputer() {
        Windows windows = mock(Windows.class);
        Laptop laptop = ac.getBean(Laptop.class);
        Computer computer=mock(Computer.class);
        laptop.connectToComputer(computer);
        Assert.assertEquals(computer, laptop.connectedComputer);
    }

}
