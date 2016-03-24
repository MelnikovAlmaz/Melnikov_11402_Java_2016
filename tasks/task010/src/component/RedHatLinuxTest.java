package task010.src.component;

import org.junit.Assert;
import org.junit.Test;
import task004.RedHatLinux;

/**
 * Created by Almaz on 24.02.2016.
 */
public class RedHatLinuxTest {
    ApplicationContext ac = new ClassPathXmlApplicationContext("spring-config.xml");
    @Test
    public void constructorShouldMakeCorrectLinux() {
        task004.RedHatLinux linux = ac.getBean(RedHatLinux.class);
        Assert.assertEquals(1, linux.version);
        Assert.assertEquals("Arch", linux.name);
    }
    @Test
    public void installAppShouldAppNameToArray() {
        task004.RedHatLinux linux = ac.getBean(RedHatLinux.class);
        linux.installApp("App");
        Assert.assertEquals("App", linux.apps.get(linux.apps.size() - 1));
    }
}
