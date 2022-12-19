package PhoneList;

import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class DeleteInfo extends Main{
    public DeleteInfo() throws FileNotFoundException{}

     static String delNum;
     static String delName;

     static List<String> copyInfo = new ArrayList<>();

     public static void Delete() throws IOException{
         while (true) {
             System.out.println("전화번호를 삭제할 이름을 입력하세요");
             delName = scanner.nextLine();

             if (! delName.matches("[+-]?\\d*(\\.\\d+)?")) {
                 break;
             } else {
                 System.out.println("다시 입력하세요");
             }
         }

         String line;
         while ((line = bufferedReader.readLine()) != null) {
             phoneInfo.add(line);
         }

         for (int i = 0; i < phoneInfo.size(); i++){
             if (phoneInfo.get(i).contains(delName)){
                 copyInfo.add(phoneInfo.get(i));
             }
         }

         if (copyInfo.size() == 0){
             System.out.println("검색결과가 없습니다");
         }
         else if(copyInfo.size() == 1){
             DelNum(delName);
         }
         else {
             System.out.println("검색결과");
             phoneListSort(copyInfo);

             while (true){
                 System.out.println("검색 결과가 여러개 입니다. 삭제할 전화번호를 입력세하요");
                delNum = scanner.nextLine().trim();

                if (isExist()){
                    break;
                }
                else {
                    System.out.println("다시 입력하세요");
                }
             }
         }
     }

     public static void DelNum(String del) {
         try (BufferedWriter bw = new BufferedWriter(
                 new FileWriter(phoneList)
         )) {
             for (String s : phoneInfo) {
                 if (s.contains(del)) {
                     continue;
                 }
                 bw.write(s + "\n");
             }
         } catch (IOException e) {
             e.printStackTrace();
         }
         System.out.println("삭제를 완료하였습니다");
     }

     public static boolean isExist() {
        for (int i = 0; i < copyInfo.size(); i++){
            if (copyInfo.get(i).contains(delNum)){
                DelNum(delNum);
                return true;
            }
        }
         return false;
     }
}
