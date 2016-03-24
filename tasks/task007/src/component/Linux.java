package component;

import org.springframework.beans.factory.annotation.Value;

import java.util.ArrayList;

/**
 * Created by Almaz on 11.02.2016.
 */
public class Linux implements Os {
    @Value("17")
    int version;
    ArrayList<String> apps;
    @Value("Rafaella")
    String name;

    public Linux(int version, String name) {
        this.version = version;
        this.name = name;

    }

    public Linux() {
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

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public ArrayList<String> getApps() {
        return apps;
    }

    public void setApps(ArrayList<String> apps) {
        this.apps = apps;
    }

    public void setName(String name) {
        this.name = name;
    }
}
