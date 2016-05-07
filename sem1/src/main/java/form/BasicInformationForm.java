package form;

/**
 * Created by Almaz on 02.05.2016.
 */
public class BasicInformationForm {
    private int bookCount;
    private int costSum;
    private double costAvr;
    private int minCost;
    private int maxCost;

    public int getBookCount() {
        return bookCount;
    }

    public void setBookCount(int bookCount) {
        this.bookCount = bookCount;
    }

    public int getCostSum() {
        return costSum;
    }

    public void setCostSum(int costSum) {
        this.costSum = costSum;
    }

    public double getCostAvr() {
        return costAvr;
    }

    public void setCostAvr(double costAvr) {
        this.costAvr = costAvr;
    }

    public int getMinCost() {
        return minCost;
    }

    public void setMinCost(int minCost) {
        this.minCost = minCost;
    }

    public int getMaxCost() {
        return maxCost;
    }

    public void setMaxCost(int maxCost) {
        this.maxCost = maxCost;
    }
}
