package d0331;

import java.util.Scanner;

public class Sum {
	private Scanner scanner;
	
	public void prepareScanner() {
		this.scanner = new Scanner(System.in);
	}
	
	public void closeScanner() {
		this.scanner.close();
	}
	
	public Scanner getScanner() {
		return this.scanner;
	}
	
	public int toA(int value1) {
//		int sum = 0;
//		for (int i = 0; i <= value1; i++) {
//			sum+=i;
//		}
//		return sum;
		
		return aToB(1,value1);
	}
	
	public int aToB(int value2, int value3) {
		int sum = 0;
		for (int i = value2; i <= value3; i++) {
			sum+=i;
		}
		return sum;
	}
	
	public static void main(String[] args) {
		Sum work = new Sum();
		work.prepareScanner();
		
		Scanner scanner = work.getScanner();
		
		System.out.println("write ONE num");
		int value1  = scanner.nextInt();
		
		System.out.println("write  Two num");
		int value2  = scanner.nextInt();
		int value3  = scanner.nextInt();
		
		System.out.println(work.toA(value1));
		System.out.println(work.aToB(value2,value3));
		
		work.closeScanner();
	}
}
