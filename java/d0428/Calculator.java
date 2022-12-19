package d0428;

import java.util.Scanner;

public abstract class Calculator {
    protected final Scanner scanner;

    protected int value1;
    protected int value2;

    public Calculator(){
        this.scanner = new Scanner(System.in);
    }

    public void execute(){
        while (true) {
            //두 정수를 입력 받는다.
            this.inputValue();

//            if (value2 == 0 && value1 == 0){
//                System.out.println("프로그램을 종료 합니다.");
//                this.scanner.close();
//                break;
//            }

            if (isExitConditon()){
                break;
            }

            //계산을 수행한다.
            int result = this.calculate();

            //결과를 출력한다.
            showResult(result);

//            this.scanner.close();
//            System.out.println("프로그램을 종료 합니다.");
        }
    }

    public void inputValue(){
        System.out.println("두 정수를 입력하세요.");
        this.value1 = this.scanner.nextInt();
        this.value2 = this.scanner.nextInt();

    }

    public abstract int calculate();

    public void showResult(int result){
        System.out.printf("%d %s %d = %d\n",value1,getOperator(),value2,result);
    }

    public abstract String getOperator();

    public boolean isExitConditon(){
        return (value1 == 0 && value2 == 0);
    }
}
