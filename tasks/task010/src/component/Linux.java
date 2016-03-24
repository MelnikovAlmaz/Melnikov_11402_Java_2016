package task010.src.component;

import java.util.ArrayList;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Linux implements Os {
    int version;
    ArrayList<String> apps;
    String name;

    public Linux(int version, String name) {
        this.version = version;
        this.name = name;
        apps = new ArrayList<>();
    }

    @Override
    public void update() {
        this.version ++;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void makeBackUp() {
        System.out.println("Back up completed!");
    }

    @Override
    public void installApp(String appName) {
        apps.add(appName);
        System.out.println("Install app from repository!");
    }
}
