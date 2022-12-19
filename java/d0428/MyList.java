package d0428;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyList extends ArrayList<String> {
    @Override
    public boolean add(String e) {

        boolean added = false;
        for (int i = 0; i < size(); i++){
            // > 0 반대로 정렬
            if (e.compareTo(get(i)) < 0){
                add(i,e);
                added = true;
                break;
            }
        }

        //가장 늦게 들어온 값이 마지막이면
        if(!added){
            return super.add(e);
        }
        else {
            return true;
        }
    }

    public static void main(String[] args) {
       List<String> list = new MyList();
        list.add("blue");
        list.add("black");
        list.add("red");
        list.add("green");
        list.add("yellow");
        list.add("pink");

        for(String color : list) {
            System.out.println(color);
        }


    }

}
