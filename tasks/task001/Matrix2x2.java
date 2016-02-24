package task001;

/**
 * Created by Almaz on 19.11.2014.
 */
public class Matrix2x2 {
    public double[][] matrix;

    Matrix2x2() {
        this(new double[][]{{0, 0}, {0, 0}});
    }

    Matrix2x2(double n) {
        this(new double[][]{{n, n}, {n, n}});
    }

    Matrix2x2(double[][] m) {
        matrix = m;
    }

    Matrix2x2(double a1, double a2, double a3, double a4) {
        this(new double[][]{{a1, a2}, {a3, a4}});
    }

    public Matrix2x2 add(Matrix2x2 matrix2x2) {
        Matrix2x2 m = new Matrix2x2();
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                m.matrix[i][j] = this.matrix[i][j] + matrix2x2.matrix[i][j];
            }
        }
        return m;
    }

    public void add2(Matrix2x2 matrix2x2) {
        Matrix2x2 matrix = new Matrix2x2();
        matrix = add(matrix2x2);
        this.matrix = matrix.matrix;
    }

    public Matrix2x2 sub(Matrix2x2 matrix2x2) {
        Matrix2x2 m = new Matrix2x2();
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                m.matrix[i][j] = this.matrix[i][j] - matrix2x2.matrix[i][j];
            }
        }
        return m;
    }

    public void sub2(Matrix2x2 matrix2x2) {
        Matrix2x2 matrix = new Matrix2x2();
        matrix = sub(matrix2x2);
        this.matrix = matrix.matrix;
    }

    public Matrix2x2 multNumber(double n) {
        Matrix2x2 matrix2x2 = new Matrix2x2();
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                matrix2x2.matrix[i][j] = this.matrix[i][j] * n;
            }
        }
        return matrix2x2;
    }

    public void multNumber2(double n) {
        Matrix2x2 matrix2x2 = multNumber(n);
        this.matrix = matrix2x2.matrix;
    }

    public Matrix2x2 mult(Matrix2x2 matrix2x2) {
        Matrix2x2 matrix = new Matrix2x2();
        matrix.matrix[0][0] = this.matrix[0][0] * matrix2x2.matrix[0][0] + this.matrix[0][1] * matrix2x2.matrix[1][0];
        matrix.matrix[0][1] = this.matrix[0][0] * matrix2x2.matrix[0][1] + this.matrix[0][1] * matrix2x2.matrix[1][1];
        matrix.matrix[1][0] = this.matrix[1][0] * matrix2x2.matrix[0][0] + this.matrix[1][1] * matrix2x2.matrix[1][0];
        matrix.matrix[1][1] = this.matrix[1][0] * matrix2x2.matrix[0][1] + this.matrix[1][1] * matrix2x2.matrix[1][1];
        return matrix;
    }

    public void mult2(Matrix2x2 matrix2x2) {
        Matrix2x2 m = mult(matrix2x2);
        this.matrix = m.matrix;
    }

    public double det() {
        return this.matrix[0][0] * this.matrix[1][1] - this.matrix[0][1] * this.matrix[1][0];
    }

    public void transpon() {
        double k = this.matrix[1][0];
        this.matrix[1][0] = this.matrix[0][1];
        this.matrix[0][1] = k;
    }

    public Matrix2x2 inverseMatrix() {
        if (this.det() == 0) {
            return new Matrix2x2();
        } else {
            Matrix2x2 matrix2x2 = this;
            double k = matrix2x2.matrix[0][0];
            matrix2x2.matrix[0][0] = matrix2x2.matrix[1][1];
            matrix2x2.matrix[0][1] *= -1;
            matrix2x2.matrix[1][0] *= -1;
            matrix2x2.matrix[1][1] = k;
            matrix2x2.multNumber2(1 / this.det());
            return matrix2x2;
        }
    }

    public Matrix2x2 equivalentDiagonal() {
        if (this.det() != 0) {
            return new Matrix2x2(1, 0, 0, 1);
        }
        else{
            return new Matrix2x2();
        }
    }

    public String tostring() {
        String toString=(matrix[0][0] + " " + matrix[0][1]+"\n");;
        toString += (matrix[1][0] + " " + matrix[1][1]);
        return toString;
    }
}
