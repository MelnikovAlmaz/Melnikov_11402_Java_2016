package task003;

/**
 * Created by Almaz on 17.11.2014.
 */
public class ComplexNumber {
    private double a, b;

    public ComplexNumber() {
        this(0.0, 0.0);
    }

    public ComplexNumber(double a, double b) {
        this.a = a;
        this.b = b;
    }

    public ComplexNumber multNumber(double n) {
        return new ComplexNumber(this.a * n, this.b * n);
    }

    public void multNumber2(double n) {
        this.a = this.multNumber(n).getA();
        this.b = this.multNumber(n).getB();
    }

    public ComplexNumber mult(ComplexNumber complexNumber) {
        double k, l;
        k = complexNumber.getA() * this.a - complexNumber.getB() * this.b;
        l = complexNumber.getA() * this.b + complexNumber.getB() * this.a;
        return new ComplexNumber(k, l);
    }

    public void mult2(ComplexNumber complexNumber) {
        this.a = this.mult(complexNumber).getA();
        this.b = this.mult(complexNumber).getB();
    }

    public ComplexNumber add(ComplexNumber complexNumber) {
        return new ComplexNumber(getA() + complexNumber.getA(), getB() + complexNumber.getB());
    }

    public void add2(ComplexNumber complexNumber) {
        this.a = this.add(complexNumber).getA();
        this.b = this.add(complexNumber).getB();
    }

    public ComplexNumber sub(ComplexNumber complexNumber) {
        return new ComplexNumber(this.a - complexNumber.getA(), this.b - complexNumber.getB());
    }

    public void sub2(ComplexNumber complexNumber) {
        this.a = this.sub(complexNumber).getA();
        this.b = this.sub(complexNumber).getB();
    }

    public ComplexNumber div(ComplexNumber complexNumber) {
        double k, l;
        k = (complexNumber.getA() * this.a + complexNumber.getB() * this.b) / (complexNumber.getA() * complexNumber.getA() + complexNumber.getB() * complexNumber.getB());
        l = (complexNumber.getA() * this.b - complexNumber.getB() * this.a) / (complexNumber.getA() * complexNumber.getA() + complexNumber.getB() * complexNumber.getB());
        complexNumber.setA(k);
        complexNumber.setB(l);
        return complexNumber;
    }

    public void div2(ComplexNumber complexNumber) {
        this.a = this.div(complexNumber).getA();
        this.b = this.div(complexNumber).getB();
    }

    public double arg() {
        return Math.atan(b / a);
    }

    public ComplexNumber pow(double n) {
        double k, l, m;
        m = Math.pow(this.lenght(), n);
        k = n * Math.sin(a / this.lenght());
        l = n * Math.cos(b / this.lenght());
        return new ComplexNumber(m * k, m * l);
    }

    public double lenght() {
        return Math.sqrt(a * a + b * b);
    }

    public boolean equals(ComplexNumber complexNumber) {
        return (this.getA() == complexNumber.getA()) && (this.b == complexNumber.getB());
    }

    public String toString() {
        return "i*" + b + ((a < 0) ? " - " : " + ") + Math.abs(a);
    }

    public double getA() {
        return a;
    }

    public void setA(double a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }
}
