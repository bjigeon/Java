package kr.hs.dgsw.java.dept23.d0317;

import java.util.Scanner;

public class Homework {
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
	
	public static void main(String[] args) {
		Homework study = new Homework();
		study.prepareScanner();
		
		Scanner scanner = study.getScanner();
		
		while (true) {			
			System.out.println("wite some code");
			int value = scanner.nextInt();
			
			if(value == -1){
				break;
			}
			
			System.out.printf("%c\n",(char)value);
		}
		study.closeScanner();
		
	}
}


