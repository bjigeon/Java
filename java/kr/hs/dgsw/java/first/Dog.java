package kr.hs.dgsw.java.first;

public class Dog {
	String Color;
	int CountOfLegs;
	String Species;
	
	void print() {
		System.out.println(Color + " " + CountOfLegs + " " + Species);
	}
	
	int getCountOfLegs() {
		return CountOfLegs;
	}
	
	
	public static void main(String[] args) {
		Dog jindo = new Dog();
		jindo.Color = "yellow";
		jindo.CountOfLegs = 4;
		jindo.Species = "진도개";
		
		Dog bulldog = new Dog();
		bulldog.Color = "red";
		bulldog.CountOfLegs = 4;
		bulldog.Species = "불독";
		
		jindo.print();
		bulldog.print();
		
	}
}
