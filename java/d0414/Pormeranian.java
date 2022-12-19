package d0414;

public class Pormeranian extends Dog{
	public Pormeranian() {
		super("포메라니안");
	}
	
	public static void main(String[] args) {
		Animal pormeranian = new Pormeranian();
		
		pormeranian.move();
		pormeranian.eat("개껌");
		pormeranian.makeSound();
		
//		pormeranian.getClass();
		//가장 위에 있는 클래스는 오브젝트
	}
}
