package PhoneList;

import java.io.FileNotFoundException;
import java.io.IOException;

public class NumSearch extends Main{
    public NumSearch() throws FileNotFoundException{}

    public static void Search() throws IOException {
        String phoneNum;

        while (true){
            System.out.println("검색할 전화번호 입력하세요(일부입력 가능)");
            phoneNum = scanner.nextLine();
            //문자 이면 (전화번호 이면)
            if (phoneNum.matches("[+-]?\\d*(\\.\\d+)?")) {
                break;
            }
            else {
                System.out.println("다시 입력하세요");
            }
        }

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            if (line.contains(phoneNum)) {
                phoneInfo.add(line);
            }
        }

        if (phoneInfo.size() == 0){
            System.out.println("검색결과가 없습니다");
        }
        else {
            System.out.println("검색 결과입니다");
            phoneListSort(phoneInfo);
            System.out.println();
        }


    }
}
