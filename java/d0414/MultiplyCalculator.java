package d0414;

import java.util.Scanner;

public class MultiplyCalculator extends PlusCalculator{
	public int calculate() {
		return this.value1 * this.value2;
	}
	
	public String getOperator() {
		return "*";
	}
	
	
	public static void main(String[] args) {
		MultiplyCalculator calculator = new MultiplyCalculator();
		calculator.execute();
	}
	
}
