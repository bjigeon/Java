package d0414;

//부모에 생성자가 있으면 자식에서 생성자를 호출 해야된다

public class Dog extends Animal{
	public Dog(String name) {
		super(name);
	}
	
	@Override
	public void makeSound() {
		System.out.println("멍멍");
	}
	
	public static void main(String[] args) {
		Animal dog = new Dog("해피");
		dog.move();
		dog.eat("사료");
		dog.makeSound();
	}
}
