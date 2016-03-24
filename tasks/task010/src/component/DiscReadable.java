package task010.src.component;

/**
 * Created by Almaz on 11.02.2016.
 */
public interface DiscReadable {
    String readDisc(Disc disc);
    void openDiscovod();
    void closeDiscovod();
    void writeToDisc(String info);
}
