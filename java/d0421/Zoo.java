package d0421;

public class Zoo {

    public void bread(Animal animal){
        System.out.printf("%s가 %s웁니다.\n", animal.getName(), animal.getSound());
    }

    public static void main(String[] args) {
        Zoo zoo = new Zoo();

        Pig pig = new Pig();
        zoo.bread(pig);

        Duck duck = new Duck();
        zoo.bread(duck);
    }

}
