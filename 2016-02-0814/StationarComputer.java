/**
 * Created by Almaz on 11.02.2016.
 */
public class StationarComputer implements Computer, DiscReadable {
    String name;
    Os installedOs;
    boolean switched;
    Disc disc;
    public StationarComputer(Os installedOs, String name) {
        this.installedOs = installedOs;
        this.name = name;
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
