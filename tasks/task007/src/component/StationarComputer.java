package component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;

/**
 * Created by Almaz on 11.02.2016.
 */
public class StationarComputer implements Computer, DiscReadable {
    @Value("Dns comp")
    String name;
    @Autowired
    @Qualifier("linuxMint")
    Os installedOs;
    boolean switched;
    @Autowired
    @Qualifier("cdr")
    Disc disc;
    public StationarComputer(Os installedOs, String name) {
        this.installedOs = installedOs;
        this.name = name;
        switched = false;
    }

    public StationarComputer() {
        switched = false;
    }

    @Override
    public String readDisc(Disc disc) {
        this.disc = disc;
        return "Read info from disc";
    }

    @Override
    public void openDiscovod() {
        System.out.println("Discovod opened!");
    }

    @Override
    public void closeDiscovod() {
        System.out.println("Discovod closed!");
    }

    @Override
    public void writeToDisc(String info) {
        if (disc != null) disc.writeInfo(info.length());
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
}
