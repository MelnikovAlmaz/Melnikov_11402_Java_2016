package task004;

import org.junit.Assert;
import org.junit.Test;

/**
 * Created by Almaz on 25.02.2016.
 */
public class WindowsTest {
    @Test
    public void constructorShouldMakeCorrectLinux() {
        Windows windows = new Windows(1, "Arch");
        Assert.assertEquals(1, windows.version);
        Assert.assertEquals("Arch", windows.name);
    }

    @Test
    public void updateShouldIncrementVersionToOne() {
        Windows windows = new Windows(1, "Arch");
        windows.update();
        Assert.assertEquals(2, windows.version);
    }

    @Test
    public void getNameShouldReturnCorrectName() {
        Windows windows = new Windows(1, "Arch");
        Assert.assertEquals("Arch", windows.getName());
    }

    @Test
    public void makeBackUp() {
        Windows windows = new Windows(1, "Arch");
        windows.makeBackUp();
    }

    @Test
    public void installAppShouldAppNameToArray() {
        Windows windows = new Windows(1, "Arch");
        windows.installApp("App");
        Assert.assertEquals("App", windows.apps.get(windows.apps.size()-1));
    }
}
