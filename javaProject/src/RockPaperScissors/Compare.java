package RockPaperScissors;

import static RockPaperScissors.Main.*;

public class Compare{
    public static void compare(String value){
        int human = rockPaperScissors.indexOf(value);
        int com = rockPaperScissors.indexOf(randomResult);

        System.out.printf("사용자 : %s  VS  COM : %s\n", value, randomResult);
        if ((human - com) == 0){
            System.out.println("비겼습니다");
            record[1]++;
        }
        else if((human - com) == 1){
            System.out.println("승리하였습니다");
            record[0]++;
        }else {
            System.out.println("패배하였습니다");
            record[2]++;
        }
    }

}
