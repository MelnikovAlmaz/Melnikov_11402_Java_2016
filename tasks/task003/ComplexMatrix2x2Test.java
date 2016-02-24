package task003;

import org.junit.Assert;
import org.junit.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 * Created by Almaz on 24.02.2016.
 */

public class ComplexMatrix2x2Test {
    private final static double KPS = 1e-9;

    @Test
    public void emptyConstructorShouldReturnZeroComplexNumberMatix2x2() {
        ComplexNumber complexNumber = mock(ComplexNumber.class);
        when(complexNumber.getA()).thenReturn(0.0);
        when(complexNumber.getB()).thenReturn(0.0);
        ComplexNumber[][] matrix2x2 = new ComplexNumber[][]{{complexNumber, complexNumber}, {complexNumber, complexNumber}};
        ComplexMatrix2x2 complexMatrix2x2 = new ComplexMatrix2x2();
        compareMatrix2x2(matrix2x2, complexMatrix2x2.matrix2x2);
    }
    @Test
    public void FourNumberConstructorShouldReturnCorrectComplexNumberMatix2x2() {
        ComplexNumber complexNumber = mock(ComplexNumber.class);
        when(complexNumber.getA()).thenReturn(0.0, 1.0, 2.0, 3.0);
        when(complexNumber.getB()).thenReturn(0.0, 1.0, 2.0, 3.0);
        ComplexNumber complexNumber1 = mock(ComplexNumber.class);
        when(complexNumber1.getA()).thenReturn(0.0, 1.0, 2.0, 3.0);
        when(complexNumber1.getB()).thenReturn(0.0, 1.0, 2.0, 3.0);
        ComplexNumber[][] matrix2x2 = new ComplexNumber[][]{{complexNumber, complexNumber}, {complexNumber, complexNumber}};
        ComplexMatrix2x2 complexMatrix2x2 = new ComplexMatrix2x2(complexNumber1, complexNumber1, complexNumber1, complexNumber1);
        compareMatrix2x2(matrix2x2, complexMatrix2x2.matrix2x2);
    }
    @Test
    public void OneNumberConstructorShouldReturnCorrectComplexNumberMatix2x2() {
        ComplexNumber complexNumber = mock(ComplexNumber.class);
        when(complexNumber.getA()).thenReturn(0.0, 1.0, 2.0, 3.0);
        when(complexNumber.getB()).thenReturn(0.0, 1.0, 2.0, 3.0);
        ComplexNumber complexNumber1 = mock(ComplexNumber.class);
        when(complexNumber1.getA()).thenReturn(0.0, 1.0, 2.0, 3.0);
        when(complexNumber1.getB()).thenReturn(0.0, 1.0, 2.0, 3.0);
        ComplexNumber[][] matrix2x2 = new ComplexNumber[][]{{complexNumber, complexNumber}, {complexNumber, complexNumber}};
        ComplexMatrix2x2 complexMatrix2x2 = new ComplexMatrix2x2(complexNumber1);
        compareMatrix2x2(matrix2x2, complexMatrix2x2.matrix2x2);
    }
    @Test
    public void additionShouldReturnCorrectComplexNumberMatix2x2() {
        ComplexNumber complexNumber = mock(ComplexNumber.class);
        when(complexNumber.getA()).thenReturn(0.0, 0.0,0.0, 0.0);
        when(complexNumber.getB()).thenReturn(0.0, 0.0, 0.0, 0.0);
        ComplexNumber[][] matrix2x2 = new ComplexNumber[][]{{complexNumber, complexNumber}, {complexNumber, complexNumber}};
        ComplexMatrix2x2 complexMatrix2x2 = new ComplexMatrix2x2();
        ComplexMatrix2x2 complexMatrix2x21 = new ComplexMatrix2x2();
        ComplexMatrix2x2 complexMatrix2x22 = complexMatrix2x2.add(complexMatrix2x21);
        compareMatrix2x2(matrix2x2, complexMatrix2x22.matrix2x2);
    }
    @Test
    public void multiplicationShouldReturnCorrectComplexNumberMatix2x2() {
        ComplexNumber complexNumber = mock(ComplexNumber.class);
        when(complexNumber.getA()).thenReturn(0.0, 0.0,0.0, 0.0);
        when(complexNumber.getB()).thenReturn(0.0, 0.0, 0.0, 0.0);
        ComplexNumber[][] matrix2x2 = new ComplexNumber[][]{{complexNumber, complexNumber}, {complexNumber, complexNumber}};
        ComplexMatrix2x2 complexMatrix2x2 = new ComplexMatrix2x2();
        ComplexMatrix2x2 complexMatrix2x21 = new ComplexMatrix2x2();
        ComplexMatrix2x2 complexMatrix2x22 = complexMatrix2x2.mult(complexMatrix2x21);
        compareMatrix2x2(matrix2x2, complexMatrix2x22.matrix2x2);
    }
    @Test
    public void detShouldReturnCorrectDeterminant() {
        ComplexNumber complexNumber = mock(ComplexNumber.class);
        ComplexMatrix2x2 complexMatrix2x2 = new ComplexMatrix2x2();
        when(complexNumber.getA()).thenReturn(0.0);
        when(complexNumber.getB()).thenReturn(0.0);
        Assert.assertEquals(complexNumber.getA(), complexMatrix2x2.det().getA(), KPS);
        Assert.assertEquals(complexNumber.getB(), complexMatrix2x2.det().getB(), KPS);
    }
    @Test
    public void toStringShouldReturnCorrectStringValue(){
        ComplexMatrix2x2 matrix2x2 = new ComplexMatrix2x2();
        String toString = "i*0.0 + 0.0 i*0.0 + 0.0" + "\n" + "i*0.0 + 0.0 i*0.0 + 0.0";
        Assert.assertEquals(toString, matrix2x2.tostring());
    }
    public void compareMatrix2x2(ComplexNumber[][] m1, ComplexNumber[][] m2){
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                Assert.assertEquals(m1[i][j].getA(), m2[i][j].getA(), KPS);
                Assert.assertEquals(m1[i][j].getB(), m2[i][j].getB(), KPS);
            }
        }
    }
}
