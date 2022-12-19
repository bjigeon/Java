package 	d0414;

import java.util.Scanner;

public class PlusCalculator {
	protected final Scanner scanner;
	
	protected int value1;
	
	protected int value2;
	
	public PlusCalculator() {
		this.scanner = new Scanner(System.in);
	}
	
	public void execute() {
		//두 정수를 입력받는다
		this.inputNumbers();
		
		//입력 받은 수를 게산하다
		int result = this.calculate();
		
		//계산 결과를 출력한다
		this.showResult(result);
		
		//자원을 해제한다
		this.scanner.close();
	}
	
	public void inputNumbers() {
		System.out.println("정수 두개를 입력하세요");
		this.value1 = this.scanner.nextInt();
		this.value2 = this.scanner.nextInt();
	}
	
	public int calculate() {
		return this.value1 + this.value2;
	}
	
	public void showResult(int result) {
		//비효율
		/*
		if (calculate() < (value1 + value2) ) {
			System.out.printf("%d - %d = %d",this.value1,this.value2,result);
		}
		else if(calculate() > (value1 + value2) ) {
			System.out.printf("%d + %d = %d",this.value1,this.value2,result);
		}
		*/
		System.out.printf("%d %s %d = %d",this.value1,getOperator(),this.value2,result);
	}
	
	public String getOperator() {
		return "+";
	}
	
	public static void main(String[] args) {
		PlusCalculator calculator = new PlusCalculator();
		calculator.execute();
	}
	
}
