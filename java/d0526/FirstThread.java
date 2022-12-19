package d0526;

import kr.hs.dgsw.java.first.First;

import java.util.Random;

public class FirstThread extends Thread{

    private final String name;

    public FirstThread(String name) {
        this.name = name;
    }

    //Thread 시작 함수
    @Override
    public void run() {
        for (int i = 0; i < 10; i++){

            System.out.printf("%s : %d\n",name,i);

            try {
                Thread.sleep(new Random().nextInt(500) + 1000);
            } catch (InterruptedException e){}
        }
    }

    public static void main(String[] args) {
        FirstThread nadal = new FirstThread("나달");
        FirstThread son = new FirstThread("손흥민");

        nadal.start();
        son.start();

    }
}
