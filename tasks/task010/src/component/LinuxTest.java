package task010.src.component;

import org.junit.Assert;
import org.junit.Test;
import task004.Linux;

/**
 * Created by Almaz on 24.02.2016.
 */
public class LinuxTest {
    ApplicationContext ac = new ClassPathXmlApplicationContext("spring-config.xml");
    @Test
    public void constructorShouldMakeCorrectLinux() {
        task004.Linux linux = ac.getBean(Linux.class);
        Assert.assertEquals(1, linux.version);
        Assert.assertEquals("Arch", linux.name);
    }

    @Test
    public void updateShouldIncrementVersionToOne() {
        task004.Linux linux = ac.getBean(Linux.class);
        linux.update();
        Assert.assertEquals(2, linux.version);
    }

    @Test
    public void getNameShouldReturnCorrectName() {
        task004.Linux linux = ac.getBean(Linux.class);
        Assert.assertEquals("Arch", linux.getName());
    }

    @Test
    public void makeBackUp() {
        task004.Linux linux = ac.getBean(Linux.class);
        linux.makeBackUp();
    }

    @Test
    public void installAppShouldAppNameToArray() {
        task004.Linux linux = ac.getBean(Linux.class);
        linux.installApp("App");
        Assert.assertEquals("App", linux.apps.get(linux.apps.size()-1));
    }
}
