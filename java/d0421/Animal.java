package d0421;

public class Animal {
    public String getSound(){
        return "";
    }

    public  String getName(){
        return "";
    }

    @Override
    public String toString() {
//        return super.toString();
        return getName();

    }

    public static void main(String[] args) {
        Animal animal = new Animal();
        System.out.println(animal.toString());

        Pig pig = new Pig();
        Duck duck = new Duck();
        System.out.println(pig.toString());
        System.out.println(duck.toString());
    }
}
