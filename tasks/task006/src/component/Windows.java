package component;

import java.util.ArrayList;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Windows implements Os {
    int version;
    ArrayList<String> apps;
    String name;

    public Windows(int version, String name) {
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
        System.out.println("Backup in Windows, have never heared about that!");
    }

    @Override
    public void installApp(String appName) {
        apps.add(appName);
        System.out.println("Install app from exe file!");
    }
}
