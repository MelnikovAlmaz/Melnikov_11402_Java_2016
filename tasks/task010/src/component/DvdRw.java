package task010.src.component;

/**
 * Created by Almaz on 11.02.2016.
 */
public class DvdRw implements Disc {
    String type = "DvdRw";
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

    public void reWrite(int infoSize){
        this.infoSize = infoSize;
    }
}
