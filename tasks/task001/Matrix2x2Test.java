package task001;


import org.junit.Assert;
import org.junit.Test;

/**
 * Created by Almaz on 23.02.2016.
 */
public class Matrix2x2Test {
    private final static double KPS = 1e-9;

    @Test
    public void constructorShouldReturnZeroMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2();
        double[][] matrix = {{0,0},{0,0}};
        compareMatrix2x2(matrix, matrix2x2.matrix);
    }

    @Test
    public void constructorShouldReturnDoubleMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(5);
        double[][] matrix = {{5,5},{5,5}};
        compareMatrix2x2(matrix, matrix2x2.matrix);
    }

    @Test
    public void constructorShouldReturnFourDoubleMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(1, 2, 3, 4);
        double[][] matrix = {{1,2},{3,4}};
        compareMatrix2x2(matrix, matrix2x2.matrix);
    }

    @Test
    public void constructorShouldReturnMatrix2x2(){
        double[][] matrix = {{1,2},{3,4}};
        Matrix2x2 matrix2x2 = new Matrix2x2(matrix);
        compareMatrix2x2(matrix, matrix2x2.matrix);
    }

    @Test
    public void addShouldReturnSumOfTwoMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(5);
        Matrix2x2 matrix2x21 = new Matrix2x2(2);
        Matrix2x2 matrix2x22 = new Matrix2x2(7);
        compareMatrix2x2(matrix2x22.matrix, matrix2x2.add(matrix2x21).matrix);
    }

    @Test
    public void addShouldChangeFirstMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(5);
        Matrix2x2 matrix2x21 = new Matrix2x2(2);
        double[][] matrix = {{7,7},{7,7}};
        matrix2x2.add2(matrix2x21);
        compareMatrix2x2(matrix, matrix2x2.matrix);
    }
    @Test
    public void subShouldReturnSubOfTwoMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(5);
        Matrix2x2 matrix2x21 = new Matrix2x2(2);
        Matrix2x2 matrix2x22 = new Matrix2x2(3);
        compareMatrix2x2(matrix2x22.matrix, matrix2x2.sub(matrix2x21).matrix);
    }

    @Test
    public void subShouldChangeFirstMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(5);
        Matrix2x2 matrix2x21 = new Matrix2x2(2);
        double[][] matrix3 = {{3,3},{3,3}};
        matrix2x2.sub2(matrix2x21);
        compareMatrix2x2(matrix3, matrix2x2.matrix);
    }
    @Test
    public void multNumberShouldReturnMultOfTwoMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(5);
        double[][] matrix3 = {{10,10},{10,10}};
        compareMatrix2x2(matrix3, matrix2x2.multNumber(2).matrix);
    }
    @Test
    public void multNumberShouldChangeMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(5);
        matrix2x2.multNumber2(2);
        double[][] matrix3 = {{10,10},{10,10}};
        compareMatrix2x2(matrix3, matrix2x2.matrix);
    }
    @Test
    public void multShouldReturnNewMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(0,1,1,0);
        Matrix2x2 matrix2x21 = new Matrix2x2(2);
        double[][] matrix3 = {{2,2},{2,2}};
        compareMatrix2x2(matrix3, matrix2x2.mult(matrix2x21).matrix);
    }
    @Test
    public void multShouldChangeMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(0,1,1,0);
        Matrix2x2 matrix2x21 = new Matrix2x2(2);
        matrix2x2.mult2(matrix2x21);
        double[][] matrix3 = {{2,2},{2,2}};
        compareMatrix2x2(matrix3, matrix2x2.matrix);
    }
    @Test
    public void detShouldReturnMatrix2x2Determinant(){
        Matrix2x2 matrix2x2 = new Matrix2x2(1,2,3,4);
        Assert.assertEquals(-2, matrix2x2.det(), KPS);
    }
    @Test
    public void transponShouldTransponMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(1,2,3,4);
        matrix2x2.transpon();
        Matrix2x2 matrix2x21 = new Matrix2x2(1,3,2,4);
        compareMatrix2x2(matrix2x2.matrix, matrix2x21.matrix);
    }
    @Test
    public void inverseShouldReturnInverseMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(1,2,3,4);
        Matrix2x2 matrix2x21 = new Matrix2x2(-2,1,1.5,-0.5);
        compareMatrix2x2(matrix2x21.matrix, matrix2x2.inverseMatrix().matrix);
        matrix2x2 = new Matrix2x2(2);
        matrix2x21 = new Matrix2x2();
        compareMatrix2x2(matrix2x21.matrix, matrix2x2.inverseMatrix().matrix);
    }
    @Test
    public void equivalentShouldReturnOneDiagonalMatrix2x2(){
        Matrix2x2 matrix2x2 = new Matrix2x2(1,2,3,4);
        double[][] matrix3 = {{1,0},{0,1}};
        compareMatrix2x2(matrix3, matrix2x2.equivalentDiagonal().matrix);
        matrix2x2 = new Matrix2x2(2);
        matrix3 = new double[][]{{0, 0}, {0, 0}};
        compareMatrix2x2(matrix3, matrix2x2.equivalentDiagonal().matrix);
    }
    @Test
     public void toStringShouldReturnCorrectStringValue(){
        Matrix2x2 matrix2x2 = new Matrix2x2(1,2,3,4);
        String toString = "1.0 2.0" + "\n" + "3.0 4.0";
        Assert.assertEquals(toString, matrix2x2.tostring());
    }
    public static void compareMatrix2x2(double[][] m1, double[][] m2){
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                Assert.assertEquals(m1[i][j], m2[i][j], KPS);
            }
        }
    }
}
