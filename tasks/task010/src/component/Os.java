package task010.src.component;

/**
 * Created by Almaz on 11.02.2016.
 */
public interface Os {
    void update();
    String getName();
    void makeBackUp();
    void installApp(String appName);
}
