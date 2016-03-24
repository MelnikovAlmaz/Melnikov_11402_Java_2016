package task010.src.component;

import org.junit.Assert;
import org.junit.Test;
import task004.CdR;

/**
 * Created by Almaz on 24.02.2016.
 */
public class CdRTest {
    ApplicationContext ac = new ClassPathXmlApplicationContext("spring-config.xml");

    @Test
    public void getTypeShouldReturnCdR() {
        task004.CdR cdR = ac.getBean(CdR.class);
        Assert.assertEquals("CdR", cdR.getType());
    }
    @Test
    public void writeInfoShouldChangeInfoSize() {
        task004.CdR cdR =ac.getBean(CdR.class);
        cdR.writeInfo(5);
        Assert.assertEquals(5, cdR.infoSize);
    }
    @Test
    public void isReWritableShouldReturnFalse() {
        task004.CdR cdR =ac.getBean(CdR.class);
        Assert.assertEquals(false, cdR.isReWritable());
    }
    @Test
    public void getFreeSizeShouldReturnCorrectFreeSize() {
        task004.CdR cdR =ac.getBean(CdR.class);
        cdR.writeInfo(6);
        Assert.assertEquals(4090, cdR.getFreeSize());
    }
}
