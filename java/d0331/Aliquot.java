package d0331;

import java.util.Scanner;

public class Aliquot {
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
	
	public String findAliquots(int value) {
		String st ="";
		for(int i = 1; i <= value; i++) {
			if(value % i == 0) {
				st += (i+", ");
			}
		}
		
		return st.substring(0, st.length()-2);
	}
	
	
	public static void main(String[] args) {
		Aliquot findAliquots = new Aliquot();
		findAliquots.prepareScanner();
		
		Scanner scanner = findAliquots.getScanner();
		
		System.out.println("write ONE num");
		long check1 = System.currentTimeMillis();
		int value = scanner.nextInt();
		System.out.println(findAliquots.findAliquots(value));
		long check2 = System.currentTimeMillis();
		System.out.println(check2-check1);
		
		findAliquots.closeScanner();
	}
}
