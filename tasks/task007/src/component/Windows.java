package component;

import org.springframework.beans.factory.annotation.Value;

import java.util.ArrayList;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Windows implements Os {
    @Value("10")
    int version;
    ArrayList<String> apps;
    @Value("Windows 10")
    String name;

    public Windows(int version, String name) {
        this.version = version;
        this.name = name;
        apps = new ArrayList<>();
    }

    public Windows() {
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
