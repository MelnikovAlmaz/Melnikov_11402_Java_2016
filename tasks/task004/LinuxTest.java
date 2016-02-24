package task004;

import org.junit.Assert;
import org.junit.Test;

/**
 * Created by Almaz on 24.02.2016.
 */
public class LinuxTest {
    @Test
    public void constructorShouldMakeCorrectLinux() {
        Linux linux = new Linux(1, "Arch");
        Assert.assertEquals(1, linux.version);
        Assert.assertEquals("Arch", linux.name);
    }

    @Test
    public void updateShouldIncrementVersionToOne() {
        Linux linux = new Linux(1, "Arch");
        linux.update();
        Assert.assertEquals(2, linux.version);
    }

    @Test
    public void getNameShouldReturnCorrectName() {
        Linux linux = new Linux(1, "Arch");
        Assert.assertEquals("Arch", linux.getName());
    }

    @Test
    public void makeBackUp() {
        Linux linux = new Linux(1, "Arch");
        linux.makeBackUp();
    }

    @Test
    public void installAppShouldAppNameToArray() {
        Linux linux = new Linux(1, "Arch");
        linux.installApp("App");
        Assert.assertEquals("App", linux.apps.get(linux.apps.size()-1));
    }
}
