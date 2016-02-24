package task004;

import org.junit.Assert;
import org.junit.Test;

/**
 * Created by Almaz on 24.02.2016.
 */
public class CdRTest {
    @Test
    public void getTypeShouldReturnCdR() {
        CdR cdR =new CdR();
        Assert.assertEquals("CdR", cdR.getType());
    }
    @Test
    public void writeInfoShouldChangeInfoSize() {
        CdR cdR =new CdR();
        cdR.writeInfo(5);
        Assert.assertEquals(5, cdR.infoSize);
    }
    @Test
    public void isReWritableShouldReturnFalse() {
        CdR cdR =new CdR();
        Assert.assertEquals(false, cdR.isReWritable());
    }
    @Test
    public void getFreeSizeShouldReturnCorrectFreeSize() {
        CdR cdR =new CdR();
        cdR.writeInfo(6);
        Assert.assertEquals(4090, cdR.getFreeSize());
    }
}
