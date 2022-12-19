package d0428;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class ListStudy {

    public void studyList(){
        List<String> list = new ArrayList<>();
        String[] array = new String[5];

        //저장하기

        array[0] = "blue";
        array[1] = "black";
        array[4] = "red";

            // 배열 2,3 번에 blue black
        list.add("blue");
        list.add("black");
        list.add("red");
        list.add("green");
        list.add("yellow");
        list.add("pink");

        // 중간에 값 넣기
        list.add(3, "white");

        //읽어오기
        String color = array[1];

        color = list.get(1);

        //크기
        int size = array.length;
        size = list.size();

        for (int i = 0; i < list.size(); i++){
            System.out.println(i + " : " + list.get(1));
        }

        for (String str : list){
            System.out.println(str);
        }

        //삭제하기
        String value = list.remove(1);

        System.out.println();
        for (String str : list){
            System.out.println(str);
        }

        System.out.println(list.size());
    }

    public static void main(String[] args) {
        ListStudy listStudy = new ListStudy();
        listStudy.studyList();
    }

}
