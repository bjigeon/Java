package PhoneList;

import java.io.FileNotFoundException;
import java.io.IOException;

public class Registration extends Main{
    public Registration() throws FileNotFoundException{}

    public static void regist() throws IOException{
        // 등록할 정보 받기
        String Info;
        while (true) {
            System.out.println("등록할 이름과 전화번호를 입력하세요(이름 010-0000-0000)");
            Info = scanner.nextLine();
            if (Info.contains(" ")) {
                bufferedWriter.append(Info);
                bufferedWriter.newLine();
                bufferedWriter.close();
                break;
            } else {
                System.out.println("다시입력하세요");
            }
        }

        System.out.println("등록을 완료 하였습니다");
        System.out.println();
    }
}
