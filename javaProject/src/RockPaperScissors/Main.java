package RockPaperScissors;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Random;
import java.util.Scanner;

public class Main {
    static Scanner scanner = new Scanner(System.in);

    static LinkedList<String> rockPaperScissors = new LinkedList<String>(Arrays.asList("가위","바위","보"));

    static Random random = new Random();

    static String randomResult = "";

    public static int[] record = new int[]{0,0,0};

    public static void makeRandomResult(){
        random.setSeed(System.currentTimeMillis());
        randomResult = rockPaperScissors.get(random.nextInt(3));
    }

    public static void printRecord(){
        System.out.printf("승 : %d  무 : %d  패 : %d\n",record[0],record[1],record[2]);
    }

    public static void main(String[] args) {
        while (true){
            System.out.println("quit 입력시 종료 됩니다");
            System.out.printf("'가위 바위 보' 중 한개를 입력해주세요 : ");
            String value = scanner.next();

            makeRandomResult();

            if (value.equals("quit")){
                printRecord();
                break;
            }
            else if(value.equals("가위") || value.equals("바위") || value.equals("보")){
                Compare.compare(value);
                printRecord();
            }
            else {
                System.out.println("다시 입력하세요");
            }
        }
    }
}
