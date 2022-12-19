package d0414;

public class Chicken extends Animal {
	public Chicken(String name) {
		super(name);
	}
	
	@Override
	public void makeSound() {
		System.out.println("²¿³¢¿À");
	}
	
	public static void main(String[] args) {
		Animal cat = new Cat("´ß");
		
		cat.move();
		cat.eat("°î½Ä");
		cat.makeSound();
	}
}
