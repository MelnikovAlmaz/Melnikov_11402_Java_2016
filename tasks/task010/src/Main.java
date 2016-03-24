package task010.src;

import component.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Main {
    public static void main(String[] args) {
        ApplicationContext ac = new ClassPathXmlApplicationContext("spring-config.xml");
        LinuxMint linuxMint = ac.getBean(LinuxMint.class);
        linuxMint.installApp("Bom");
        linuxMint.getName();
        linuxMint.makeBackUp();
        linuxMint.update();
        RedHatLinux redHatLinux = ac.getBean(RedHatLinux.class);
        redHatLinux.update();
        redHatLinux.makeBackUp();
        redHatLinux.getName();
        redHatLinux.installApp("Foo");
        Windows windows = ac.getBean(Windows.class);
        windows.installApp("Skype");
        windows.getName();
        windows.makeBackUp();
        windows.update();
        CdR cdR = ac.getBean(CdR.class);
        cdR.writeInfo(10);
        cdR.getFreeSize();
        cdR.getType();
        cdR.isReWritable();
        DvdRw dvdRw = ac.getBean(DvdRw.class);
        dvdRw.isReWritable();
        dvdRw.getType();
        dvdRw.getFreeSize();
        dvdRw.writeInfo(20);
        dvdRw.reWrite(100);
        StationarComputer stationarComputer= ac.getBean(StationarComputer.class);
        stationarComputer.installOs(linuxMint);
        stationarComputer.closeDiscovod();
        stationarComputer.getName();
        stationarComputer.openDiscovod();
        stationarComputer.readDisc(cdR);
        stationarComputer.switchOn();
        stationarComputer.unInstallOs();
        stationarComputer.writeToDisc("foo");
        StationarWireLess stationarWireLess = ac.getBean(StationarWireLess.class);
        stationarWireLess.writeToDisc("bar");
        stationarWireLess.unInstallOs();
        stationarWireLess.switchOn();
        stationarWireLess.readDisc(dvdRw);
        stationarWireLess.connectToComputer(stationarComputer);
        stationarWireLess.connectToWiFi("wifi");
        stationarWireLess.isSwiched();
        stationarWireLess.swichOnWiFi();
        stationarWireLess.closeDiscovod();
        stationarWireLess.getName();
        stationarWireLess.installOs(redHatLinux);
        stationarWireLess.openDiscovod();
        Laptop laptop = ac.getBean(Laptop.class);
        laptop.unInstallOs();
        laptop.switchOn();
        laptop.connectToComputer(stationarComputer);
        laptop.connectToWiFi("wifi");
        laptop.isSwiched();
        laptop.swichOnWiFi();
        laptop.getName();
        laptop.installOs(redHatLinux);
    }
}
