package task004;

import org.junit.Assert;
import org.junit.Test;

/**
 * Created by Almaz on 24.02.2016.
 */
public class LinuxMintTest {
    @Test
    public void constructorShouldMakeCorrectLinux() {
        LinuxMint linux = new LinuxMint(1, "Arch");
        Assert.assertEquals(1, linux.version);
        Assert.assertEquals("Arch", linux.name);
    }
    @Test
    public void installAppShouldAppNameToArray() {
        LinuxMint linux = new LinuxMint(1, "Arch");
        linux.installApp("App");
        Assert.assertEquals("App", linux.apps.get(linux.apps.size() - 1));
    }
}
