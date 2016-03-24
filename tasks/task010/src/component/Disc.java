package task010.src.component;

/**
 * Created by Almaz on 11.02.2016.
 */
public interface Disc {
    String getType();
    void writeInfo(int infoSize);
    boolean isReWritable();
    int getFreeSize();
}
