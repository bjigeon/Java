package d0526;

import java.util.Random;

public class Run extends Thread{

    private final String name;
    private float time = 0;

    public Run(String name, float time){
        this.name = name;
        this.time = time;
    }

    public float countTime(int nowTime, float time){
        return nowTime * (100/time);
    }

    @Override
    public void run() {
        for (int i = 0; i < 16; i++){

            float m = countTime(i, time);
            if (m >= 100){
                System.out.printf("%s 가 100m를 다 뛰었습니다.\n",name);
                break;
            }
            System.out.printf("초 : %d, %s : %f\n",i,name,m);


            try {
                Thread.sleep(1000);
            } catch (InterruptedException e){}
        }
    }

    public static void main(String[] args) {
        Run UB = new Run("UB", (float) 9.58);
        Run KIM = new Run("KIM", (float) 10.07);
        Run GUN = new Run("GUN", (float) 12.56);
        Run STUDENT = new Run("STUDENT", (float) 14.02);

        new Thread(UB).start();
        new Thread(KIM).start();
        new Thread(GUN).start();
        new Thread(STUDENT).start();
    }
}
