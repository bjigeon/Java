package d0414;

public class Pig extends Animal {
	public Pig(String name) {
		super(name);
	}
	
	@Override
	public void makeSound() {
		System.out.println("²Ü²Ü");
	}
	
	public static void main(String[] args) {
		Animal cat = new Cat("µÅÁö");
		
		cat.move();
		cat.eat("°î¹°");
		cat.makeSound();
	}
}
