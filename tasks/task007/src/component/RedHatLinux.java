package component;

/**
 * Created by Almaz on 11.02.2016.
 */
public class RedHatLinux extends Linux{
    public RedHatLinux(int version, String name) {
        super(version, name);
    }

    public RedHatLinux() {
    }

    @Override
    public void installApp(String appName) {
        apps.add(appName);
        System.out.println("Install app with yum install!");
    }
}
