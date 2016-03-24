package task010.src.component;

import org.junit.Assert;
import org.junit.Test;
import task004.Windows;

/**
 * Created by Almaz on 25.02.2016.
 */
public class WindowsTest {
    ApplicationContext ac = new ClassPathXmlApplicationContext("spring-config.xml");
    @Test
    public void constructorShouldMakeCorrectLinux() {
        task004.Windows windows = ac.getBean(Windows.class);
        Assert.assertEquals(1, windows.version);
        Assert.assertEquals("Arch", windows.name);
    }

    @Test
    public void updateShouldIncrementVersionToOne() {
        task004.Windows windows = ac.getBean(Windows.class);
        windows.update();
        Assert.assertEquals(2, windows.version);
    }

    @Test
    public void getNameShouldReturnCorrectName() {
        task004.Windows windows = ac.getBean(Windows.class);
        Assert.assertEquals("Arch", windows.getName());
    }

    @Test
    public void makeBackUp() {
        task004.Windows windows = ac.getBean(Windows.class);
        windows.makeBackUp();
    }

    @Test
    public void installAppShouldAppNameToArray() {
        task004.Windows windows = ac.getBean(Windows.class);
        windows.installApp("App");
        Assert.assertEquals("App", windows.apps.get(windows.apps.size()-1));
    }
}
