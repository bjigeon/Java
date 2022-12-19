package d0421;

import java.util.Date;

public class DateStudy {

    public static void main(String[] args) {
        Date date = new Date();
        System.out.println(date);

        MyDate date1 = new MyDate();
        System.out.println(date1);
        System.out.println(date1.getYear1());


    }
}
