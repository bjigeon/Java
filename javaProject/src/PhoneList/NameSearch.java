package PhoneList;

import java.io.FileNotFoundException;
import java.io.IOException;

public class NameSearch extends Main{
    public NameSearch() throws FileNotFoundException{}
    public static void Search() throws IOException {
        String name;
        while (true) {
            System.out.println("검색할 이름을 입력하세요");
            name = scanner.nextLine();

            //문자가 아니면 (숫자 이면)
            if (! name.matches("[+-]?\\d*(\\.\\d+)?")) {
                break;
            } else {
                System.out.println("다시 입력하세요");
            }
        }

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            if (line.contains(name)) {
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
