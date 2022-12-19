package kr.hs.dgsw.java.first;

public class Rectangle {
	int height;
	int width;
	
	int calculateArea() {
		return this.height * this.width;
	}
	
	void printArea() {
		int area = calculateArea();
		
		System.out.printf("높이 %d 너비 %d 의 면적은 %d 입니다", height,width,area);
		
//		System.out.println("높이 : " + height + "너비 : " + width + "의 면적은 " + area + "입니다.");
	}
}
