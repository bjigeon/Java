package PhoneList;

import java.io.*;
import java.util.*;

public class Main {
    static File phoneList = new File("/Users/bjigeon/Documents/javaProject/src/PhoneList/PhoneList.txt");

    static BufferedWriter bufferedWriter;

    static BufferedReader bufferedReader;

    static Scanner scanner = new Scanner(System.in);

    static List<String> phoneInfo = new ArrayList<>();

//    static List<String> CopyPhoneInfo = new ArrayList<>();

    public Main() throws FileNotFoundException{}

    public static void phoneListSort(List<String> list){
        Collections.sort(list);
        for(int i = 0 ; i < list.size(); i++){
            System.out.println(list.get(i));
        }
    }

    public static void showMenu(){
        System.out.println("이름과 전화번호 등록하기 : 등록");
        System.out.println("이름으로 전화번호 검색하기 : 이름검색");
        System.out.println("전화번호 일부로 전화번호 검색하기 : 전화번호검색");
        System.out.println("이름으로 전화번호 삭제하기 : 삭제");
        System.out.println("프로그램 종료하기 : 종료");
    }

    public static void main(String[] args) throws IOException {
        while (true){
            //다쓴 함수 초기화
            phoneInfo = new ArrayList<>();

            bufferedWriter = new BufferedWriter(new FileWriter(phoneList ,true));
            bufferedReader = new BufferedReader(new FileReader(phoneList));

            showMenu();

            switch (scanner.nextLine()){
                case "등록":
                    Registration.regist();
                    break;

                case "이름검색":
                    NameSearch.Search();
                    break;

                case "전화번호검색":
                    NumSearch.Search();
                    break;

                case "삭제":
                    DeleteInfo.Delete();
                    break;

                case "종료":
                    System.out.println("프로그램을 종료합니다");
                    System.exit(1);
                    break;

                default:
                    System.out.println("존재 하지 않는 명령어를 입력하셨습니다. 다시 입력하세요");
                    break;
            }
        }
    }
}
