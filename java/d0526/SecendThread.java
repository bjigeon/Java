package d0526;

import java.util.Random;

public class SecendThread implements Runnable{
    private final String name;

    public SecendThread(String name) {
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
        SecendThread nadal = new SecendThread("나달");
        SecendThread son = new SecendThread("손흥민");

        Thread nadalThread = new Thread(nadal);
        nadalThread.start();

        new Thread(son).start();

    }
}
