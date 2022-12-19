package d0428;

public class Subtract extends Calculator{
    @Override
    public int calculate() {
        return value1 - value2;
    }

    @Override
    public String getOperator() {
        return "-";
    }

    public static void main(String[] args) {
        Subtract subtract = new Subtract();

        subtract.execute();
    }
}
