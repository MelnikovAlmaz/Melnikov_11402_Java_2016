package task010.src.component;

import org.junit.Assert;
import org.junit.Test;
import task004.LinuxMint;

/**
 * Created by Almaz on 24.02.2016.
 */
public class LinuxMintTest {
    ApplicationContext ac = new ClassPathXmlApplicationContext("spring-config.xml");
    @Test
    public void constructorShouldMakeCorrectLinux() {
        task004.LinuxMint linux = ac.getBean(component.LinuxMint.class);
        Assert.assertEquals(1, linux.version);
        Assert.assertEquals("Arch", linux.name);
    }
    @Test
    public void installAppShouldAppNameToArray() {
        task004.LinuxMint linux = ac.getBean(component.LinuxMint.class);
        linux.installApp("App");
        Assert.assertEquals("App", linux.apps.get(linux.apps.size() - 1));
    }
}
