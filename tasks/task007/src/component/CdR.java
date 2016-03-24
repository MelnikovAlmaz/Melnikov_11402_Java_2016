package component;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

/**
 * Created by Almaz on 11.02.2016.
 */
@Component
@Qualifier("cdr")
public class CdR implements Disc {
    String type = "CdR";
    int maxSize = 4096;
    int infoSize = 0;
    boolean isWritable = false;

    @Override
    public String getType() {
        return type;
    }

    @Override
    public void writeInfo(int infoSize) {
        this.infoSize += infoSize;
    }

    @Override
    public boolean isReWritable() {
        return isWritable;
    }

    @Override
    public int getFreeSize() {
        return maxSize - infoSize;
    }
}
