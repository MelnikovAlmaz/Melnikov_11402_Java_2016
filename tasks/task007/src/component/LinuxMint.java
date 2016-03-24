package component;

import org.springframework.stereotype.Component;

/**
 * Created by Almaz on 11.02.2016.
 */
@Component
public class LinuxMint extends Linux {
    public LinuxMint(int version, String name) {
        super(version, name);
    }

    public LinuxMint() {
    }

    @Override
    public void installApp(String appName) {
        apps.add(appName);
        System.out.println("Install app with apt-get install!");
    }
}
