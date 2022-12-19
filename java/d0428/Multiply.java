package d0428;

public class Multiply extends Calculator{
    @Override
    public int calculate() {
        return value1 * value2;
    }

    @Override
    public String getOperator() {
        return "*";
    }

    public static void main(String[] args) {
        Multiply multiply = new Multiply();
        multiply.execute();
    }
}
