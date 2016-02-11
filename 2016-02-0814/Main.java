import java.util.ArrayList;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Main {
    public static void main(String[] args) {
        LinuxMint linuxMint = new LinuxMint(17, "Rafaella");
        linuxMint.installApp("Bom");
        linuxMint.getName();
        linuxMint.makeBackUp();
        linuxMint.update();
        RedHatLinux redHatLinux = new RedHatLinux(5, "HatRed");
        redHatLinux.update();
        redHatLinux.makeBackUp();
        redHatLinux.getName();
        redHatLinux.installApp("Foo");
        Windows windows = new Windows(10, "Windows X");
        windows.installApp("Skype");
        windows.getName();
        windows.makeBackUp();
        windows.update();
        CdR cdR = new CdR();
        cdR.writeInfo(10);
        cdR.getFreeSize();
        cdR.getType();
        cdR.isReWritable();
        DvdRw dvdRw = new DvdRw();
        dvdRw.isReWritable();
        dvdRw.getType();
        dvdRw.getFreeSize();
        dvdRw.writeInfo(20);
        dvdRw.reWrite(100);
        StationarComputer stationarComputer= new StationarComputer(redHatLinux, "DNS lowCost");
        stationarComputer.installOs(linuxMint);
        stationarComputer.closeDiscovod();
        stationarComputer.getName();
        stationarComputer.openDiscovod();
        stationarComputer.readDisc(cdR);
        stationarComputer.switchOn();
        stationarComputer.unInstallOs();
        stationarComputer.writeToDisc("foo");
        StationarWireLess stationarWireLess = new StationarWireLess(windows, "DNS lowcost + wifi");
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
        Laptop laptop = new Laptop(linuxMint, "Asus v5");
        laptop.unInstallOs();
        laptop.switchOn();
        laptop.connectToComputer(stationarComputer);
        laptop.connectToWiFi("wifi");
        laptop.isSwiched();
        laptop.swichOnWiFi();
        laptop.getName();
        laptop.installOs(redHatLinux);

        // Полиморфизм
        ArrayList<Linux> linuxes = new ArrayList<>();
        linuxes.add(linuxMint);
        linuxes.add(redHatLinux);
        for (Linux linux : linuxes){
            linux.installApp("Sublime");
        }

        //Method require Os, and we upcast Windows to Os
        stationarComputer.installOs(windows);

        //Позднее связывание
        Os os = new RedHatLinux(3, "Black hat");
        os.installApp("django");
    }
}
