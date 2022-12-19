package d0428;

public abstract class Animal {

    // 자식에서 세부 선언을 해야됨
    public abstract String getName();

    public abstract String makeSound();

    public void move(){
        System.out.printf("%s 이가  %S 소리는 내며 달려갑니다.\n",getName(),makeSound());
    }

    public static void main(String[] args) {
        Animal animal = new Horse();
        animal.move();
    }
}
