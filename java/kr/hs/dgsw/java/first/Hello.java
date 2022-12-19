package kr.hs.dgsw.java.first;

public class Hello {
	public void sayHello() {
		System.out.println("hello World!"); //print
	}
	
	public static void main(String[] args) { //메인 함수
		Hello hello = new Hello();
		hello.sayHello();
		
		First second = new First();
	}
}
//파일 이름과 클래스 이름은 같아야된다