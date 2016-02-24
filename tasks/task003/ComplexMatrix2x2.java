package task003;

public class ComplexMatrix2x2 {
    public ComplexNumber[][] matrix2x2;

    public ComplexMatrix2x2() {
        this(new ComplexNumber(), new ComplexNumber(), new ComplexNumber(), new ComplexNumber());
    }

    public ComplexMatrix2x2(ComplexNumber c) {
        this(c, c, c, c);
    }

    public ComplexMatrix2x2(ComplexNumber c1, ComplexNumber c2, ComplexNumber c3, ComplexNumber c4) {
        matrix2x2 = new ComplexNumber[][]{{c1, c2}, {c3, c4}};
    }

    public ComplexMatrix2x2 add(ComplexMatrix2x2 complexMatrix2x2) {
        ComplexMatrix2x2 complexMatrix2x21 = new ComplexMatrix2x2();
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                complexMatrix2x21.matrix2x2[i][j] = complexMatrix2x2.matrix2x2[i][j].add(this.matrix2x2[i][j]);
            }
        }
        return complexMatrix2x21;
    }

    public ComplexMatrix2x2 mult(ComplexMatrix2x2 complexMatrix2x2) {
        ComplexMatrix2x2 matrix = new ComplexMatrix2x2();
        matrix.matrix2x2[0][0] = this.matrix2x2[0][0].mult(complexMatrix2x2.matrix2x2[0][0]).add(this.matrix2x2[0][1].mult(complexMatrix2x2.matrix2x2[1][0]));
        matrix.matrix2x2[0][1] = this.matrix2x2[0][0].mult(complexMatrix2x2.matrix2x2[0][1]).add(this.matrix2x2[0][1].mult(complexMatrix2x2.matrix2x2[1][1]));
        matrix.matrix2x2[1][0] = this.matrix2x2[1][0].mult(complexMatrix2x2.matrix2x2[0][0]).add(this.matrix2x2[1][1].mult(complexMatrix2x2.matrix2x2[1][0]));
        matrix.matrix2x2[1][1] = this.matrix2x2[1][0].mult(complexMatrix2x2.matrix2x2[0][1]).add(this.matrix2x2[1][1].mult(complexMatrix2x2.matrix2x2[1][1]));
        return matrix;
    }

    public ComplexNumber det() {
        return this.matrix2x2[0][0].mult(this.matrix2x2[1][1]).sub(this.matrix2x2[1][0].mult(this.matrix2x2[0][1]));
    }

    public String tostring() {
        String toString=(matrix2x2[0][0] + " " + matrix2x2[0][1]+"\n");;
        toString += (matrix2x2[1][0] + " " + matrix2x2[1][1]);
        return toString;
    }
}
